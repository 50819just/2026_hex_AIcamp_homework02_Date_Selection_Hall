# SERVICE_CATALOG.md

狀態：draft  
最後更新：2026-08-13

## 文件目的

本文件用於定義玄機堂擇日舘第一版網站要呈現的服務清單與各服務的基本規格，讓後續頁面文案、表單欄位、價格說明與使用者流程有一致依據。

## 適用範圍

- 首頁服務摘要區塊
- 服務介紹頁
- 服務詳情頁
- 預約表單的服務類型選項
- 價格頁的服務分類
- FAQ 與聯絡說明中的服務名詞對齊

## 服務清單與 MVP 分類

首頁以「人生事件 → 服務分類 → 詳細需求」呈現。以下六項是 MVP 首頁主要服務分類，不代表每一項的正式價格或最終承接範圍都已確認。

## 首次申請的資料分層

### Required at First Submission
所有服務第一次送出預約申請至少需要：
- 聯絡人姓名
- 手機號碼
- 服務類型
- 需求簡述
- 希望辦理日期／期間
- 所在縣市
- 希望聯絡方式

### Optional Professional Information
- 各服務可依情境顯示候選專業欄位，但第一次申請一律採 `Conditional Optional Fields`，不將專業資料設定為必填。
- 專業資料不足時，由老師人工聯絡補問，不以「資料不足」直接判定申請失敗。
- 若需求涉及到場，所在縣市／地區為必填；完整地址可於人工確認後再補。
- 競品出現的專業欄位只作候選來源，實際必要資料維持 `Candidate Requirement / Pending Owner Validation`。

## Service Detail Schema

每項服務後續都需要補齊以下欄位；交付方向屬 `Proxy Assumption`，最終格式、方式與時程屬 `Pending Owner Validation`，不代表老師已確認實際內容：

- `Deliverable Type`：Written／Verbal／On-site／Digital／Physical／Mixed／Pending
- `Delivery Method`：In person／Phone／LINE／Pickup／Mail／Pending
- `Estimated Turnaround`：Pending
- `Turnaround Factors`：服務類型、資料完整度、是否需要到場、老師行程安排

目前不得因競品有紙本日課、固定命狀版本、固定名字數量或電子檔，就直接填入玄機堂服務規格。前台統一使用：「實際服務內容與提供方式於案件確認時說明。」

### 1. 婚嫁擇日
- 首頁呈現：維持一張主要 Service Card，不拆成結婚、訂婚／文定、登記日或宴客日等多張卡片。
- 詳細需求可再選：結婚、訂婚／文定、其他婚嫁需求、不確定，希望老師協助確認。
- 適用情境：婚嫁相關的重要日程安排。
- 共用基本資料：姓名、手機、希望聯絡方式、服務類型、需求說明、希望辦理期間、所在縣市與備註。
- 候選專業資料（Proxy Assumption / Conditional Optional Field）：新郎／新娘姓名、出生年月日、出生時間、國曆／農曆。
- 其他家屬生肖／年次、祖父母資訊、安床資訊、新房方位等，列為 Candidate Requirement / Pending Owner Validation。
- 交付內容：由老師人工確認後提供擇日建議、日期說明或注意事項。
- 交付方向（Proxy Assumption）：人工擇日結果＋老師說明；實際交付格式與說明方式待確認。
- Deliverable Type：Mixed／Pending。
- Delivery Method：Pending。
- Estimated Turnaround：Pending。
- 參考價格：NT$1,500～2,500 僅作 MVP Mock Reference Price，非正式價目表。

### 2. 新生兒命狀・命名
- 適用情境：新生兒命狀與命名相關需求。
- 共用基本資料：姓名、手機、希望聯絡方式、服務類型、需求說明、希望辦理期間、所在縣市與備註。
- 命狀候選資料（Proxy Assumption / Conditional Optional Field）：新生兒姓名（若已有）、性別、出生年月日、出生時間、國曆／農曆與其他補充。
- 命名候選資料（Proxy Assumption / Conditional Optional Field）：姓氏、性別、出生年月日、出生時間、國曆／農曆、喜歡的字（選填）、希望避免的字（選填）與其他命名需求。
- 父母、祖父母、親屬姓名、命狀版本、地址或其他命名規則，列為 `Pending Owner Validation`。
- 交付內容：由老師人工確認服務內容與交付方式。
- 交付方向（Proxy Assumption）：偏 Written／Physical；可寫為「依出生資料由老師人工排寫命狀，實際格式與提供方式依服務確認為準」。
- Deliverable Type：Written／Physical／Pending。
- Delivery Method：Pending。
- Estimated Turnaround：Pending。
- 價格：依個案確認，正式價格待確認。

#### 新生兒命名交付補充
- 交付方向（Proxy Assumption）：名字建議＋老師說明。
- 不承諾固定提供幾個名字、固定文字分析、再次選字、紙本或電子檔。
- Deliverable Type：Written／Verbal／Pending。
- Delivery Method：Pending。
- Estimated Turnaround：Pending。

### 3. 入宅・搬遷擇日
- 適用情境：搬家、入宅與搬遷相關日程安排。
- 共用基本資料：姓名、手機、希望聯絡方式、服務類型、需求說明、希望辦理期間、所在縣市與備註。
- 候選專業資料（Proxy Assumption / Conditional Optional Field）：舊址（若適用）、新址、希望搬遷期間、是否涉及神明、是否涉及祖先牌位、是否希望老師到場與其他說明。
- 房屋坐向、全家生肖／年次、屋主八字、其他專業宅事資料，列為 `Pending Owner Validation`。
- 交付內容：由老師人工確認後提供擇日建議與相關注意事項。
- 交付方向（Proxy Assumption）：擇日結果、搬遷安排與人工說明；視案件可能搭配到場。
- 不預設一定提供 PDF、報告或下載檔案。
- Deliverable Type：Verbal／On-site／Pending。
- Delivery Method：Pending。
- Estimated Turnaround：Pending。
- 價格：依個案確認，正式價格待確認。

### 4. 神明・祖先事宜
- 適用情境：神明、祖先牌位遷移或祭拜相關擇日需求。
- 前台白話分類（MVP Decision）：神明相關、祖先牌位相關、搬家／入宅相關、其他、不確定，希望老師協助確認。
- 候選資料：原所在地、新所在地（若有）、所在縣市、希望辦理期間、是否希望老師到場與自由文字需求說明。
- 安香、退神、合爐、公媽龕、晉塔等專業術語保留為 `Candidate Internal Taxonomy / Pending Owner Validation`，不直接全部顯示給使用者。
- 交付內容：由老師人工確認服務範圍與後續安排。
- 交付方向（Proxy Assumption）：偏向 Guidance／On-site／Verbal，不預設為可下載的數位報告。
- Deliverable Type：On-site／Verbal／Pending。
- Delivery Method：Pending。
- Estimated Turnaround：Pending。
- 價格：特殊案件採人工報價，正式價格待確認。

### 5. 宅事・到場諮詢
- 適用情境：住宅／空間本身有問題，需要老師到現場查看位置、安置或其他宅事；不一定正在搬家。
- 分類定義：`Place-based Consultation`。
- 所需資料：共用基本資料、地點、需求說明、是否希望老師親自到場、是否涉及多個地點與其他交通說明。
- 到場候選欄位（Proxy Assumption）：地址、縣市、是否方便協助接送老師。
- 交付內容：依個案確認是否承接、是否到場及服務安排。
- 交付方向（Proxy Assumption）：老師到現場提供人工確認與說明，不預設服務後一定另有書面報告。
- Deliverable Type：On-site／Verbal／Pending。
- Delivery Method：Pending。
- Estimated Turnaround：Pending。
- 價格：諮詢費、車馬費與其他費用於服務前說明，正式規則待確認。

### 6. 其他擇日需求
- 適用情境：無法歸入上述分類，或使用者尚不確定服務類型的需求。
- 所需資料：需求情境、希望日期／期間、地點與聯絡方式。
- 交付內容：由老師人工確認是否適用與後續安排。
- 交付方向（Proxy Assumption）：依需求提供相應的人工建議或說明；實際格式與提供方式於案件確認時說明。
- Deliverable Type：Pending。
- Delivery Method：Pending。
- Estimated Turnaround：Pending。
- 價格：依個案確認。

## 入宅／搬遷與宅事／到場的分類規則

- 使用者主要問題是「我要搬家／入住新家，需要安排日期」：歸入入宅・搬遷擇日，屬 `Event-based Service`。
- 使用者主要問題是「請老師到房屋現場確認空間／位置／宅事」：歸入宅事・到場諮詢，屬 `Place-based Consultation`。
- 兩者同時發生時，以一個 `Primary Service` 為主，另加「同時涉及到場諮詢」的 `Additional Need`，不要求使用者提交兩張申請。

## Shared Service Detail Template（MVP Product / UX Decision）

各服務詳細頁先共用同一套資訊結構，再依服務類型顯示、隱藏或改寫區塊：

1. Service Hero：服務分類、服務名稱、白話說明、價格狀態、Primary CTA。
2. 適合什麼情境：以使用者事件／Scenario 說明，不先堆疊專業術語。
3. 需要準備什麼：基本資料、專業候選資料、可能後續補充資料。
4. 服務流程：提出需求 → 提供資料 → 老師確認 → 確認費用與安排 → 完成服務。
5. 最後會得到什麼：呈現 Deliverable；未確認時使用保守說法。
6. 價格說明：Reference Price、Range 或 Individual Quote 其中一種，並附人工確認說明。
7. 到場服務：只在入宅／搬遷、神明／祖先、宅事等適用服務中顯示。
8. 處理時間：使用依服務內容、資料完整度與老師安排確認的保守說法。
9. Service FAQ：顯示與該服務相關的 3–5 題。
10. Final CTA：開始該服務申請，並保留先詢問老師的次要入口。

### Conditional Section Rule
- Template 一致，但區塊可依服務 `Show`、`Hide` 或 `Change Copy`。
- 不為了版型一致，把不適用的到場、交付或專業資料區塊硬塞進所有服務頁。

## 服務呈現原則

- 各服務名稱需穩定一致，不同頁面不可混用說法。
- 首頁維持六項主要分類；婚嫁細項只在 Service Detail 與 Booking Form 出現。
- 各服務介紹應包含適用情境、所需資料、交付內容與價格說明；尚未確認處標示待確認。
- 所有服務的專業判斷與是否承接，皆由老師人工確認。
- 首次申請只要求基本聯絡與事件資訊；專業資料採漸進揭露與人工補問。
- 表單先收共同基本資料，再依服務類型顯示條件式專屬欄位；不要求使用者一次填完所有可能的專業資料。
- 入宅／搬遷、神明／祖先與宅事／到場諮詢優先顯示到場相關欄位；婚嫁、新生兒命狀與命名不預設需要到場。
- 日期欄位使用「希望辦理期間」或候選日期，不使用「選擇吉日」或自動推薦日期等說法。
- 對尚未確認的價格與時程，先保留待確認標記，不自行虛構。
- 服務完成時間統一以「依服務內容、資料完整度、到場需求與老師安排確認」說明，不自行承諾固定天數。
- 若服務之間可能存在組合方案，需另外在價格或 FAQ 文件中補充。

## 與其他 spec 的關聯

- `PRODUCT_SCOPE.md`：定義哪些服務屬於第一版範圍。
- `BOOKING_FLOW.md`：決定預約表單中的服務選項與收集資料節點。
- `PRICING_POLICY.md`：定義各服務價格如何揭露。
- `CONTENT_REQUIREMENTS.md`：延伸出文案、欄位與素材需求。
- `FAQ_SPEC.md`：延伸出服務差異與資料準備的常見問題。

## 待確認事項

- 各服務的正式價格區間；婚嫁目前僅有 Mock Reference Price。
- 各服務的標準處理時間。
- 是否提供加急處理。
- 是否提供組合方案或套裝服務。
- 各服務真正需要客人提供的資料，以及哪些服務一定需要老師到場。
- 神明／祖先服務的實際子類型與專業補問流程。
- 各服務實際交付物與完成時間。
- 宜蘭縣內、外縣市、接送與多地點的到場規則。
- 是否還有其他第一版要納入的服務項目。
