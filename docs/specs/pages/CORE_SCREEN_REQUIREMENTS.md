# Core Screen Requirements

狀態：Implementation Ready  
最後更新：2026-08-14

## 目的

將正式 22 張 Stitch 畫面轉為 React 建置與驗收單位。視覺規則以 `../DESIGN_SPEC.md` 為準，商業／流程規則以 `../../Spec.md` 為準。

## Route / State Matrix

| Screen group | Route / state | Desktop | Tablet | Mobile | 不可違反規則 |
| --- | --- | --- | --- | --- | --- |
| Home | `/` | ✓ | ✓ | ✓ | 服務、信任、流程、價格、FAQ、CTA 主線；開始預約前往 `/booking` |
| Service Detail | `/services/marriage` | ✓ | ✓ | ✓ | 人工確認；不可補造師資／案例／保證 |
| Pricing | `/pricing` | ✓ | ✓ | ✓ | 不做商城；說明訂金三段與尾款 |
| Booking | `/booking` | ✓ | ✓ | ✓ | 固定可見 4 Steps；第一次送出不付款 |
| Submitted | `/booking/submitted` | ✓ | ✓ | ✓ | 標題必為「預約申請已送出」 |
| Deposit Paid | `/booking/payment/success` | ✓ | ✓ | ✓ | 僅代表訂金已付；列總價、訂金、尾款 |
| Failed / Cancelled | `/booking/payment/failed` | ✓ | ✓ | ✓ | 不得顯示預約成功／付款成功 |

## Home

- Hero 明確說明網站不自動產生擇日結果。
- 七項服務包含「其他服務諮詢」；若卡片進 Booking，服務值可預選但可修改。
- Demo Hero 圖僅為 decorative editorial，不得暗示真實店面或歷史。

## Service Detail

- 必備：適合情境、人工處理方式、費用說明、注意事項、開始預約。
- Demo 人物或案例卡若出現，需標 `示意人物`／`示範個案`。

## Pricing

- 必備：服務參考資訊、人工確認說明、訂金級距、尾款邏輯、特殊案件規則。
- 訂金級距：≤ 5,000 → 800；5,001–8,000 → 1,200；≥ 8,001 → 1,600。
- 神明／祖先可顯示 `NT$8,000 起`，並附「實際依案件內容與服務範圍確認」。

## Booking / Submitted

- Step 1：您的需求；Step 2：服務相關資料；Step 3：聯絡與到場；Step 4：確認並送出。
- Step 4 含資料使用說明入口與 required consent checkbox。
- Submitted 不建立付款交易，僅告知後續由老師人工確認。

## Payment States

- 成功範例：服務總價 NT$5,000、已付訂金 NT$800、尾款 NT$4,200。
- 成功頁保留「日期／時間與案件安排仍由老師人工確認」說明。
- 失敗頁保留案件資料，提供重新支付預約訂金／聯繫老師入口。

## Done Criteria

- 每個 group 都在 1440／1024／375 驗收。
- 22 個畫面對照皆有對應 React route 或 state。
- 無自動算命、全額電商付款、固定訂金、未確認真實資料。
