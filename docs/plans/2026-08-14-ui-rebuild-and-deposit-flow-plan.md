# 玄機堂擇日舘 UI 重構＋人工確認後訂金流程 Implementation Plan

日期：2026-08-14
狀態：in-progress
關聯／取代：本計畫吸收並取代 `docs/plans/2026-08-14-ecpay-backend-integration-plan.md` 的範圍；該檔完成後一併移至 `archive/`。

## 0. 文件與現有程式落差盤點（Phase 0 產出）

### 0.1 現有 `src/App.jsx`、`src/siteData.js`、`src/styles.css` 對照規格落差

| 項目 | 現況 | 落差 |
| --- | --- | --- |
| 路由 | 單一 `App.jsx`，靠 `#anchor` 錨點在同一頁捲動 | 完全沒有 `/`、`/services/:id`、`/pricing`、`/booking`、`/booking/submitted`、`/booking/payment/success`、`/booking/payment/failed` 這 7 組 route/state；需要引入輕量 router |
| 服務數量 | `siteData.services` 只有 6 項（缺「其他服務諮詢」） | Spec 已確認為 7 項，需補上 |
| Booking 表單 | 單一長表單，欄位是舊版（服務類型／需求說明／地點／日期／是否到場／LINE 或電話），送出按鈕 `type="button"` **沒有 onClick，完全不會送出** | 需重建為固定 4 Steps（您的需求／服務相關資料／聯絡與到場／確認並送出），含 client validation、required consent checkbox、loading 防重複送出 |
| Booking 送出後行為 | 無 | 需新增 `/booking/submitted`，標題精確為「預約申請已送出」 |
| 付款狀態頁 | 無 | 完全缺少 `Deposit Payment Success` / `Failed／Cancelled` 兩組頁面與資料流 |
| 價格區塊 | 顯示「參考價格／起價區間／依個案報價」三張卡，內容是舊版（未反映三段訂金級距、尾款公式、神明祖先 NT$8,000 起） | 需改為訂金級距 800/1200/1600＋尾款＝總價－訂金的正式說明 |
| 資料集中管理 | `siteData.js` 把 brand／services／pricing／faq／bookingForm／contact 全部塞在同一個物件 | 需拆成 `data/services.js`、`data/siteContent.js`，並把訂金規則、Demo content 獨立管理 |
| 元件拆分 | 283 行全部寫在 `App.jsx`，沒有 `components/`、`pages/`、`lib/`、`hooks/` 目錄 | 需依 Core Screen Requirements 拆成 7 個 page + 共用 layout／ui／booking／payment 元件 |
| Logo | 已使用 `logo-symbol-on-light.png`（暖色版），符合規範 | 可保留 |
| 色彩／字體 token | `styles.css` 目前 96 個 class，未見以 CSS variable 定義的 design token（`--color-primary` 等） | 需依 `DESIGN_SPEC.md` §3 建立正式 token 並讓既有樣式改吃 token，而非各處寫死色碼 |
| RWD | 沒有 media query 分斷點的證據（目前只看到桌機排版 class） | 需依 1440／1024／375 規則重做，尤其 services grid 3/2/1 欄、booking stepper mobile 呈現 |
| 後端／金流 | **完全沒有**：`package.json` 只有 react/react-dom，找不到 `server/`、`.env` | 整個 `server/` 目錄、booking data store、ECPay 整合都要從零建立 |
| 聯絡資料 | `siteData.contact` 已寫入名片上的真實姓名、電話、Email、地址 | Spec 標示為「正式上線前仍待業主確認公開範圍」；本輪先原樣保留於 Proxy/Pending 分層下使用，不擴寫、不新增未確認欄位 |

### 0.2 可保留 / 需拆分 / 不得沿用

**可直接保留、原樣搬移：**
- `public/branding/` 下所有 Logo 資產與現有引用方式。
- `siteData.js` 中已確認符合 Spec 的文案素材（trustPoints、workflow 四步驟說明、FAQ 前三題、contact 基本資料），拆分後原樣搬進 `data/siteContent.js`。
- `styles.css` 現有色彩／字體選擇已經很接近 `DESIGN_SPEC.md` 的暖色調性，不必砍掉重練，改成 token 化並擴充 RWD 規則即可。
- hw1 `server/ecpay.js` 的 `generateCheckMacValue`／`verifyCheckMacValue`／`formatTradeDate`／`queryTradeInfo`／`toDotNetUrlEncode`／`timingSafeEqual`：純綠界機制，與商品無關，可直接搬並僅調整 `ItemName`／`TradeDesc` 文案與訂金級距驗證。
- hw1 `server/fileStore.js`、`server/config.js` 的讀寫與環境變數載入模式（JSON 檔案持久化，適合本 MVP 規模）。
- hw1 `src/lib/ecpay.js` 的 `submitEcpayCheckoutForm`（隱藏 form POST 導頁），機制通用。
- hw1 `docs/ARCHITECTURE.md` 揭露的關鍵事實：**localhost 收不到 ECPay 的 `ReturnURL` Server-to-Server callback**，本地驗收必須依賴「前端回站後，後端主動 `QueryTradeInfo`」；`docs/Spec.md` 本來就要求以主動查單為準，兩者一致，可直接沿用此本地驗收策略。

**需拆分（結構重組，內容大部分保留）：**
- `App.jsx` → 拆成 `pages/*.jsx` + `components/layout/*` + `components/ui/*`。
- `siteData.js` → 拆成 `data/services.js`（7 項服務）、`data/siteContent.js`（brand／trustPoints／workflow／faq／contact）、`data/pricingRules.js`（訂金級距、尾款公式，供前後端共用邏輯參考）。
- hw1 `server/index.js` 的路由骨架（method/pathname 判斷、`sendJson`、CORS header）可保留寫法，但路由清單整個替換成本案的 `/api/bookings*`、`/api/ecpay/*`。

**不得沿用（花店／購物車特定邏輯與文案）：**
- hw1 的 `products.json`、`productStore.js`、`productHelpers.js`、`memberStore.js`、購物車／會員／管理後台相關頁面與路由。
- hw1 `CheckoutPage.jsx` 的收件人／宅配／發票／購物車商品清單 UI 與文案（「前往綠界付款」「合計」「訂單」等電商用語）。
- hw1 `PaymentResultPage.jsx` 的「花禮訂單已確認」「繼續挑選花禮」等文案與其只認 `tradeStatus==='1'` 就整頁慶祝的呈現方式（本案付款成功頁仍須保留「日期／時間仍待老師人工確認」的保守文案）。
- hw1 `createCheckoutPayload` 中「使用者自行帶入金額直接建單」的假設；本案改為「僅 `deposit_ready` 狀態、且金額為 800/1200/1600 三選一時才可建單」。

### 0.3 缺少的 route / state / server endpoint / data store

- **前端 route/state（7 組）**：`/`、`/services/:serviceId`、`/pricing`、`/booking`（4 步驟 state）、`/booking/submitted`、`/booking/payment/success`、`/booking/payment/failed`。
- **前端 state**：Booking 表單 4-Step 狀態機、consent checkbox、送出 loading 鎖、query parameter 預選服務（`/booking?service=marriage`）。
- **Server（全新）**：`server/index.js`、`server/config.js`、`server/ecpay.js`、`server/bookingStore.js`、`server/paymentStore.js`、`server/fileStore.js`。
- **Data store（全新）**：`server/data/bookings.json`（Booking Request 與 bookingStatus 狀態機）、`server/data/ecpay-orders.json`（綠界訂金交易紀錄，schema 比照 hw1 但欄位改為 `depositAmount`／`balanceAmount`／`confirmedServiceTotal`）。
- **API（全新）**：`POST /api/bookings`、`GET /api/bookings/:bookingId`、`POST /api/bookings/:bookingId/deposit-order`（僅限 `deposit_ready`）、`POST /api/ecpay/return`、`POST /api/ecpay/order-result`、`POST /api/ecpay/query`、`GET /api/ecpay/orders/:merchantTradeNo`。
- **Demo 老師確認機制（全新，專案目前完全沒有任何內部／後台介面）**：需要一個明確標示「僅供開發／作業驗收使用」的方式，把 booking 從 `awaiting_teacher_confirmation` 轉成 `deposit_ready` 並寫入 `confirmedServiceTotal`。

## 1. 範圍

- 依 `docs/Spec.md`、`docs/specs/DESIGN_SPEC.md`、`docs/specs/pages/CORE_SCREEN_REQUIREMENTS.md`、`docs/design/STITCH_SCREEN_INVENTORY.md`、`docs/specs/DEMO_VISUAL_ASSET_SPEC.md` 重建 React 前端的 7 組 route/state，含 Desktop 1440／Tablet 1024／Mobile 375 三斷點。
- 建立最小可行 Node 後端（原生 `http`，比照 hw1 模式），提供 Booking Request 建立、Demo 老師確認、綠界預約訂金建單／回站／查單。
- 訂金金額僅允許 NT$800／1,200／1,600，且僅在 `deposit_ready` 狀態才可建單。
- 建立 `.env.example`，不含任何真實或測試金鑰內容，僅列變數名稱與說明。
- 更新 `docs/ARCHITECTURE.md`、`docs/TESTING.md` 反映新架構。

## 2. 非範圍

- 不重新 Generate Stitch 畫面，不新增第 23 張畫面。
- 不建立正式老師後台、登入系統或權限控管；Demo 老師確認機制明確標示為開發／驗收用途。
- 不接 Google Sheet／Apps Script（ADR-0002 是既定方向，但與本輪 ECPay 整合是獨立工作，本輪 Booking Request 先落地在後端 JSON store，之後才視需要接 Sheet）。
- 不做退款、改期、正式環境上線切換（Spec Pending 項目）。
- 不新增、不假設任何未確認的老師資歷、真實客戶案例、地址變更或聯絡資料。
- 不使用正式綠界金鑰；`ECPAY_ENV` 固定預設 `stage`。

## 3. 資料流

### 3.1 Booking Request（第一次送出）

```
Booking Page (4 Steps, client validation)
  → Step 4 送出（consent 必勾）
  → POST /api/bookings
  → server/bookingStore.js 寫入 bookings.json
     bookingStatus = awaiting_teacher_confirmation
     paymentStatus = not_created
  → 回傳 bookingId
  → 前端導向 /booking/submitted?bookingId=...
```

### 3.2 老師人工確認（Demo 機制）→ 建立訂金交易

```
Demo confirm 工具（僅 development 標示）
  → 輸入 bookingId + confirmedServiceTotal（正整數）
  → server 計算 depositTier / depositAmount / balanceAmount
  → 更新 booking：bookingStatus = deposit_ready
  → （前端可在 Demo 標示區塊顯示「支付預約訂金」入口，導向 /booking?resume=bookingId 或直接顯示付款按鈕）
```

### 3.3 建立綠界訂金交易並付款

```
使用者觸發「支付預約訂金」
  → POST /api/bookings/:bookingId/deposit-order
     驗證：booking 存在、bookingStatus === deposit_ready、confirmedServiceTotal 有效、尚未 paid、訂金級距合法
  → server 計算 MerchantTradeNo、MerchantTradeDate、CheckMacValue（沿用 hw1 ecpay.js 機制）
  → 寫入 ecpay-orders.json，bookingStatus = deposit_payment_pending
  → 回傳 action + fields
  → 前端 submitEcpayCheckoutForm() 建立隱藏 form，導向綠界測試付款頁
```

### 3.4 回站與付款確認

```
綠界測試付款完成
  → 瀏覽器導回 OrderResultURL：POST /api/ecpay/order-result
     驗證 CheckMacValue → 303 導向 /booking/payment/success?merchantTradeNo=... 或 /booking/payment/failed?merchantTradeNo=...
  → 前端頁面進頁後呼叫 POST /api/ecpay/query
     server 呼叫 QueryTradeInfo → 比對本地金額與 merchantTradeNo → 驗證一致後才標記 paid
     paymentStatus = paid → bookingStatus = deposit_paid
  → 前端顯示服務總價／已付訂金／尾款，並保留「日期／時間仍待老師人工確認」文案

（ReturnURL 為保留路由：localhost 收不到綠界 server-to-server callback，
  比照 hw1 的驗收策略，不以此路由做本地驗收依據，只做未來公開環境的備援）
```

## 4. 狀態機

### bookingStatus

```
new
→ awaiting_teacher_confirmation   （POST /api/bookings 後的預設值）
→ deposit_ready                   （Demo 老師確認後，含 confirmedServiceTotal）
→ deposit_payment_pending         （已建立綠界交易，等待付款）
→ deposit_paid                    （查單確認 tradeStatus === '1'）
→ deposit_payment_failed          （查單確認失敗／取消，保留案件）
→ cancelled                       （本輪不主動觸發，保留欄位供未來使用）
```

### paymentStatus

```
not_created → created → pending → paid
                       ↘ failed
                       ↘ cancelled
                       ↘ unknown（查單逾時或網路錯誤，需可讀錯誤訊息，不得視為成功）
```

### 防呆規則

- `new` / `awaiting_teacher_confirmation` 狀態下，前端不得渲染任何可直接付款的按鈕。
- 只有 `deposit_ready` 才能呼叫 `POST /api/bookings/:bookingId/deposit-order`；其餘狀態一律回傳 4xx。
- `deposit_paid` 之後再次呼叫建單 API 一律拒絕（不可重複付款）。
- `/api/ecpay/return`、`/api/ecpay/order-result`、`/api/ecpay/query` 皆需 idempotent：同一 `merchantTradeNo` 重複呼叫不重複疊加金額或狀態，只覆寫為最新查得結果。
- 付款失敗／取消不得將 `paymentStatus` 寫成 `paid`；保留 Booking Request，供重新付款或聯繫老師。

## 5. 檔案清單

### 5.1 新增（前端）

```
src/hooks/useRouter.js
src/data/services.js
src/data/siteContent.js
src/data/pricingRules.js
src/lib/api.js
src/lib/ecpay.js
src/lib/booking.js
src/components/layout/Header.jsx
src/components/layout/Footer.jsx
src/components/layout/PageShell.jsx
src/components/ui/Button.jsx
src/components/ui/Card.jsx
src/components/ui/StatusPanel.jsx
src/components/booking/BookingStepper.jsx
src/components/booking/StepNeed.jsx
src/components/booking/StepServiceDetail.jsx
src/components/booking/StepContact.jsx
src/components/booking/StepReview.jsx
src/components/payment/DepositSummary.jsx
src/pages/HomePage.jsx
src/pages/ServiceDetailPage.jsx
src/pages/PricingPage.jsx
src/pages/BookingPage.jsx
src/pages/BookingSubmittedPage.jsx
src/pages/DepositPaymentSuccessPage.jsx
src/pages/DepositPaymentFailedPage.jsx
```

### 5.2 新增（後端）

```
server/index.js
server/config.js
server/ecpay.js
server/bookingStore.js
server/paymentStore.js
server/fileStore.js
server/data/bookings.json
server/data/ecpay-orders.json
.env.example
```

### 5.3 調整

```
src/App.jsx        → 改為 route switch + PageShell，移除舊單頁內容
src/styles.css      → 補上 DESIGN_SPEC.md §3 的 CSS variable token 與 RWD media query
src/siteData.js      → 拆分後移除，內容搬到 src/data/*
package.json         → 新增 server / dev:all script
docs/ARCHITECTURE.md → 補後端／API／資料流章節
docs/TESTING.md      → 補金流測試方式
.agents/skills/e2e-payment-test/SKILL.md → 改寫為玄機堂訂金流程版本（獨立子任務，不阻塞本計畫 Phase 1-6）
```

## 6. Demo 老師確認機制設計

- 採方案 B＋A 混合：後端提供 `POST /api/bookings/:bookingId/demo-confirm`（**僅在 `NODE_ENV !== 'production'` 時掛載**），輸入 `confirmedServiceTotal`，由後端計算訂金級距並轉為 `deposit_ready`。
- 前端在 `/booking/submitted` 頁面，development 模式下顯示一個明顯標示「僅供開發／作業驗收使用」的區塊，可觸發此 API 並顯示產生的「支付預約訂金」連結；正式使用者看到的 submitted page 不含此區塊（以 `import.meta.env.DEV` 判斷）。
- Demo fixture 建議情境：`confirmedServiceTotal = 5000` → `depositAmount = 800` → `balanceAmount = 4200`，作為主要驗收案例。

## 7. 環境變數（`.env.example`，僅列名稱與說明，不含真實值）

```
ECPAY_ENV=stage
ECPAY_MERCHANT_ID=
ECPAY_HASH_KEY=
ECPAY_HASH_IV=
ECPAY_RETURN_URL=
ECPAY_ORDER_RESULT_URL=
ECPAY_CLIENT_BACK_URL=
APP_BASE_URL=http://localhost:3000
FRONTEND_BASE_URL=http://localhost:5173
PORT=3000
```

`server/config.js` 允許在本機開發 fallback 使用 ECPay 官方公開的測試環境帳密（3002607 / 官方測試 HashKey／HashIV，與 hw1 相同來源），僅供 stage 測試，並在程式註解與文件中明確標示「測試環境公開值，非正式金鑰」。正式金鑰一律只能透過環境變數注入，不寫入任何檔案。

## 8. 測試與驗收方式

- 每個 Phase 完成後執行 `npm run lint`、`npm run build`，需全數通過。
- 啟動 `npm run dev:all`（前端 + server）後，以 1440／1024／375 三個 viewport 檢查對應頁面群組（見 `docs/TESTING.md` 既有表格）。
- 產品流程驗收（對應 `docs/Spec.md` §流程驗收條件）：
  1. 首頁 → 服務詳情 → 開始預約，服務可預選但可修改。
  2. 未勾 consent 無法送出 Step 4。
  3. 送出後精確顯示「預約申請已送出」，不出現付款按鈕（正式使用者視角）。
  4. Demo 確認總價 NT$5,000 → 訂金 NT$800 → 尾款 NT$4,200，流程可跑通到付款成功頁。
  5. 付款成功頁同時顯示總價／訂金／尾款，並保留人工確認說明。
  6. 付款失敗／取消頁不得顯示付款成功或預約成功，保留案件並提供重新付款／聯繫入口。
  7. 對 `/api/ecpay/query` 連續呼叫兩次驗證 idempotent（不重複疊加、狀態一致）。
  8. 查單網路錯誤／逾時要顯示可讀訊息，不得假裝成功。

## 9. 風險與待確認事項

1. **Demo 老師確認機制屬於本輪自建的權宜設計**，不是業主要的正式後台；若之後要做正式後台，這段程式碼需要整段替換或加上真正的身分驗證，屬已知技術債，會在 `docs/ARCHITECTURE.md` 標註。
2. **本地環境無法驗證真正的 ECPay `ReturnURL` server-to-server callback**（比照 hw1 的既有限制），Phase 5-6 只能驗證「前端回站＋主動查單」路徑；文件會明確寫出這個限制，不假裝已完成完整 callback 驗證。
3. **Booking Request 目前只落地在後端 JSON store**，尚未依 ADR-0002 接上 Google Sheet；若後續要接，需要額外設計 Booking ID 對應規則，本輪不處理。
4. **`.env` 未設定時的 fallback 值是 ECPay 官方公開測試帳密**，僅供本機開發驗收，部署或展示前需再次確認沒有意外暴露成正式金鑰。

## 10. Rollback 說明

- 本計畫的所有新增檔案集中在 `server/`、`src/pages/`、`src/components/`、`src/data/`、`src/hooks/`、`src/lib/` 幾個新目錄，以及 `src/App.jsx`、`src/styles.css`、`package.json` 的修改；若需要回滾，可用 git 還原這些路徑而不影響 `docs/` 既有規格文件與 `public/branding/` 資產。
- `src/siteData.js` 在資料搬遷完成前不會被刪除，確認新資料層驗收通過後才移除，避免中途回滾找不到舊資料來源。
- 若 Phase 5-6 的 ECPay server 整合出現無法排除的問題，可先讓 Booking／Submitted／Pricing／Home／Service Detail（Phase 1-3）維持可用，付款相關頁面先保留「開發中」狀態，不影響其餘畫面的驗收與展示。
