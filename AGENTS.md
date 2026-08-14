# AGENTS.md

## 專案定位
- 第二場作業：以 React + Vite 重做 Bloom & Grace 花店金流流程介面。
- 作業重點：Design Skill、設計工具 MCP、響應式切版、E2E 金流測試 Skill 與錄影證據。

## 必讀順序
1. `.agents/skills/design-to-code/SKILL.md`
2. `.agents/skills/e2e-payment-test/SKILL.md`
3. `docs/ARCHITECTURE.md`
4. `docs/TESTING.md`
5. `docs/plans/`

## 工作規則
- 前端使用 React + Vite，所有可見文字使用繁體中文。
- 設計稿截圖、共享連結或原始檔統一放 `docs/design/`；不可只憑文字跳過設計依據。
- 金流測試不可使用正式卡號或正式金鑰；付款成功以回站後主動查單結果為準。
- 每次有明確功能改動，先在 `docs/plans/` 建計畫；完成後移至 `docs/plans/archive/`。
- 完成前至少執行 `npm run build` 與 `npm run lint`。
