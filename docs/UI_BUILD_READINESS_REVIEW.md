# 玄機堂擇日舘｜UI 建置文件 Readiness Review

狀態：Ready for UI implementation（正式上線資料仍有待確認項）  
最後檢查：2026-08-14  
範圍：VS Code 專案文件、Stitch reference、現有 React prototype 的規格對照。

## 結論

UI 建置所需的產品流程、視覺規格、RWD、Demo 圖像規則、畫面清單與驗收方式已經集中完成。React 可以開始分批建置，且不需要再生成 Stitch 畫面。

唯一要分清楚的是：**Demo UI 可以先做完整；真實對外資料與付款後端不可自行補寫。**

## 已到位的實作基準

| 項目 | 狀態 | 唯一／主要依據 |
| --- | --- | --- |
| 產品與預約規則 | 符合 | `Spec.md` |
| 訂金與尾款流程 | 符合 | `Spec.md`、`specs/PRICING_POLICY.md`、`specs/BOOKING_FLOW.md` |
| 視覺風格、色彩、字體、按鈕、表單 | 符合 | `specs/DESIGN_SPEC.md` |
| Desktop / Tablet / Mobile 規則 | 符合 | `specs/DESIGN_SPEC.md`、`TESTING.md` |
| 正式 Stitch 參考畫面 | 符合 | `design/STITCH_SCREEN_INVENTORY.md`（22 張鎖定畫面） |
| 頁面 route / state 與驗收 | 符合 | `specs/pages/CORE_SCREEN_REQUIREMENTS.md` |
| Demo 圖像與人物／案例標示 | 符合 | `specs/DEMO_VISUAL_ASSET_SPEC.md` |
| 架構與前端／金流邊界 | 符合 | `ARCHITECTURE.md` |
| 視覺與流程測試方式 | 符合 | `TESTING.md` |

## 不可違反的流程規則

1. Booking 固定為 4 Steps：您的需求 → 服務相關資料 → 聯絡與到場 → 確認並送出。
2. 第一次送出只建立 Booking Request，送出標題必為「預約申請已送出」。
3. 老師人工確認服務、總價與安排後，才建立綠界**預約訂金**交易。
4. 訂金只有三段：總價 `≤ 5,000` 為 `800`、`5,001–8,000` 為 `1,200`、`≥ 8,001` 為 `1,600`；尾款 = 總價 − 已付訂金。
5. 付款成功只代表「訂金已付」，不可寫成預約／服務已完全成功。
6. 不做自動算命、全額電商 checkout、購物車或自動加價。

## Demo 素材規則

- 可以邊做元件、邊產圖；每次一個區塊、一張主素材，產完立刻檢查 1440 / 1024 / 375。
- 可以使用 `示意人物`、`示範個案`、`情境示意`，但標示必須在圖片附近可見。
- 不可偽裝成真實老師、客戶、店面、傳承、評價、歷史照片或服務完成紀錄。
- Logo 一律使用既有的暖色版本，不使用黑色原始檔直接放在暖白 navigation。

## 現有 React Prototype 對照結果

| 檢查面向 | 狀態 | 發現 |
| --- | --- | --- |
| 文案方向 | 部分符合 | 已有「人工確認」與「非自動算命」基礎。 |
| 服務數量 | 需修改 | `src/App.jsx` 仍寫「六大服務分類」，需改為七項。 |
| Page / state 結構 | 缺漏 | 目前是單一 `App.jsx` prototype，尚未建立 Core Screen Requirements 所列主要 route / state。 |
| 4-Step booking | 需建置 | 現有 prototype 未可驗收為固定 4 Steps、Review、Consent、Submitted。 |
| 金流結果狀態 | 缺漏 | 尚未有訂金付款成功／失敗或取消的畫面與狀態。 |
| RWD 證據 | 需驗證 | 尚未以 1440 / 1024 / 375 實機截圖驗收。 |
| 真實聯絡資料 | 待確認 | `src/siteData.js` 已含名片資料；公開使用前仍需業主確認最新性與授權。 |

## 正式上線前仍待確認（不阻擋 Demo UI）

- 真實姓名、電話、Email、地址、LINE、營業時間是否公開及是否最新。
- 真實照片／店面／案例的公開授權。
- 退款、取消、改期、尾款收取時間與方式。
- 隱私政策、保存期限、資料管理與公開表單防護。
- 綠界後端憑證、付款回呼與主動查單。

## 下一個實作批次

1. Layout / token / navigation / shared button、card、form、status panel。
2. Home、Service Detail、Pricing 的 Responsive UI。
3. 4-Step Booking 與 Submitted state。
4. Deposit Payment Success、Failed / Cancelled state。
5. 每一批用 1440 / 1024 / 375 截圖檢查，並執行 `npm run build`、`npm run lint`。
