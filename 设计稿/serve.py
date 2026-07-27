#!/usr/bin/env python3
"""原型预览服务 —— 静态站 + 批注回传。

比 `python3 -m http.server` 多两个口子:
  POST /_comment   前端存一条批注 → 追加进 COMMENTS(一行一条 JSON)
  GET  /_comment[s] 读回全部批注(前端起来时用它判断服务在不在)

这样用户在网页上点一下写句话,Claude 直接读文件就行,不用他复制粘贴。
用法:python3 serve.py [端口] [目录]
"""
import io
import os
import json
import sys
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8123
# 默认就服务**本文件所在的设计稿目录**(2026-07-27 设计稿独立成档后改)。
# 以前默认 /tmp/uiproto 那份拷贝 —— 拷贝会陈旧,人在旧稿上标注、我读新稿,对不上。
ROOT = sys.argv[2] if len(sys.argv) > 2 else os.path.dirname(os.path.abspath(__file__))
COMMENTS = '/tmp/uiproto-comments.jsonl'
ROUTES = ('/_comment', '/_comments')
WLOCK = threading.Lock()          # ThreadingHTTPServer 会并发;批注文件是 Claude 的读取源,不能写花


def route(path):
    """'/_comments?x=1' → '/_comments';不匹配返回 None。
    (原来写的是 path.rstrip('/s') —— 那是按字符剥,/_commentssss 也会匹配上)"""
    p = path.split('?')[0].rstrip('/')
    return p if p in ROUTES else None


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def _json(self, code, obj):
        body = json.dumps(obj, ensure_ascii=False).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if route(self.path) is None:
            return self.send_error(404)
        try:
            n = int(self.headers.get('Content-Length') or 0)
            if n <= 0 or n > 64 * 1024:
                return self._json(400, {'ok': False, 'err': 'bad length'})
            c = json.loads(self.rfile.read(n).decode('utf-8'))
            # 必须是一条批注对象 —— 传数组/字符串进来会写出解析不了的脏行,
            # 而这个文件是 Claude 读批注的唯一来源,宁可拒收
            if not isinstance(c, dict) or not str(c.get('text', '')).strip():
                return self._json(400, {'ok': False, 'err': 'need {text:...}'})
        except Exception as e:
            return self._json(400, {'ok': False, 'err': str(e)})
        with WLOCK:
            with io.open(COMMENTS, 'a', encoding='utf-8') as f:
                f.write(json.dumps(c, ensure_ascii=False) + '\n')
        print(f"  💬 #{c.get('n')} [{c.get('page')}] {str(c.get('text'))[:60]}", flush=True)
        return self._json(200, {'ok': True})

    def do_GET(self):
        if route(self.path) is not None:
            rows = []
            # 与写入同一把锁:否则可能读到只写了一半的行。
            # 文件随时可能被删掉(清空批注就是 rm 这个文件),所以不做 exists 预判,直接兜异常。
            with WLOCK:
                try:
                    with io.open(COMMENTS, encoding='utf-8') as f:
                        for line in f:
                            line = line.strip()
                            if line:
                                try:
                                    rows.append(json.loads(line))
                                except Exception:
                                    pass
                except FileNotFoundError:
                    pass                       # 还没有批注,返回空数组即可
            return self._json(200, rows)
        return super().do_GET()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')   # 改完刷新就见,不用清缓存
        super().end_headers()

    def log_message(self, *a):
        pass                                            # 静态请求不刷屏,只打印批注


if __name__ == '__main__':
    print(f'原型服务 http://localhost:{PORT}  目录 {ROOT}')
    print(f'批注写入 {COMMENTS}')
    ThreadingHTTPServer(('127.0.0.1', PORT), Handler).serve_forever()
