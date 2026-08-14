# 設計稿證據與正式畫面

## Stitch 專案

- 專案：[玄機堂擇日舘 預約網站設計案](https://stitch.withgoogle.com/projects/12013399918727099777)
- 正式畫面數：22 張
- 實作對照：`STITCH_SCREEN_INVENTORY.md`
- 設計規格：`../specs/DESIGN_SPEC.md`
- Demo 影像規格：`../specs/DEMO_VISUAL_ASSET_SPEC.md`

## 使用規則

- React 僅可參照已鎖定的 22 張正式 Stitch 畫面。
- 不以已刪除／歷史 Stitch 畫面作為 UI 或文案依據。
- Tablet 畫面在 React 仍需用 1024px 實測；Stitch metadata 不當作 RWD 通過證據。
- 若需新視覺，先依 Demo Visual Asset Spec 產素材，不重新 Generate 整頁 Stitch UI。

## Logo 資產

- `public/branding/logo-symbol-on-light.png`：暖白／淺色背景導覽列。
- `public/branding/logo-symbol-on-dark.png`：深色背景。
- `public/branding/logo-symbol-original.png`：原始保存，不直接作暖白背景 UI 色彩版。
