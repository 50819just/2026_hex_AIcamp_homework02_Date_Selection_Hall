# 玄機堂擇日舘 Spec

最後更新：2026-08-14

## 狀態分類原則（2026-08-13）

- **Confirmed**：業主／實際訪談已明確確認，或已確定採用的 MVP Product Decision。
- **Proxy Assumption**：依既有訪談、台灣民俗服務常見情境、競品研究與 UX／Product Design 推導的暫定規格；可支援 IA、頁面結構、Booking Structure 與 UI Foundation，但不得表述為老師本人已確認。
- **Pending Owner Validation**：只有業主本人可最終確認的營運、專業、價格、素材、隱私與交付細節。
- **Required Before Production Launch / Pending Final Validation**：正式上線前必須完成，但本輪不自行假定其最終內容或法律／營運政策。

## 2026-08-14 本輪確認決策

- 首頁與預約表單服務項目擴充為七項；保留「其他擇日需求」，另新增「其他服務諮詢」作為非主要分類、先了解服務方向的承接入口。
- 「其他擇日需求」代表使用者不確定擇日服務分類；「其他服務諮詢」代表使用者想先了解不屬於主要分類的服務方向，兩者不可合併或重複解釋。
- 「神明・祖先事宜」前台可顯示起始參考價格 `NT$8,000 起`；實際服務內容、服務範圍與最終費用仍須由老師人工確認，不做自動加價或自動計價。
- 綠界付款改採「人工確認總價後收取分級預約訂金」；不在使用者第一次送出預約申請時直接收款。
- 預約訂金只使用三種金額：`NT$800`、`NT$1,200`、`NT$1,600`；尾款為服務總價扣除已付訂金。

## Confirmed
- 產品定位為服務介紹、信任建立與預約轉換的擇日服務預約網站。
- 玄機堂不是自動算命網站，不提供自動算吉日、八字、沖煞、方位、唯一日期推薦或結果保證。
- 所有專業判斷皆需由老師人工確認。
- 首頁服務採分類方式，資訊架構以「人生事件 → 服務分類 → 詳細需求」為主。
- 首頁主要服務分類包含：
  - 婚嫁擇日
  - 新生兒命狀・命名
  - 入宅・搬遷擇日
  - 神明・祖先事宜
  - 宅事・到場諮詢
  - 其他擇日需求
  - 其他服務諮詢
- 價格採混合式揭露：參考價格、起價／價格區間、依個案報價。
- 神明・祖先事宜可顯示 `NT$8,000 起` 作為前台起始參考價格，並明確標示實際依案件內容與服務範圍確認。
- 外縣市、跨縣市、多地點、老師到場、神明祖先相關特殊案件不做自動計價。
- 價格與服務資料需集中管理，不分散 hard code 在各元件。
- 預約採雙軌：
  - Primary CTA：開始預約
  - Secondary CTA：LINE 詢問、電話詢問
- 預約流程確認為：
  - 選擇服務
  - 填寫需求
  - 填寫希望辦理期間／候選日期與地點
  - 依服務類型顯示到場相關欄位
  - 留下聯絡方式
  - 送出預約申請
  - 老師人工確認
  - 確認價格
  - 確認時間
  - 正式成立預約
- 表單送出後不得顯示「預約成功」，而應顯示「預約申請已送出」，並告知老師會透過 LINE 或電話聯繫。
- 首頁現階段可直接實作的主要區塊包含：
  - Header / Navigation
  - Hero
  - Trust Introduction
  - Services
  - How It Works
  - Pricing Preview
  - On-site Service
  - About / Trust
  - FAQ
  - Final CTA
  - Footer
  - Mobile Responsive
- 整體 UI / UX 方向：
  - 傳統文化氣質
  - 穩重可信
  - 更多留白
  - 更清楚的視覺層級
  - 更現代的 Product Design 感
  - Mobile UX 優先
- 視覺關鍵字：Traditional、Calm、Trustworthy、Taiwanese Cultural、Professional、Contemporary。
- 可用色彩方向：暖米白、紙張色、深墨色、茶褐色、木質色調、低彩度朱紅 accent、少量金色。
- 避免大量亮金、滿版大紅、廉價宮廟感、過多八卦符號、發光玄學特效與遊戲化算命介面。
- 首頁與 About 頁需要保留老師／服務者介紹與 Trust 區塊，作為信任建立的一部分；實際公開資料另列 Pending。
- 服務前會先由客人詢問並確認服務費用；諮詢費、車馬費等相關費用原則上在服務前先說明。
- 訂金不是所有案件一律必收；僅在老師確認服務內容、總價與案件安排後，且案件適用訂金級距時收取。
- 預約表單採「Base Information + Conditional Service-specific Information」，不使用所有服務共用的超長表單。
- 日期資料分為「Event Date／Desired Period（希望辦理期間）」與「Contact Preference（聯絡偏好）」；兩者不可混為正式預約時段。
- 到場邏輯依服務類型條件顯示，優先適用於入宅／搬遷、神明／祖先與宅事／到場諮詢，不對所有服務一律詢問。
- MVP 採「人工確認後的綠界預約訂金付款」，不做完整服務費一次付清、購物車或電商式 Checkout 購物流程。
- 系統不得自動推算服務總價；老師先人工確認服務內容、服務範圍與服務總價，之後才依總價套用預約訂金級距。
- 預約訂金級距如下：
  - 服務總價 `NT$5,000 以下`：預約訂金 `NT$800`。
  - 服務總價 `NT$5,001～8,000`：預約訂金 `NT$1,200`。
  - 服務總價 `NT$8,001 以上`：預約訂金 `NT$1,600`。
- 尾款計算公式為：`尾款 = 老師確認的服務總價 − 已付預約訂金`。
- 例：服務總價 `NT$5,000` 時，綠界交易金額為 `NT$800`，付款成功後顯示尾款 `NT$4,200`。
- 若訂金金額大於或等於服務總價，或案件不適用級距，禁止自動建單，改由老師人工確認付款方式。
- 付款金流的 MerchantID、HashKey、HashIV 等敏感設定只能放在後端環境變數，不得出現在 React 前端或公開頁面。
- 綠界付款成功必須以後端接收付款結果並主動查詢訂單狀態為準，不以瀏覽器跳轉回站單獨判定成功。
- 付款完成後需顯示服務總價、已付訂金、尾款金額與尾款說明；尾款實際收取時間與方式仍依老師確認的案件安排。
- 首次提交預約申請只要求 Minimum Required Information：聯絡人姓名、手機號碼、服務類型、需求簡述、希望辦理日期／期間、所在縣市與希望聯絡方式。
- 專業資料採 Optional Candidate Professional Fields + Manual Follow-up，不將競品欄位全部設為必填。
- 神明／祖先前台使用白話分類；專業術語保留為 Candidate Internal Taxonomy，等待業主確認。
- 入宅／搬遷定義為 Event-based Service；宅事／到場諮詢定義為 Place-based Consultation。
- 若入宅／搬遷同時需要現場協助，使用 Primary Service + Additional Need，不要求使用者提交兩張服務申請。
- 網站送出的是 Booking Request；老師確認後才進入 Confirmed Case / Appointment，兩者不可混為同一狀態。
- 預約申請與付款為兩個不同階段：第一次送出表單只建立 Booking Request；老師人工確認服務、總價與日期後，才建立綠界預約訂金交易。
- 綠界交易成功代表預約訂金已付款，不代表系統自動完成專業判斷或自動成立所有服務內容；日期／時間若尚未確認，案件仍須保留人工確認狀態。
- 每項服務的規格都需要保留 Deliverable、Delivery Method、Estimated Turnaround 與 Turnaround Factors 欄位。
- 目前不承諾固定完成天數；實際處理時間於確認案件時說明。
- 急件只作為 Urgency Signal，不代表保證優先處理、加費或一定承接。
- 修改／改期依老師已處理的案件進度與變更內容人工確認，不預先承諾免費或無限修改。
- Trust 內容優先採 Local + Human + Transparent，只使用真實且可驗證的老師、場館、工作方式與素材。
- 不假造老師資歷、歷史、傳承、評價、案例或任何會被使用者理解為真實服務證據的 AI 圖像；MVP Demo 可使用「示意人物」與「示範個案」，但須明確標示且不可冒充玄機堂真實人員、客戶、案例、店面或歷史資料。
- 業主提供的名片可辨識出老師姓名為陳俊宏，並提供行動電話、市話、Email 與宜蘭縣羅東鎮地址；正式公開前仍需確認資料是否最新且同意放上網站。

- MVP 的預約申請採結構化資料接收：網站表單送出後，資料寫入**私有 Google Sheet**，並透過 Google Apps Script 串接；可選擇發送 Email 作為新申請通知。
- Google Sheet 是 MVP 的案件申請紀錄，不以 Email Inbox 或 LINE 對話作為唯一案件資料庫。
- LINE 與電話維持人工聯絡渠道；第一版不建置 LINE Bot 自動接單、CRM、完整後台、會員系統或複雜資料庫。
- Google Sheet 初始狀態使用 `New／待確認`；欄位只保存網站實際收集與服務確認所需資料，例如 Submitted At、Booking ID、聯絡資料、服務類型、希望期間、地點、到場需求、服務專屬資料、備註與案件狀態。
- 送出前須有必勾的資料使用 Checkbox。建議文案為：「我同意玄機堂擇日舘使用本次填寫資料，作為預約聯繫、服務確認與相關溝通之用。」
- 表單附近需提供「了解資料使用說明」入口；此為 Required Content，完整隱私／資料使用條款尚未撰寫。
- Booking 最後一步需預留資料使用說明入口與必勾 Checkbox。
- MVP 不承諾固定回覆 SLA。送出後統一使用：「預約申請送出後，老師將確認您提供的資料與服務需求，並透過 LINE 或電話與您聯繫。」
- 急件維持 Urgency Signal；可請使用者標記需求較急，但不保證承接、優先處理或固定急件費。
- 第一次預約申請只收基本聯絡與事件資料；所有服務專業資料先採 `Conditional Optional Fields`，由老師確認案件後再補問。
- 若申請涉及到場，所在縣市／地區為必填；完整地址可於人工確認後再補。
- MVP 只提供統一的「預約申請」流程，不建立獨立的諮詢 Form。使用者若想先詢問，改走 LINE／電話 Secondary Flow。
- 各服務目前只定義 Deliverable Direction；前台統一說明「實際服務內容與提供方式於案件確認時說明」，不承諾紙本、電子檔、LINE、電話或固定交付格式。
- Page Spec／Stitch Foundation 的建立順序固定為：Home → Service Detail Template → Booking → Pricing → Services Listing → About → FAQ / Contact。
- 首頁與其他主要頁面的「開始預約」CTA 一律導向獨立 `/booking` Booking Page；首頁不嵌入完整預約表單，也不將使用者先導向 LINE。
- 特定 Service Card 可用 query parameter 或 route state 預選服務，例如 `/booking?service=marriage`；使用者進入 Booking Page 後仍可修改服務類型。
- 首頁 Trust Section 在老師照片、正式資歷、案例尚未確認前，先呈現四項真實服務原則：老師人工確認、費用事前說明、依實際需求安排、LINE／電話人工聯繫。
- 若已有可公開的真實玄機堂招牌或場館照片，可優先用於 Trust Section；未取得真實素材時，Demo 可用明確標示的示意人物、示範個案或裝飾視覺補足版面，但不得假造年資、傳承、評價或真實服務證據。
- 競品的表述方式可作 Research Reference，但「一甲子」、「三代」、「專業服務」等年資、傳承或資歷宣稱，須有玄機堂可驗證的真實資料才可使用，現階段不可寫入前台。

### 預約與綠界付款流程

Booking 頁仍維持 4 個可見步驟，付款不插入表單中，也不把預約申請直接當成付款訂單。

1. **Step 1｜Need / Event**：選擇服務、填寫需求與希望辦理期間／候選日期。
2. **Step 2｜Service-specific Information**：依服務類型顯示必要或選填的補充資料。
3. **Step 3｜Contact / On-site**：填寫聯絡方式；涉及到場時填寫所在縣市／地區與到場需求。
4. **Step 4｜Review / Submit**：檢查資料、閱讀資料使用說明、勾選同意後送出預約申請。
5. **申請送出後**：顯示「預約申請已送出」，建立 `Booking Request / New`，不顯示預約成功，也不立即建立綠界交易。
6. **老師人工確認**：透過 LINE 或電話確認服務內容、服務範圍、服務總價、日期／時間與是否適用訂金級距。
7. **建立訂金交易**：服務總價確認後，依級距產生 `NT$800`、`NT$1,200` 或 `NT$1,600` 的綠界預約訂金交易；交易品名需明確標示為「預約訂金」，不可誤寫成完整服務費。
8. **前往綠界付款**：使用者完成綠界測試／正式環境所對應的付款流程；金流憑證與雜湊金鑰由後端處理。
9. **付款結果確認**：後端接收綠界通知並主動查單，確認交易金額、訂單編號與付款狀態一致後，才將訂金標記為已付款。
10. **付款成功頁**：顯示服務總價、已付訂金、尾款金額與尾款說明；若日期／時間尚未完成確認，文案仍需保留人工確認狀態。
11. **付款失敗／取消**：保留預約申請資料，顯示可讀的失敗原因與重新付款／聯繫老師入口；不得誤顯示為預約成功。

### 付款相關狀態

```text
Booking Request / New
→ Awaiting Manual Confirmation
→ Fee and Schedule Confirmed
→ Deposit Payment Pending
→ Deposit Paid
→ Confirmed Case / Appointment（僅在日期／時間等成立條件完成後）
```

付款失敗或使用者取消付款時，狀態不得進入 `Deposit Paid`；可回到 `Deposit Payment Pending` 或標記 `Payment Failed`，供老師人工追蹤。

每筆案件至少需能保存以下金額資訊：

- `serviceTotalAmount`：老師確認的服務總價。
- `depositTier`：`800`、`1200` 或 `1600`。
- `depositAmount`：本次綠界實際交易金額。
- `balanceAmount`：服務總價扣除已付訂金後的尾款。
- `paymentStatus`：付款待處理、付款成功、付款失敗或付款取消。

### 流程驗收條件

- Booking 頁只能呈現 4 個表單步驟：Need / Event、Service-specific Information、Contact / On-site、Review / Submit。
- 第一次送出表單後必須顯示「預約申請已送出」，不得直接導向綠界，也不得顯示「預約成功」。
- 未完成老師人工確認服務內容、服務總價與日期／時間前，不得建立綠界訂金交易。
- 綠界交易金額只能是 `NT$800`、`NT$1,200` 或 `NT$1,600`，且必須與服務總價級距一致。
- `NT$5,000` 服務案件的綠界交易金額必須為 `NT$800`，付款成功後尾款必須顯示為 `NT$4,200`。
- 付款成功頁必須同時呈現服務總價、已付訂金、尾款與尾款說明；付款失敗或取消不得呈現付款成功。
- 後端必須驗證綠界回傳結果、訂單編號與金額，並完成主動查單後才可標記 `Deposit Paid`。
- 任何服務總價自動計算、訂金例外、退款、改期或尾款收取方式未經確認時，必須轉人工處理，不得由前台自行推定。

## Proxy Assumption
- 首頁先以單頁式 landing page 呈現主要資訊，後續再視需求拆成獨立內頁。
- 主要服務卡先以「摘要 + 適用情境 + 提醒」三層內容呈現，較深的專業細節暫不在首頁完全展開。
- 預約申請表單此階段先做為靜態 MVP UI，尚未串接後端或真實送單機制。
- 聯絡方式目前以電話與 Email 為可辨識的真實管道；名片未提供 LINE 帳號，營業時間與回覆 SLA 仍以待確認處理。
- 價格預覽先揭露少量參考價格與價格區間，神明祖先、跨區到場與複雜案件以「依個案報價」呈現。
- 已知片面價格資訊僅可作為 MVP 顯示草案，不視為正式對外定價。
- 到場服務目前先以「宜蘭縣內可到場、外縣市需另議」作為描述方向，精確範圍與規則待確認。
- FAQ 先收納最關鍵疑問：是否自動判斷、是否預約成功、外縣市怎麼計費、怎麼聯繫。
- 首頁先維持「婚嫁擇日」一個主要服務分類，不拆成多張婚嫁 Service Card；婚嫁需求可在服務詳情與預約表單中再細分。
- 婚嫁目前可使用 NT$1,500～2,500 作為 MVP Mock Reference Price，但必須標示為參考區間，不得視為正式價目表。
- 尚未確認正式價格的服務，MVP 先以「依個案確認」呈現；神明・祖先事宜可先顯示 `NT$8,000 起`，外縣市、到場、多地點與特殊案件仍採人工確認服務範圍與費用。
- MVP 不在預約申請送出時直接收款；預約流程採「預約申請 → 人工確認服務、總價與日期 → 依級距收取綠界預約訂金 → 顯示尾款 → 依事前約定收取尾款」。
- LINE 與電話暫時並列為 Secondary Contact Channel，不自行指定主要渠道；預約送出後可暫寫由老師透過 LINE 或電話聯繫。
- Trust／About 先建立內容結構，不自行補造年資、傳承、證照、頭銜、成立年份或客戶案例。
- 所有服務先收共同基本資料，再依服務類型顯示候選欄位；競品提供的專業欄位僅作候選來源，不直接視為玄機堂需求。
- 表單可提供「希望聯絡方式」與選填的「方便聯絡時間」，但不代表老師承諾該時段一定可聯絡或服務。
- 營業時間與急件承接尚未確認，網站不複製競品的營業時間或回覆承諾。
- 表單採 Progressive Disclosure：先顯示基本必填，再依服務類型顯示候選專業欄位；專業欄位暫不全部設為 Required。
- 神明／祖先前台暫以「神明相關」、「祖先牌位相關」、「搬家／入宅相關」、「其他」、「不確定」呈現。
- 首頁服務視覺優先順序暫採 IA／UX 假設：第一層婚嫁、入宅／搬遷、新生兒；第二層神明／祖先、宅事／到場；第三層其他需求。
- Service Deliverable 暫以 Written、Verbal、On-site、Digital、Physical、Mixed、Pending 作為 schema 分類，不代表各服務已確認採用的交付格式。
- 處理時間文案暫統一使用「依服務內容、資料完整度與老師安排確認」。
- Trust Strategy 暫採 Local + Human + Transparent，先建立內容結構，不填入未確認事實。
- 首頁資訊主線採 `Understand → Service → Trust → Process → Price → FAQ → Action`。
- Service Detail 採 `Shared Template + Conditional Sections`，不為每項服務建立完全不同的頁型。
- Pricing Page 採 `Pricing Cards + Pricing Rules`；Table 只作桌機次要比較，不作唯一呈現方式。
- Booking UI 採 4 個可見步驟：Need / Event、Service-specific Information、Contact / On-site、Review / Submit。
- Stitch 正式 UI reference 固定為 22 張畫面：Logo 1 張；Home、Service Detail、Pricing、Booking、Submitted 各 Desktop／Tablet／Mobile；Deposit Payment Success、Payment Failed／Cancelled 各 Desktop／Tablet／Mobile。React 依此清單實作與驗收。

- 各服務先採 Service Deliverable Direction：婚嫁為人工擇日結果＋老師說明；命狀偏 Written／Physical；命名為名字建議＋老師說明；入宅／搬遷偏擇日結果、安排與人工說明；神明／祖先、宅事／到場偏 Guidance／On-site／Verbal。以上均為 Proxy Assumption，實際格式仍待業主確認。

## Pending
- ⚪ Can Confirm Later：各服務正式的參考價格、起價與價格區間；婚嫁 NT$1,500～2,500 為 Mock Reference Price，神明・祖先 NT$8,000 起為已確認的前台起始參考價格，最終案件費用仍待人工確認。
- ⚪ Can Confirm Later：新生兒命狀／命名、入宅／搬遷、宅事／到場、其他擇日需求與其他服務諮詢的正式報價方式。
- ⚪ Can Confirm Later：特殊案件是否適用 NT$800／1,200／1,600 訂金級距、例外案件的付款方式，以及綠界正式或測試環境的啟用時程。
- ⚪ Can Confirm Later：預約申請送出後的標準回覆時間、主要對外聯絡渠道與聯繫順序。
- 🔴 Blocking Launch：是否正式公開名片上的電話、Email、地址，以及營業時間與聯絡注意事項。
- 🟡 Affects Stitch/Design：是否需要附件上傳，以及地址欄位需要到縣市、地址或其他程度。
- ⚪ Can Confirm Later：老師正式稱謂、是否長期公開本名、可公開的服務經歷、擅長服務與可驗證傳承。
- ⚪ Can Confirm Later：是否能放本人照片、工作環境、店面／招牌、真實客戶案例或評價。
- 🟡 Affects Stitch/Design：婚嫁除新人出生年月日時外，是否需要父母生肖／年次、祖父母資訊、安床資訊、新房方位或其他傳統資料。
- 🟡 Affects Stitch/Design：新生兒命狀是否有不同版本、是否需要地址或其他八字資料。
- 🟡 Affects Stitch/Design：新生兒命名是否需要父母、祖父母、親屬姓名或其他命名規則資料。
- 🟡 Affects Stitch/Design：入宅／搬遷是否需要房屋坐向、全家生肖／年次、屋主出生資料或完工／交屋日期。
- 🟡 Affects Stitch/Design：神明／祖先事宜的實際子類型與後續專業補問資料。
- 🟡 Affects Stitch/Design：哪些服務實際可以到場、哪些不需到場，以及宜蘭縣內與外縣市的服務範圍、接送與多地點安排。
- ⚪ Can Confirm Later：各服務實際交付物、完成時間與急件處理方式。
- ⚪ Can Confirm Later：改期／修改需求如何處理，已擇日期重新處理是否可能產生費用。
- 🔴 Blocking Launch：Booking Request 轉為 Confirmed Case / Appointment 的正式成立條件。
- ⚪ Can Confirm Later：首頁服務優先順序的真實依據：最常詢問、最常成交與最希望推廣的前三名。
- ⚪ Can Confirm Later：老師／玄機堂可公開的真實信任內容：正式稱謂、經歷、照片、館址、服務理念與案例；名片聯絡資料已取得，但公開範圍仍待確認。
- ⚪ Can Confirm Later：各服務的共用 Service Detail Template 是否正式採用。
- 🟡 Affects Stitch/Design：Pricing Page 的資訊組織方式，以及 Booking Form 的最終 Step 數量。
- 🟡 Affects Stitch/Design：Stitch 第一批是否只涵蓋 Home、Service Detail、Booking，或一次涵蓋全部 MVP Pages。
- ⚪ Can Confirm Later：是否有固定營業時間、是否接受急件，以及改期／取消規則。
- 🔴 Blocking Launch：最終管理預約資料的 Google Account、Google Sheet 擁有者與實際管理者。
- ⚪ Can Confirm Later：Email 新申請通知的收件人與是否正式啟用通知。
- ⚪ Can Confirm Later：是否建立 LINE 官方帳號；若建立，如何與人工聯絡流程搭配。
- 🔴 Blocking Launch：預約資料的保存期間與後續刪除／管理方式。
- ⚪ Can Confirm Later：是否有明確的取消、改期、退款與重新報價規則。
- ⚪ Can Confirm Later：預約訂金的取消／退款／改期規則、尾款實際收取時點與收取方式，以及付款失敗後保留案件的期限。
- 🟡 Affects Stitch/Design：是否需要服務詳情頁、價格頁、FAQ 頁等獨立內頁，以及各頁優先順序。
- 🔴 Blocking Launch：個資法遵循尚未完成評估；網站會蒐集姓名、電話等個資，目前僅有資料使用同意 Checkbox，尚未確認《個人資料保護法》所需告知事項與正式政策內容是否齊全。
- 🔴 Blocking Launch：公開表單直接寫入 Google Sheet 的防護尚未規劃，包括 rate limit、防機器人驗證（例如 reCAPTCHA）與異常送單偵測。
- ⚪ Can Confirm Later：首頁與預約流程尚未定義 Success Metrics，例如預約申請完成率、表單放棄率等，完成後無法評估成效。
- 🔴 Blocking Launch：完整 Privacy Policy、保存期限、資料管理者、實際儲存位置與刪除流程均為 Required Before Production Launch / Pending Final Validation。

## Stitch Readiness Review（2026-08-13，叔叔代理版整理後）

| 項目 | 狀態 | 判斷 |
|---|---|---|
| Product Scope | Ready | 人工服務定位、MVP 邊界、Primary CTA 與非目標穩定。 |
| Service Architecture | Mostly Ready | 七項分類、Conditional Optional Fields 與 Deliverable Direction 已可支撐頁面；實際交付格式仍屬 Pending Owner Validation。 |
| Homepage IA | Ready | `Understand → Service → Trust → Process → Price → FAQ → Action` 已可支撐首頁結構。 |
| Service Detail Template | Ready | 共用 Template、條件區塊、資料與交付保守說法已定。 |
| Booking Flow | Ready | `/booking`、4-Step、預選服務、人工確認、同意 Checkbox 與失敗狀態已定。 |
| Pricing Architecture | Ready | Cards + Rules、Mock Reference Price、人工確認總價與三段預約訂金級距可支撐 UI；正式價格與例外案件規則可後補。 |
| Payment Flow | Mostly Ready | 人工確認後才建立綠界訂金交易、付款結果查核與尾款明細已定；退款、改期、尾款收取方式仍待確認。 |
| Trust Strategy | Mostly Ready | 真實服務原則、Real Trust Asset 與清楚標示的 Demo 視覺規則已定；老師／場館的可公開素材仍待確認。 |
| Contact Logic | Ready | Primary CTA 為 Booking；LINE／電話為不分優先順序的 Secondary Contact Channels。 |
| On-site Logic | Mostly Ready | 條件顯示、縣市／地區必填、完整地址後補的結構已定；實際承接範圍仍待確認。 |
| Privacy UI Requirements | Ready | Data Usage Notice、Privacy / Data Notice Link、Required Consent Checkbox 與 Privacy Contact Entry Point 已納入 UI；正式政策屬上線前驗證。 |
| Design Direction | Ready | 視覺原則、真實素材優先與 Mobile 重點足以支撐 UI Brief。 |

### Non-blocking Pending

- 正式價格、急件加價、改期／退款費用與實際營運數字。
- 婚嫁、命狀、命名、入宅／搬遷等服務的最終交付格式、名字數量與完成天數。
- 老師正式稱謂、照片、年資、傳承、館址、案例與評價。
- Privacy Policy、保存期限、資料管理人、實際儲存位置與刪除／更正流程（Required Before Production Launch）。

### Blocking Stitch

目前沒有重大 Blocking Stitch 問題。上述事項主要是可替換的 Content／Data／Production Validation，不需要為了追求 100% Spec 完成而延後 UI 架構設計。
