# 玄機堂擇日舘｜前端架構

狀態：Implementation Foundation  
最後更新：2026-08-14

## 技術

- React 19 + Vite 8
- JavaScript ESM
- CSS（設計 token 與元件樣式集中於 `src/styles.css`）
- 靜態 Demo UI 先完成畫面與狀態；正式綠界串接需由後端處理。

## 目標資訊架構

| Area | 目標 route / state | 主要責任 |
| --- | --- | --- |
| Home | `/` | 了解服務、建立信任、導往預約 |
| 服務詳情 | `/services/:serviceId` | 服務適用情境與人工確認說明 |
| 價格 | `/pricing` | 參考價格、人工確認與訂金級距規則 |
| 預約 | `/booking` | 固定 4 Step Booking Request |
| 申請已送出 | `/booking/submitted` | 呈現「預約申請已送出」，不付款 |
| 訂金付款成功 | `/booking/payment/success` | 顯示總價、訂金與尾款 |
| 付款失敗／取消 | `/booking/payment/failed` | 保留申請、提供重新付款／聯繫入口 |

上述 route 是前端實作規劃，不代表目前已完成後端路由或付款交易。

## 前端資料與狀態邊界

- 首次送出只建立 Booking Request；不得在前端自行計算服務總價或建立付款交易。
- 老師人工確認服務內容、總價、日期／時間後，才由後端建立綠界預約訂金交易。
- 綠界的 MerchantID、HashKey、HashIV、CheckMacValue、付款回呼驗證與主動查單都不放入 React。
- 付款成功頁只能呈現後端已確認的狀態；瀏覽器回站本身不可當作付款成功證據。

## 設計與畫面來源

- 設計規則：`docs/specs/DESIGN_SPEC.md`
- Demo 影像：`docs/specs/DEMO_VISUAL_ASSET_SPEC.md`
- Stitch 正式畫面：`docs/design/STITCH_SCREEN_INVENTORY.md`
- 產品流程與商業規則：`docs/Spec.md`

## 目前程式狀態

- `src/App.jsx` 與 `src/siteData.js` 是早期單頁 prototype。
- 建置前需先將其中與最新 `docs/Spec.md` 衝突的內容改為 Confirmed／Proxy Assumption／Pending 對應資料；不得把 prototype 的舊文案視為正式需求。
