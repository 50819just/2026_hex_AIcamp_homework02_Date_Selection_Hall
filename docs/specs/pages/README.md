# 玄機堂擇日舘逐頁 Specs

此資料夾只放逐頁規格文件。建立前先確認對應的產品需求、內容需求與流程規格；未確認的營運細節保留 `Pending Owner Validation`，不自行補造。

## Page Spec 建立順序

1. `HOME_PAGE.md`
2. `SERVICE_DETAIL_TEMPLATE.md`（首個代表服務：婚嫁擇日）
3. `BOOKING_PAGE.md`
4. `PRICING_PAGE.md`
5. `SERVICES_LISTING_PAGE.md`
6. `ABOUT_PAGE.md`
7. `FAQ_CONTACT_PAGE.md`

目前正式實作範圍請先讀 `CORE_SCREEN_REQUIREMENTS.md`：包含 22 張 Stitch 參考畫面、Desktop / Tablet / Mobile 三個斷點與付款結果狀態。逐頁文件可補充細節，但不得與該檔、`DESIGN_SPEC.md` 或 `STITCH_SCREEN_INVENTORY.md` 衝突。

## 建立方式

1. 以 `PAGE_TEMPLATE.md` 為結構基礎。
2. 逐頁連結對應的 requirements、specs 與 flows。
3. 清楚區分 Confirmed、MVP Product Decision / Assumption 與 Pending Owner Validation。
4. 每頁至少定義目的、入口、區塊、必要內容、互動、RWD、錯誤／空狀態與驗收條件。
