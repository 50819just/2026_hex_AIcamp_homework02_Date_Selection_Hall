# INFORMATION_ARCHITECTURE.md

狀態：draft  
最後更新：2026-08-14

## 文件目的

本文件用於定義玄機堂擇日舘網站第一版的資訊架構，包含網站主要頁面、導覽層級、頁面關聯與內容模組分布，作為頁面規劃與導覽設計依據。

## 頁面地圖

第一版建議包含以下主要頁面：

- 首頁
- 服務介紹頁
- 服務詳情頁（可先保留是否拆分）
- 價格頁
- 預約頁
- FAQ 頁
- 關於頁
- 聯絡資訊區或聯絡頁

## 導覽結構

### 主要導覽建議
- 首頁
- 服務介紹
- 價格說明
- 預約流程／預約表單
- 常見問題
- 關於我們

### 次要導覽建議
- 聯絡方式
- 隱私或個資告知（待後續確認是否獨立）

### Header CTA 規則（MVP Product / UX Decision）
- Primary CTA：開始預約，導向獨立 `/booking` Booking Page。
- 特定服務 CTA 可用 query parameter 或 route state 預選服務，進入後仍允許使用者修改。
- Secondary Contact：LINE、電話。
- Mobile 可將導覽收進 Menu，但「開始預約」需保持容易看到。

## 區塊層級

### 服務分類層級
- 第一層以七項主要服務分類呈現：婚嫁擇日、新生兒命狀・命名、入宅・搬遷擇日、神明・祖先事宜、宅事・到場諮詢、其他擇日需求、其他服務諮詢。
- 首頁視覺優先順序暫採：第一層婚嫁、入宅／搬遷、新生兒；第二層神明／祖先、宅事／到場；第三層其他需求。
- 此為 `Proxy Assumption`，不代表實際成交量或熱門排行。
- 婚嫁擇日維持一張主要 Service Card，不在首頁拆成結婚、訂婚／文定、登記日或宴客日等獨立卡片。
- 婚嫁細項可在 Service Detail 與 Booking Form 再選擇「結婚」、「訂婚／文定」、「其他婚嫁需求」或「不確定，希望老師協助確認」。
- 服務詳細資料與是否承接由老師人工確認，網站不自動判定專業結果。
- 神明／祖先前台先使用白話分類，專業術語不直接攤在第一層選單。

### 首頁建議區塊
- Header / Navigation
- Hero 主視覺與品牌定位
- Service Entry／核心服務摘要
- Trust／About Preview
- How It Works／預約流程簡述
- Pricing Preview
- On-site／Service Area（依首頁長度決定是否獨立呈現）
- FAQ Preview
- Final CTA／Contact
- Footer

首頁主線為：`Understand → Service → Trust → Process → Price → FAQ → Action`。

### 服務介紹頁建議區塊
- 服務總覽
- 各服務卡片／列表
- 適用情境
- 所需資料
- 交付內容
- 婚嫁需求細分類（不改變首頁主要分類）
- 入宅／搬遷與宅事／到場的分類說明
- Primary Service + Additional Need 的重疊需求說明
- 導向預約 CTA

### 價格頁建議區塊
- Pricing Hero
- Pricing Cards
- Special Quote Rules
- Pricing Process
- Pricing FAQ
- 導向預約 CTA
- Desktop 可有次要 Table 比較，但不作唯一呈現方式

### 預約頁建議區塊
- 預約流程說明
- 統一的預約申請表單；先諮詢導向 LINE／電話，不另建諮詢 Form
- 表單區
- Data Usage Notice、Privacy / Data Notice Link、Required Consent Checkbox 與 Privacy Contact Entry Point（UI 結構已定；正式條款屬上線前驗證）
- 預約須知
- Base Information 基本資料
- 依服務分類顯示 Conditional Service-specific Information
- 「希望辦理期間／候選日期」與「方便聯絡時間」分開
- 到場相關欄位只在適用服務中顯示；涉及到場時，縣市／地區必填，完整地址可後補
- 4-Step Progress：Need / Event → Service-specific Information → Contact / On-site → Review / Submit
- Step 4 預留 Data Usage Notice、Privacy / Data Notice Link 與 Required Consent Checkbox；完整法律條款與資料管理規則另列上線前驗證。

### FAQ 頁建議區塊
- 問題分類導覽
- 問答內容
- 補充聯繫說明

### 關於頁建議區塊
- 品牌介紹
- 品牌理念
- 老師／顧問介紹
- 服務方式說明
- CTA 區塊

## UI Foundation 規格（MVP Product / UX Decision）

以下結構可作為 Stitch UI Foundation；未確認的商業內容仍可後續替換。建立順序為：Home → Service Detail Template → Booking → Pricing → Services Listing → About → FAQ / Contact。

### Service Detail 共用 Template
- 服務介紹
- 適合情境
- 需要資料
- 服務流程
- 交付內容
- 價格／報價方式
- 到場說明
- FAQ
- CTA

### Pricing Page 組織
- Service Cards
- 價格表／區間表
- 公開參考價格與依個案報價混合呈現

### Booking Form 可見步驟
- Step 1：Need / Event
- Step 2：Service-specific Information（依服務條件顯示）
- Step 3：Contact / On-site
- Step 4：Review / Submit

資料模型仍可分開保留 Service、Event、Professional Data、Contact、Review 五個概念，但 UI 不拆成五個過度細碎的畫面。

## Stitch 正式畫面範圍（Confirmed UI Decision）

Stitch 正式參考集已收斂為 22 張畫面，名單與命名以 `docs/design/STITCH_SCREEN_INVENTORY.md` 為唯一基準：

- Logo / Brand mark（1）
- Home、Service Detail、Pricing、Booking、Booking Submitted：各 Desktop / Tablet / Mobile（15）
- Deposit Payment Success、Payment Failed / Cancelled：各 Desktop / Tablet / Mobile（6）

實作優先順序為：Home → Service Detail → Pricing → Booking 四步驟 → Booking Submitted → Deposit Payment states；About、FAQ / Contact、Services Listing 可沿用相同 IA 與元件規則後續補齊。每個正式主流程頁均須驗證 Desktop 1440、Tablet 1024、Mobile 375；Mobile 是重新編排，不是 Desktop 縮小版。

## 內容模組

可重複使用的內容模組建議如下：

- 頁首導覽
- 頁尾聯絡資訊
- CTA 區塊
- FAQ 摘要模組
- 服務卡片模組
- 價格摘要模組
- 信任建立模組

## 元件分組

### 導覽元件
- Header
- Mobile Menu
- Footer

### 內容元件
- Hero Banner
- Service Card
- FAQ Item
- Price Block
- Timeline / Flow Step
- Contact Block

### 表單元件
- Input
- Select
- Textarea
- Submit Button
- Submission Status Message
- Error Message

## 命名原則

- 頁面名稱以使用者易懂為優先。
- 導覽名稱與頁面標題應盡量一致。
- 服務名稱需與 `SERVICE_CATALOG.md` 對齊。
- 預約、諮詢、聯絡等詞彙不可混用過度，以免使用者混淆。

## 頁面關聯

- 首頁導向服務、價格、FAQ、關於與預約。
- 服務介紹頁導向價格與預約。
- 價格頁導向預約與 FAQ。
- FAQ 頁導向預約與聯絡。
- 關於頁導向預約與服務介紹。

## 開放問題

- 聯絡方式要併在首頁／頁尾，還是獨立成聯絡頁？
- 服務詳情頁要不要拆成多頁？
- 預約流程與預約表單要同頁還是分頁？
- 是否要有獨立個資告知頁？
- 各服務是否需要不同表單欄位與不同的詳細頁內容？
- 各服務候選欄位中哪些資料是真正必要資料？
- 神明／祖先服務的子類型與資訊層級如何呈現？
- 入宅／搬遷與宅事／到場諮詢的界線如何呈現？
- 首頁服務優先順序是否符合玄機堂實際推廣目標？
- Service Detail 是否使用共用 Template？
- Pricing Page 應使用 Cards、Table 或混合式？
- Booking Form 最終需要幾個 Step？
- 22 張正式 Stitch 畫面是否需新增 About、FAQ／Contact、Services Listing 的同等斷點版本（目前不納入核心畫面清單）。
