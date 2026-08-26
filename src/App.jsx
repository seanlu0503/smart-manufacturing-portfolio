const projects = [
  {
    title: "工廠生產製程追蹤 Dashboard",
    subtitle: "看生產狀態",
    image: "/smart-manufacturing-portfolio/assets/factory-dashboard.png",
    demo: "https://seanlu0503.github.io/factory-portfolio-dashboard/",
    repo: "https://github.com/seanlu0503/factory-portfolio-dashboard",
    description:
      "模擬現場主管或生管人員查看今日生產數、完成工單、延遲工單、異常機台、平均良率、工單目前站點、機台稼動狀態與異常原因排行。",
    scenario: "班前或班中查看今日產線、工單與機台的執行狀態。",
    problem: "當進度落後、良率異常或機台停機時，管理者需要先快速判斷影響範圍。",
    actions: ["切換產線篩選", "查看工單進度", "比對機台稼動與良率", "辨識異常原因排行"],
    highlights: ["工單進度", "產線篩選", "機台稼動", "良率分析"],
    value: "呈現我能把生產現場資料整理成主管可快速判讀的儀表板。",
  },
  {
    title: "工廠異常回報與維修派工系統",
    subtitle: "處理現場問題",
    image: "/smart-manufacturing-portfolio/assets/incident-dispatch.png",
    demo: "https://seanlu0503.github.io/factory-incident-dispatch-system/",
    repo: "https://github.com/seanlu0503/factory-incident-dispatch-system",
    description:
      "模擬產線發生設備故障、品質異常、缺料、停線或安全風險時，建立異常回報、指派處理人員、追蹤 SLA、主管驗收並留下 RCA 與改善追蹤紀錄。",
    scenario: "產線發現異常後，建立案件並由主管安排處理與驗收。",
    problem: "現場問題若只靠口頭交接，容易不知道誰負責、處理到哪裡，以及是否真的完成改善。",
    actions: ["建立異常回報", "指派責任人員", "追蹤 SLA 與處理狀態", "完成驗收、RCA 與改善追蹤"],
    highlights: ["SLA 追蹤", "維修派工", "主管驗收", "改善追蹤"],
    value: "呈現我能把現場異常處理流程拆成可操作、可追蹤、可改善的系統流程。",
  },
];

const skills = [
  {
    label: "製造流程理解",
    text: "把工單、產線、機台、良率、異常、停機與派工流程整理成資訊系統畫面。",
  },
  {
    label: "資料視覺化",
    text: "用 KPI、看板、表格、進度條與排行圖表協助使用者快速掌握現場狀態。",
  },
  {
    label: "前端實作",
    text: "使用 React、Vite、JavaScript 與 CSS 完成可操作、可部署的互動作品。",
  },
  {
    label: "AI 協作開發",
    text: "以 Gemini 構思情境，Codex 實作原型，Claude 輔助整理作品與履歷文案。",
  },
];

const process = [
  { system: "生產追蹤 Dashboard", label: "掌握產線狀態", detail: "工單、良率、機台與進度" },
  { system: "生產追蹤 Dashboard", label: "發現異常訊號", detail: "延遲、停機或品質偏差" },
  { system: "異常回報系統", label: "建立異常案件", detail: "記錄影響範圍與嚴重程度" },
  { system: "異常回報系統", label: "派工與處理", detail: "SLA、責任人員與處理紀錄" },
  { system: "異常回報系統", label: "驗收與結案", detail: "RCA、預防再發與主管確認" },
  { system: "異常回報系統", label: "改善追蹤", detail: "確認措施是否真正落地" },
];

const designDecisions = [
  {
    title: "先看見狀態，再處理問題",
    text: "我把作品拆成生產追蹤與異常處理兩個主題，因為工廠現場不只需要知道今天做了多少，也需要知道異常發生後誰負責、處理到哪裡、後續是否改善。",
  },
  {
    title: "用流程欄位取代單純展示畫面",
    text: "第二個作品刻意加入 SLA、主管驗收、RCA 與改善追蹤，讓異常單不是停在回報，而是能呈現從發現問題到結案改善的管理流程。",
  },
  {
    title: "資料皆使用模擬情境",
    text: "作品中的工單、機台、人員與異常內容都是模擬資料，目的是展示流程設計與前端實作能力，不涉及任何公司內部資料或個資。",
  },
];

const aiBoundaries = [
  "AI 協助我構思製造業情境、整理欄位與產生初版介面方向。",
  "我負責判斷作品主題、流程切分、欄位取捨、求職定位與公開安全檢查。",
  "每次部署前都確認沒有 API key、token、密碼、真實公司資料或個資。",
  "我把 AI 當成協作工具，而不是取代我理解問題與整理系統邏輯的能力。",
];

const futurePlans = [
  {
    label: "資料保存",
    text: "串接資料庫，保存工單、異常單、維修紀錄與改善追蹤狀態。",
  },
  {
    label: "角色權限",
    text: "加入現場人員、主管、維修、品管等角色，限制不同操作權限。",
  },
  {
    label: "報表匯出",
    text: "支援 Excel / CSV 匯出，產生日報、異常月報與改善追蹤表。",
  },
  {
    label: "系統整合",
    text: "未來可延伸串接 MES / ERP 資料來源，讓 Demo 變成內部工具原型。",
  },
];

const securityNotes = [
  "本作品集為純前端靜態展示，使用 GitHub Pages 免費部署。",
  "無後端、無資料庫、無登入系統，也沒有串接任何付費 API。",
  "所有工單、機台、人員與異常內容皆為模擬資料。",
  "公開 repo 不包含 API key、token、密碼、公司資料、客戶資料或個資。",
];

function AppLink({ href, children, variant = "primary" }) {
  const isInternal = href.startsWith("#");
  return (
    <a
      className={`app-link ${variant}`}
      href={href}
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noreferrer"}
    >
      {children}
    </a>
  );
}

export function App() {
  return (
    <main className="site-shell">
      <header className="topbar">
          <a href="#top" className="brand">
          <span>SM</span>
          智慧製造作品集
        </a>
        <nav aria-label="作品集導覽">
          <a href="#projects">作品</a>
          <a href="#connection">串聯流程</a>
          <a href="#decisions">設計</a>
          <a href="#skills">能力</a>
          <a href="#workflow">流程</a>
          <a href="#security">安全</a>
          <a href="#future">延伸</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">資管系夜間部學生｜AI 協作開發｜製程數位化方向</p>
          <h1>
            <span>把工廠現場流程</span>
            <span>整理成可操作的</span>
            <span>資訊系統作品</span>
          </h1>
          <p>
            我目前的作品方向聚焦在工廠生產製程、智慧製造、MES/ERP 系統概念、資料整理與流程改善。這組作品聚焦在製造現場最常見的兩件事：掌握生產狀態，以及處理現場異常。
          </p>
          <div className="hero-actions">
            <AppLink href="#projects">查看作品</AppLink>
            <AppLink href="https://github.com/seanlu0503" variant="secondary">
              GitHub
            </AppLink>
          </div>
        </div>
        <aside className="hero-panel" aria-label="作品集摘要">
          <div>
            <span>2</span>
            <strong>公開 Demo</strong>
            <small>生產追蹤與異常處理</small>
          </div>
          <div>
            <span>React</span>
            <strong>前端實作</strong>
            <small>Vite / JavaScript / CSS</small>
          </div>
          <div>
            <span>AI</span>
            <strong>協作開發</strong>
            <small>需求拆解、原型實作、文案整理</small>
          </div>
          <div>
            <span>Flow</span>
            <strong>流程整理</strong>
            <small>SLA / RCA / 改善追蹤</small>
          </div>
        </aside>
      </section>

      <section className="connection-section" id="connection" aria-label="兩個作品的串聯流程">
        <div className="connection-heading">
          <p className="eyebrow">System Connection</p>
          <h2>從生產異常到改善追蹤</h2>
          <p>
            生產追蹤 Dashboard 用來發現需要注意的現場訊號；異常回報與維修派工系統則承接後續的回報、處理、驗收與改善。兩個作品合起來，呈現一條完整的問題處理路徑。
          </p>
        </div>
        <div className="process-band" id="workflow">
          {process.map((item, index) => (
          <article key={item.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <small>{item.system}</small>
            <strong>{item.label}</strong>
            <p>{item.detail}</p>
          </article>
          ))}
        </div>
      </section>

      <section className="section-heading" id="projects">
        <p className="eyebrow">Portfolio Projects</p>
        <h2>兩個作品串起一條製造現場流程</h2>
        <p>
          第一個作品負責「看見狀態」，第二個作品負責「處理問題」。放在一起能呈現我對工廠流程、資料整理與前端介面設計的理解。
        </p>
      </section>

      <section className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={`${project.title} 截圖`} />
            </div>
            <div className="project-content">
              <p className="project-subtitle">{project.subtitle}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-value">{project.value}</p>
              <dl className="project-context">
                <div>
                  <dt>模擬情境</dt>
                  <dd>{project.scenario}</dd>
                </div>
                <div>
                  <dt>解決問題</dt>
                  <dd>{project.problem}</dd>
                </div>
              </dl>
              <div className="tags" aria-label={`${project.title} 功能亮點`}>
                {project.highlights.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="interview-points" aria-label={`${project.title} 可操作重點`}>
                <strong>可操作重點</strong>
                <ul>
                  {project.actions.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="card-actions">
                <AppLink href={project.demo}>前往 Demo</AppLink>
                <AppLink href={project.repo} variant="secondary">
                  GitHub Repo
                </AppLink>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section-heading" id="decisions">
        <p className="eyebrow">Design Rationale</p>
        <h2>我在作品中的設計判斷</h2>
        <p>
          我希望面試官看到的不只是畫面完成度，也能看到我如何理解問題、拆解流程，並把製造現場情境轉成資訊系統可以承接的欄位與狀態。
        </p>
      </section>

      <section className="decision-grid">
        {designDecisions.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section-heading" id="skills">
        <p className="eyebrow">What I Want To Show</p>
        <h2>履歷中想強調的能力</h2>
      </section>

      <section className="skill-grid">
        {skills.map((skill) => (
          <article key={skill.label}>
            <h3>{skill.label}</h3>
            <p>{skill.text}</p>
          </article>
        ))}
      </section>

      <section className="ai-section">
        <div>
          <p className="eyebrow">AI Collaboration</p>
          <h2>我的 AI 協作方式</h2>
          <p>
            我使用 AI 不是只拿來產生畫面，而是把它放進完整工作流程：先拆解製造業情境，再規劃資料欄位與使用者流程，接著實作互動原型，最後整理成能放進求職網站的作品說明。
          </p>
          <div className="boundary-box">
            <strong>AI 協作邊界</strong>
            <ul>
              {aiBoundaries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <ol>
          <li>
            <strong>Gemini</strong>
            <span>構思製造業情境與流程欄位</span>
          </li>
          <li>
            <strong>Codex</strong>
            <span>協助前端實作、互動邏輯與部署</span>
          </li>
          <li>
            <strong>Claude</strong>
            <span>輔助調整作品說明與求職文案</span>
          </li>
        </ol>
      </section>

      <section className="section-heading" id="future">
        <p className="eyebrow">Future Extension</p>
        <h2>如果延伸成公司內部工具</h2>
        <p>
          目前作品以純前端 Demo 呈現，方便公開展示且沒有資安風險。若進一步落地到真實工作場景，可以往資料保存、權限控管、報表匯出與系統整合擴充。
        </p>
      </section>

      <section className="future-grid">
        {futurePlans.map((plan) => (
          <article key={plan.label}>
            <span>{plan.label}</span>
            <p>{plan.text}</p>
          </article>
        ))}
      </section>

      <section className="security-section" id="security">
        <div>
          <p className="eyebrow">Public Safety</p>
          <h2>公開作品安全聲明</h2>
          <p>
            因為作品會放在公開求職網站與 GitHub Pages，我刻意把它設計成安全的靜態展示專案，避免公開任何金鑰、真實資料或內部資訊。
          </p>
        </div>
        <ul>
          {securityNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <strong>呂向恩｜智慧製造方向作品集</strong>
        <span>React / Vite / JavaScript / GitHub Pages / AI 協作開發</span>
      </footer>
    </main>
  );
}
