# Spec 狀態治理與風險補齊計畫

日期：2026-08-13  
狀態：完成

## 目標

整理 `docs/Spec.md` 的 Confirmed／Proxy Assumption／Pending 狀態，替未決項目標示優先級，並補足正式上線風險；同時記錄 Google Sheet + Apps Script 的 MVP 資料架構決策。

## 範圍

1. 合併三個重複的 MVP 決策區塊至既有狀態分類。
2. 為所有 Pending 項目加上優先標籤。
3. 新增個資、表單防護與成效衡量三項 Pending。
4. 新增 ADR，不修改產品程式或其他規格檔。

## 驗證

- 確認三個舊標題已移除。
- 確認每一個 Pending 條目都有一個優先標籤。
- 以 `git diff --check` 檢查 Markdown 變更。
