# 玄機堂擇日舘首頁 MVP 與 Spec 同步迭代計畫

日期：2026-08-12  
狀態：in-progress

## 目標
- 將目前僅有 Logo 展示的首頁，改造成可用的 MVP 服務預約首頁。
- 依已確認產品決策實作服務分類、價格預覽、雙軌 CTA、預約申請狀態文案與手機版版面。
- 新增並維護 `docs/Spec.md`，區分 Confirmed / Assumption / Pending。

## 本輪範圍
1. 建立首頁主要區塊與資料集中管理。
2. 導入服務卡、流程、價格預覽、FAQ、聯絡與預約申請提示。
3. 同步更新 `docs/Spec.md`，記錄已確認需求、MVP 假設與待確認問題。
4. 執行 `npm run build` 與 `npm run lint` 驗證。

## 驗證方式
- `npm run build`
- `npm run lint`

## 後續規格訪談迭代
- 先沿用既有 `docs/` 文件架構，不新增重複的規格系統。
- 依業主回答同步更新 `docs/Spec.md`、既有 specs、requirements 與 flows。
- 將已確認的 MVP 決策、目前假設與真正待確認事項分開記錄。
- 在需求尚未足夠前，不進行正式 Stitch Prompt 產生，也不大幅重構 React Prototype。

## 2026-08-12 需求訪談更新範圍
- 將預約表單整理為 Base Information + Conditional Service-specific Information。
- 將 Event Date／Desired Period 與 Contact Preference 分開記錄。
- 將到場邏輯改為依服務類型條件顯示，不對所有服務一律詢問。
- 保留 Manual Payment Arrangement，不加入 Checkout、線上付款或訂金步驟。
- 將競品內容留在 Research Reference，不把競品欄位直接升級為玄機堂 Confirmed。

## 2026-08-12 需求訪談更新範圍（二）
- 將首次送出需求的資料邊界定為 Minimum Required Information；專業欄位維持選填候選與人工補問。
- 將神明／祖先前台分類改為白話分類，專業術語保留為內部候選 taxonomy。
- 明確區分入宅／搬遷的 Event-based Service 與宅事／到場的 Place-based Consultation。
- 將 Booking Request 與 Confirmed Case / Appointment 分開，不把表單送出視為案件成立。
- 首頁服務排序採 IA／UX 假設，不宣稱為實際成交量或熱門排行。

## 2026-08-13 需求訪談更新範圍（三）
- 為每項服務補上 Deliverable、Delivery Method、Estimated Turnaround 與 Turnaround Factors 的規格欄位。
- 固定完成天數維持 Pending，前台使用依案件確認的保守說法。
- 急件只作為 Urgency Signal，不承諾優先處理、加費或一定承接。
- 修改／改期依案件處理進度人工確認，不預先承諾免費或無限修改。
- Trust 內容優先採 Local + Human + Transparent，僅使用真實且可驗證素材。

## 2026-08-13 Business Requirement → UI / IA 更新範圍
- 首頁採 Understand → Service → Trust → Process → Price → FAQ → Action 主線。
- Service Detail 採 Shared Template + Conditional Sections。
- Pricing 採 Pricing Cards + Pricing Rules，Table 僅作桌機次要比較。
- Booking 採 4 個可見步驟，資料模型仍保留五個概念。
- Stitch Foundation Batch 暫定 Home、婚嫁擇日 Service Detail、Pricing、Booking，並補 Home Mobile 與 Booking Mobile。
- 完成 Stitch Readiness Review；不因不影響 UI 結構的 Pending 阻擋後續 UI Brief。

## 2026-08-13 叔叔代理版研究結果整併
- 將研究推導的服務交付方向標為 Proxy Assumption，不升級為業主 Confirmed。
- 移除「儘快聯繫」等可能構成回覆 SLA 的網站文案，統一為人工確認後經 LINE／電話聯繫。
- 將真實招牌、工作環境與實物局部列為候選 Trust Asset；禁止假素材與未驗證資歷。
- Booking 最後一步保留資料使用說明入口與必勾 Checkbox；完整資料治理列為 Required Before Production Launch。
- 本輪不新增業主訪談問題、不產 Stitch Prompt、不大幅修改 React Prototype。
