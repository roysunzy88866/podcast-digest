// 转写稿「归属闸门」的纯逻辑(drift #59)。
//
// 血案:fetch-source 的 postId 提取回落到宽松正则,抓的是集页里「近期集」轮播的第一个 id
// —— 每张 Lenny's 集页都一样 → 连续 4 集拿回同一份转写稿,3 集带着别人的内容发上了站,全程零报错。
// 教训:光把 URL 拼对不够,得有一道**独立于抓取方式**的闸,专门回答「这稿子是不是本集的」。
// 判据用官方 API 给的音频时长 vs 转写稿末段结束时间 —— 拿错稿子时这两个数几乎不可能对上。

/** 容差:2 分钟或 5%,取大者(片头广告/片尾致谢造成的正常出入) */
export function durationTolerance(apiDuration) {
  return Math.max(120, apiDuration * 0.05);
}

/**
 * 转写稿是否属于本集。
 * @param tEnd 转写稿最后一段的结束秒数
 * @param apiDuration 官方 API 给的本集音频秒数
 * @returns {{ok:boolean, skipped?:boolean, drift?:number, tol?:number}}
 *   skipped=true 表示无法判断(缺时长)——放行但要提醒,不是「通过」
 */
export function checkTranscriptBelongs(tEnd, apiDuration) {
  const t = Number(tEnd) || 0;
  const d = Number(apiDuration) || 0;
  if (t <= 0 || d <= 0) return { ok: true, skipped: true };
  const drift = Math.abs(t - d);
  const tol = durationTolerance(d);
  return { ok: drift <= tol, drift, tol };
}
