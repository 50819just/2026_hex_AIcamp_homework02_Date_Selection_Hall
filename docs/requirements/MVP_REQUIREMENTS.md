# MVP Requirements

狀態：draft  
最後更新：2026-08-13

## 本階段目標
- 讓使用者理解玄機堂提供的服務，找到適合的服務分類，並提交預約申請。
- 在不自動產生命理專業結論的前提下，清楚呈現人工確認、報價與後續聯繫流程。
- 先整理足以支援後續 Stitch UI 設計的服務、價格、表單與信任內容需求。

## Must Have
- 首頁呈現七項主要服務分類：婚嫁擇日、新生兒命狀・命名、入宅・搬遷擇日、神明・祖先事宜、宅事・到場諮詢、其他擇日需求、其他服務諮詢。
- 婚嫁在首頁維持單一主要分類；詳細頁與預約表單可再選擇婚嫁需求類型。
- 提供服務介紹、價格說明、FAQ、關於／Trust、聯絡方式與預約入口。
- 預約採「提交預約申請 → 老師人工確認 → 確認服務、費用與日期／安排」的流程。
- MVP 只提供統一的「預約申請」表單；先諮詢改由 LINE／電話 Secondary Flow 處理，不建立第二張諮詢 Form。
- 送出後顯示「預約申請已送出」，不可顯示「預約成功」。
- 預約送出後說明老師會透過 LINE 或電話聯繫；目前不指定哪一個是主要渠道。
- 婚嫁價格可暫以 NT$1,500～2,500 作為 Mock Reference Price，並明確標示非正式價目表。
- 未確認正式價格的服務、外縣市、到場、多地點與特殊案件，顯示「依個案確認」並由人工報價。
- 不自動計算車馬費，不自動產生擇日或命理結論；預約訂金只在老師人工確認服務總價與日期／時間後，依 NT$800／1,200／1,600 三段級距收取。
- 預約表單採 Base Information + Conditional Service-specific Information。
- 「希望辦理期間／候選日期」與「方便聯絡時間」必須分開，不得將聯絡時間當成正式預約時段。
- 到場欄位依服務類型條件顯示，優先適用於入宅／搬遷、神明／祖先與宅事／到場諮詢。
- MVP 不提供完整服務費一次付清、Checkout 或購物車；人工確認後可透過綠界支付預約訂金，付款成功後顯示尾款明細。
- 預約表單送出前必須勾選資料使用 Checkbox；未勾選不得送出。
- 表單送出後須建立結構化預約紀錄，不得只做展示或僅把 Email Inbox 當案件資料庫；綠界付款結果另需保存訂金與尾款金額、付款狀態與交易識別資料。
- 送出後不承諾固定回覆 SLA；使用「老師將確認資料與服務需求，並透過 LINE 或電話聯繫」等保守說法。
- 第一次提交預約申請只要求最低基本資料：聯絡人姓名、手機號碼、服務類型、需求簡述、希望辦理日期／期間、所在縣市與希望聯絡方式。
- 各服務專業資料一律先採 Conditional Optional Fields；第一次申請不將任何專業欄位設為 Required，由老師確認後再補問。
- 若涉及到場，所在縣市／地區為必填；完整地址可於人工確認後補充。
- 神明／祖先前台使用白話分類，專業術語保留為內部候選 taxonomy。
- 入宅／搬遷與宅事／到場諮詢分別對應 Event-based Service 與 Place-based Consultation。
- 重疊需求採 Primary Service + Additional Need，不要求使用者提交兩張服務申請。
- 每項服務規格需保留交付類型、交付方式、預估處理時間與影響因素欄位。
- 前台不可承諾未確認的固定交付格式、固定完成天數或急件結果；統一使用「實際服務內容與提供方式於案件確認時說明」。

## Confirmed MVP Product Decisions（2026-08-13）
- 網站表單 → Google Apps Script → 私有 Google Sheet，作為第一版結構化預約資料接收方式。
- 可搭配 Email 發送新預約申請通知，但 Email 不取代 Google Sheet 的案件紀錄角色。
- LINE／電話維持人工聯絡渠道，不作為 Booking Database。
- Google Sheet 的初始案件狀態為 `New／待確認`；最終帳號、管理者與通知收件人仍待業主確認。
- 資料使用 Checkbox 的目的限於預約聯繫、服務確認與相關溝通；完整法律條款與保存政策不在本輪自行定義。


## Foundation Page Spec Order（MVP Product / UX Decision）

後續逐頁 Spec 與 Stitch Foundation 依以下順序處理：

1. Home
2. Service Detail Template
3. Booking
4. Pricing
5. Services Listing
6. About
7. FAQ / Contact


## Home CTA / Trust Decisions（Confirmed MVP UX / Content Decision）

- 首頁所有主要「開始預約」CTA 必須導向獨立 `/booking` Booking Page；首頁不嵌入完整預約表單，也不以 LINE 作 Primary CTA 的第一跳。
- 特定 Service Card 的 CTA 可傳遞服務預選值，例如 `/booking?service=marriage`；進入後使用者仍必須能修改服務類型。
- 首頁 Trust Section 先呈現四項真實服務原則：老師人工確認、費用事前說明、依實際需求安排、LINE／電話人工聯繫。
- 有可公開的真實招牌／場館照片時可優先使用；老師照片、年資、傳承與客戶案例仍維持 Pending Owner Validation。
- 不得以競品用語或架構推定玄機堂具有「一甲子」、「三代」或任何未驗證的資歷／傳承。

## Should Have
- 依服務類型收集不同的需求資料。
- 支援使用者選擇「不確定，希望老師協助確認」。
- 提供希望聯絡方式：LINE／電話／皆可。
- 提供選填的方便聯絡時間，不承諾該時段一定可聯絡。
- 說明諮詢費、車馬費與其他費用會在服務前先確認。
- 首頁與 About 頁保留老師／服務者介紹與 Trust 區塊，但不補造未確認資歷。
- 清楚處理外縣市、多地點、資料不足與無法承接等情境。
- 以 Progressive Disclosure 降低手機表單長度。
- 文件與流程需區分 Booking Request 與 Confirmed Case / Appointment。
- 表單可提供急件／時間較急訊號，由老師人工判斷是否承接。
- 修改、改期、重新擇日或重新命名需依案件進度人工確認，不預先承諾免費或無限修改。
- Trust 區塊優先使用真實可驗證的老師、場館、工作方式與素材。

## Could Have
- 附件上傳。
- 偏好聯繫時段。
- 獨立服務詳情頁與價格頁。
- 服務組合方案或加急服務。
- 前台完整案件狀態追蹤頁。
- 固定交付格式、固定完成天數、急件加價規則與免費修改政策。

## Won't Have This Phase
- 自動算吉日、八字、沖煞、方位或唯一日期推薦。
- 自動計算外縣市或車馬費。
- 線上直接確認正式預約，不經老師人工確認。
- 在未確認資料前公開老師年資、傳承、證照、頭銜、成立年份或客戶案例。
- LINE Bot 自動接單、CRM、完整後台、會員系統、複雜資料庫或只做展示而完全不送出的表單。
- 不重新生成或擴增 Stitch 正式畫面；目前已鎖定的 22 張畫面可作為 React UI 實作依據。

## 驗收條件
- 使用者能從首頁理解七項主要服務分類與預約入口。
- 婚嫁不會在首頁被拆成多張獨立 Service Card，但可在後續流程細分需求。
- 使用者能分辨正式價格、Mock Reference Price 與依個案確認。
- 使用者能理解送出的是預約申請，而非已成立預約。
- 使用者能區分希望辦理期間與方便聯絡時間。
- 使用者第一次送出預約申請時不會看到付款；人工確認後才會看到綠界預約訂金付款與尾款明細。
- 使用者可以先提交最低基本資料，不必一次填完所有專業欄位。
- 使用者能分辨入宅／搬遷與宅事／到場的用途差異。
- 文件不將首頁排序誤寫成實際熱門或成交排名。
- 網站不假造老師資歷、歷史、傳承、評價、案例或服務照片。
- 未勾選資料使用同意時，表單不得送出。

## UI / Information Architecture Requirements

以下屬 MVP Product / UX Decision，用於指導後續 UI，不等同於 Owner Business Rule：

- 首頁主線為 Understand → Service → Trust → Process → Price → FAQ → Action。
- Service Detail 必須支援共用 Template 與 Conditional Sections。
- Pricing 必須能同時呈現參考價格、價格區間、依個案確認與特殊報價規則。
- Booking UI 使用 4 個可見步驟：Need / Event、Service-specific Information、Contact / On-site、Review / Submit。
- UI 實作以已鎖定的 22 張正式畫面為範圍；Home、Service Detail、Pricing、Booking、Submitted 與付款結果均需驗證 Desktop／Tablet／Mobile。
- 文件未將未知老師資料或付款規則誤標為 Confirmed。
