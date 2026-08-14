# 綠界訂金文件同步計畫

## 目的

讓 Stitch UI Brief 與 Booking、Pricing、FAQ、Edge Cases 文件同步目前已確認的「人工確認後收取分級預約訂金」流程。

## 範圍

- 保留 4-Step 預約表單，不把付款加入表單步驟。
- 補上人工確認、綠界訂金、付款結果與尾款明細的 UI／流程要求。
- 移除各文件與目前 Spec 衝突的「完全不做線上付款／訂金」舊規則。
- 退款、取消、改期與尾款收取方式維持 Pending，不自行補定。

## 完成條件

- `STITCH_UI_PROMPT.md` 可直接指示 Stitch 畫出正確的付款後續狀態。
- `FAQ_SPEC.md`、`BOOKING_FLOW.md`、`PRICING_POLICY.md`、`EDGE_CASES.md` 與 `Spec.md` 不再互相矛盾。
- 不修改 React，不新增未確認的老師資料、價格或付款政策。
