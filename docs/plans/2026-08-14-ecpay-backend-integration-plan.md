# 綠界預約訂金後端整合計畫

日期：2026-08-14
狀態：Phase 0（讀文件與盤點，尚未動程式碼）

## 目標

依 `docs/Spec.md` 已確認的「人工確認總價後，收取分級預約訂金」流程，規劃玄機堂擇日舘的綠界（ECPay）後端整合，並參考作業一（Bloom & Grace）已驗證過的綠界串接實作模式，避免重造輪子或誤用花店金流假設。

## 參考依據

- `hexSchoolAICampHw1/server/ecpay.js`：CheckMacValue 產生／驗證、Checkout Payload 建立、TradeInfo 主動查單。
- `hexSchoolAICampHw1/server/ecpayOrderStore.js`：以 JSON 檔案儲存單筆綠界交易狀態（`created` → 各驗證欄位 → 最終 `paymentStatus`）。
- `hexSchoolAICampHw1/src/lib/ecpay.js`：前端以隱藏表單 POST 導頁到綠界的共用函式。
- `hexSchoolAICampHw1/server/index.js`：`/api/ecpay/create-order`、`/api/ecpay/query`、`/api/ecpay/order-result`（ReturnURL 導頁）、`/api/ecpay/return`（背景通知）四條路由，以及 `derivePaymentStatus` 狀態合併邏輯。
- `docs/Spec.md`：本案（玄機堂）的付款規則、狀態機、驗收條件。

## 現況盤點

- **hw2 目前完全沒有後端**：`package.json` 只有 `react`／`react-dom`，沒有 Express 或任何 server 依賴；repo 內找不到 `server/`、`.env` 或任何後端殘留檔案。整個綠界整合要從零建立。
- **hw1 的核心工具函式（`generateCheckMacValue`／`verifyCheckMacValue`／`queryTradeInfo`／`submitEcpayCheckoutForm`）與商品／花店邏輯無關，是通用綠界機制**，可以直接搬到 hw2 幾乎不用改。
- **hw1 的 `createCheckoutPayload` 與路由邏輯是花店的「購物車金額直接建單」假設**，這點必須改，不能照搬：
  - hw1：使用者結帳時自己算好金額 → 直接建立綠界訂單。
  - hw2 Spec：**禁止**前台自行算總價或直接建單；必須先有「老師人工確認服務總價與日期」這個前置狀態，才能依級距（NT$800／1,200／1,600）建立訂金交易，且交易品名須明確為「預約訂金」。
- **hw2 的預約申請資料走 Google Sheet + Apps Script（ADR-0002）**，不是 hw1 這種 JSON 檔案／關聯式資料庫。但「綠界訂金交易本身的狀態」（`merchantTradeNo`、`depositAmount`、`paymentStatus`、查單結果）目前 Spec 沒有指定要存哪裡，hw1 的 `ecpayOrderStore.js`（本地 JSON）在 MVP 階段可以先沿用做「訂金交易紀錄」，但要跟 Google Sheet 上的 Booking Request 用某個共同識別碼（例如 Booking ID）串起來——這條關聯目前規格沒定義，見下方風險。
- **舊的 `e2e-payment-test` Skill 是寫給 Bloom & Grace 的（商品頁→購物車→登入→結帳）**，`docs/TESTING.md` 已明講不可沿用舊花店／購物車 E2E 流程；後續要另外寫一版對應「人工確認後才建立訂金交易」的 E2E 腳本，不能照抄 hw1 的正常流程步驟。

## 這次串接的範圍邊界（依 Spec 的紅線）

- 前端（React）**不**放 MerchantID／HashKey／HashIV，也**不**自己算服務總價或訂金金額。
- 建立綠界訂金交易的動作，只能發生在「老師已人工確認服務總價與日期」之後——目前整個專案還沒有任何「老師/內部」介面或身分驗證機制，這代表 `POST /api/ecpay/create-order` 這類端點**不能是公開表單可以直接打的 API**，需要有一個內部觸發方式（見風險 1）。
- 綠界交易金額只能是 800／1200／1600 三選一，且需與服務總價級距一致；金額校驗要寫在後端，不能只靠前端擋。
- 付款成功的認定必須以後端主動查單＋驗證 CheckMacValue 為準，瀏覽器導回不能單獨當成付款成功證據。
- 交易品名（ItemName／TradeDesc）需明確標示「預約訂金」，不可誤植為完整服務費。

## 預計變更／新增檔案（Phase 1 起才會實際動手，本輪僅列出）

新增：
- `server/config.js`（環境變數讀取，含 `.env` fallback；正式環境金鑰不可入 repo）
- `server/ecpay.js`（大部分搬自 hw1，移除花店用語，補上訂金金額三選一與品名規則）
- `server/ecpayOrderStore.js` 或等效資料層（本地 JSON 或後續資料庫，儲存訂金交易狀態）
- `server/index.js`（`/api/ecpay/create-order`、`/api/ecpay/query`、`/api/ecpay/order-result`、`/api/ecpay/return`，比照 hw1 但加上「僅限已人工確認」的前置檢查）
- `src/lib/ecpay.js`（可直接搬 hw1 版本，機制通用）
- `.env.example`（不含真實正式金鑰，僅列出必要變數名稱）

可能調整：
- `package.json`（新增後端啟動 script，例如 `server`／`dev:all`，仿 hw1）
- `docs/ARCHITECTURE.md`（補上後端／API 邊界說明）
- `docs/TESTING.md`、`.agents/skills/e2e-payment-test/SKILL.md`（改寫成玄機堂訂金流程專用版本，而非花店流程）

## 風險與待確認事項（需要你或業主決定，Phase 1 前建議先拍板）

1. **誰／用什麼介面觸發「建立訂金交易」？** 目前專案沒有老師端後台或任何登入機制。Spec 明確禁止前台自動建單，但 MVP 也還沒設計出「人工確認」這個動作在系統裡怎麼發生（例如：老師用一個簡易內部頁面手動輸入總價後產生付款連結？還是先用 Postman／腳本模擬，UI 之後再補？）。這件事沒定案，Phase 1 沒辦法把「建立訂金交易」這條路由的觸發方式做完整。
2. **訂金交易紀錄跟 Google Sheet 上的 Booking Request 如何關聯？** 兩邊目前是兩個獨立資料源（Sheet vs 後端本地儲存），Spec 沒定義共同的 Booking ID 或對應規則。
3. **正式／測試環境切換時機未定**（Spec Pending 項目），MVP 先預設全程使用 ECPay 測試環境（沿用 hw1 config.js 裡的測試 MerchantID/HashKey/HashIV 當 fallback，僅供本機開發，不代表正式金鑰）。
4. **退款、改期、付款失敗後保留案件的期限**仍是 Spec 裡的 Pending 項目，本輪整合不會實作這些，只會照 Spec 把付款失敗頁做成「保留申請、提供重新付款／聯繫入口」。
5. **E2E 測試腳本需要重寫**，不能沿用現有 `e2e-payment-test` Skill 的商品／購物車／登入步驟。

## Phase 劃分

- **Phase 0（本輪，已完成）**：讀 hw1 三份參考檔＋`docs/Spec.md`，盤點現況，寫本計畫。未修改任何程式碼。
- **Phase 1（待你確認後才開始）**：建立最小可用後端骨架（`server/`、`.env.example`、綠界工具函式搬移與訂金規則調整），先用手動觸發（腳本或簡易內部路由，不對外公開）驗證建單→付款→查單→標記已付款的完整鏈路。
- **Phase 2**：串接前端付款結果頁（顯示服務總價／已付訂金／尾款），並依 `docs/Spec.md` 的付款失敗／取消規則補頁面。
- **Phase 3**：重寫 E2E 金流測試腳本與錄影，驗收基準改用 `docs/Spec.md` 而非舊花店流程。

## 驗收方式（Phase 1 起適用）

- 綠界交易金額只能是 NT$800／1,200／1,600，且與服務總價級距一致，違反時後端拒絕建單。
- 未經過「已人工確認」前置狀態，無法呼叫建立訂金交易的路由。
- 後端需驗證 CheckMacValue，並以主動查單結果為付款成功依據；付款成功頁需同時顯示服務總價、已付訂金、尾款。
- `npm run build`、`npm run lint` 需通過。
