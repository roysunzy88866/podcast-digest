import { defineConfig } from "vitest/config";

// 测试门只测本仓库自己的 tests/。
// site/ 是 Quartz v5 构建区(gitignore),它自带几百个测试,不属于本项目测试门。
export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    exclude: ["site/**", "node_modules/**"],
  },
});
