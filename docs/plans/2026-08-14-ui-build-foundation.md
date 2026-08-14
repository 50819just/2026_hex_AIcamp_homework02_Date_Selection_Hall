# 玄機堂擇日舘 UI 建置基礎計畫

日期：2026-08-14  
狀態：in-progress

## 目標

- 以已鎖定的 Stitch 22 張正式畫面與目前 Logo 資產為設計依據，建立可實作、可驗收的 UI 規格。
- 建立共用設計 token、元件、按鈕狀態、RWD 與畫面對照，避免 React 實作時視覺或流程飄移。
- 先完成文件治理；未確認前不大幅改動既有 React 畫面與資料內容。

## 已確認輸入

- Stitch 正式畫面：22 張（核心流程五頁三斷點，付款成功／失敗各三斷點，另含 Logo）。
- Design System：Modern Vernacular，暖白紙感、磚紅主色、Noto Serif 標題、Noto Sans 內文。
- Logo 已由既有上下文寫入：
  - `public/branding/logo-symbol-original.png`
  - `public/branding/logo-symbol-on-light.png`
  - `public/branding/logo-symbol-on-dark.png`
  - 已套用至 `src/App.jsx` 與 `src/styles.css`。
- 產品／流程規則以 `docs/Spec.md` 為準。

## 本輪範圍

1. 新增 `docs/specs/DESIGN_SPEC.md`。
2. 新增 `docs/design/STITCH_SCREEN_INVENTORY.md`，固定 22 張正式畫面的實作對照。
3. 新增 Demo 影像素材規格，允許有清楚標示的示意人物與示範個案。
4. 完成文件稽核，移除花店／購物車遺留架構，補上核心畫面 requirements。
5. 清楚標記需在開始 React 前由業主確認的 UI 決策。
6. 待確認後，再分批建置 Layout、Navigation、共用元件、各路由／狀態頁與 RWD。

## 非本輪範圍

- 不重新 Generate Stitch 畫面。
- 不自行補寫未確認的地址、電話、LINE、真實評價、退款或尾款規則；Demo 影像只在清楚標示為示意時使用。
- 不把綠界金鑰或付款驗證放入前端。
- 不在本輪將現有單頁 prototype 直接大改成完整多頁流程。

## 驗收方式

- UI Spec 與 22 張 Stitch 正式畫面一一對應。
- `docs/Spec.md` 的人工確認、4-Step、訂金級距與付款狀態規則均被引用。
- 後續每個 React 增量皆在 Desktop 1440、Tablet 1024、Mobile 375 檢查，並執行 `npm run build`、`npm run lint`。

## 2026-08-14 文件稽核完成項目

- `ARCHITECTURE.md`、`TESTING.md` 已改為玄機堂人工確認後訂金流程，不再引用花店／購物車流程。
- `DESIGN_SPEC.md`、`DEMO_VISUAL_ASSET_SPEC.md`、`CORE_SCREEN_REQUIREMENTS.md` 已建立為 UI 實作基準。
- `DESIGN_DIRECTION.md` 已降為方向參考；實作 token 以 `DESIGN_SPEC.md` 為唯一來源。
- `COPY_TONE_GUIDE.md`、`CONTENT_REQUIREMENTS.md` 已同步 Demo 示意人物／示範個案的標示邊界。
