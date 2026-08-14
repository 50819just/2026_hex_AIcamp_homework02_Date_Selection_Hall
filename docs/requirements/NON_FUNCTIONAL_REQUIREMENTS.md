# Non-Functional Requirements

狀態：draft  
最後更新：2026-08-13

本文件記錄第一版 MVP 的非功能需求。已確定採用的技術流程標記為 `Confirmed MVP Product Decision`；由研究推導的服務內容標記為 `Proxy Assumption`；未經業主確認的資料保存、營業與回覆規則一律保留為 `Pending Owner Validation`。

## Privacy / Data Handling

- 預約資料不得公開展示、不得以公開連結提供存取，也不得作為案例素材使用。
- 表單與資料傳輸必須使用安全傳輸；正式實作時不得以 HTTP 或公開可寫入的方式傳送預約資料。
- 預約資料只可用於預約聯繫、服務確認與相關溝通，不應收集目前服務不需要的額外個資。
- Google Sheet／後台資料必須維持私有存取，不得開放公開瀏覽、公開編輯或公開下載。
- 表單送出前須有必勾資料使用 Checkbox，並提供資料使用說明入口。
- Checkbox 文案目前僅為 UI / Content Placeholder，不得自行宣稱已完成法律告知或完整合規。
- 本輪不自行制定完整法律條款、資料保存期限、資料刪除流程或帳號管理政策；這些均屬 Pending Owner Validation。

### Required Before Production Launch / Pending Final Validation
- 正式資料使用告知／Privacy Policy。
- 資料保存期限、實際儲存位置與資料管理人。
- 使用者查詢、更正、停止使用或刪除資料的聯絡與處理流程。
- Google Sheet、Google Account、Email 通知與其他資料存取權限的最終管理方式。

## Form Reliability

- 表單送出後，資料須寫入結構化預約紀錄；第一版採 Google Apps Script 寫入私有 Google Sheet 的 `Confirmed MVP Product Decision`。
- 送出期間需有清楚 Loading State，並暫時避免同一筆表單被重複送出。
- 送出成功需顯示明確 Submitted State：「預約申請已送出」，不得顯示「預約成功」。
- 送出失敗時，需保留使用者已填資料，提供 Retry，並提供 LINE／電話作為替代聯絡路徑。
- 初始案件狀態為 `New／待確認`；Email 可作新申請通知，不作為唯一案件資料庫。
- 表單、Google Sheet 欄位與狀態需能對應，避免將服務專屬資料、到場需求或聯絡偏好遺漏或寫入錯欄。

## Accessibility

- 每一個表單控制項必須有清楚、可見的 Label；Placeholder 不得作為唯一標示。
- Validation Error 必須可讀、指出需修正的欄位與原因，不能只使用顏色傳達。
- 互動元件的 Touch Target 至少為 44 × 44 px。
- 表單、Checkbox、按鈕與主要導覽必須可用鍵盤操作。
- 資料使用 Checkbox 必須有清楚可辨識的 Label 與 Required 狀態；未勾選時需說明無法送出的原因。

## Responsive

第一版至少需驗證以下視窗寬度：

- Desktop：1440 px
- Tablet：1024 px
- Mobile：375 px

在上述尺寸中，導覽、服務資訊、價格資訊、預約 CTA 與表單欄位必須可閱讀、可操作且不因版面裁切而遺失關鍵內容。

## Performance

- 本輪尚未定義可量測的效能目標、圖片策略或 Core Web Vitals 閾值，保留為待後續技術規格確認。
- 不得以未確認數值宣稱載入時間、LCP、CLS 或可用性 SLA。

## Maintainability / Operations

- 預約資料接收方式需維持結構化與可追查，避免只依賴分散的 Email 或 LINE 對話。
- Google Account 擁有者、實際資料管理者、Email 通知收件人及是否建立 LINE 官方帳號，均為 Pending Owner Validation。
- 本輪不建立 CRM、完整後台、會員系統或複雜資料庫。

## Testability

- 需驗證 Required 欄位、資料使用 Checkbox、送出中、成功、失敗、重試與重複送出防護。
- 需驗證資料正確寫入預約紀錄，且初始狀態為 `New／待確認`。
- 需於 Desktop 1440、Tablet 1024、Mobile 375 驗證主要預約流程。
- 需以鍵盤操作與可見錯誤訊息驗證表單基本可近用性。

## Open Questions / Pending Owner Validation

- 預約資料保存多久，以及後續如何刪除或管理。
- 最終由哪個 Google Account 擁有及管理 Google Sheet。
- Email 新申請通知是否啟用，以及正式收件人是誰。
- 是否建立 LINE 官方帳號，及其與人工聯絡流程的關係。
- 營業時間、一般回覆時間、休息日與急件的實際處理方式。

## 文件與證據

- 需保留設計、測試與流程證據。
- 實作時需記錄表單資料流、成功／失敗狀態與測試結果，但不得在公開證據中暴露真實預約個資。
