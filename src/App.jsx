const projects = [
  {
    title: "工廠生產排程與產能模擬系統",
    subtitle: "事前安排產能",
    demo: "https://seanlu0503.github.io/factory-production-scheduling-system/",
    repo: "https://github.com/seanlu0503/factory-production-scheduling-system",
    specification: "https://github.com/seanlu0503/factory-production-scheduling-system/blob/main/PROJECT-SPEC.md",
    preview: "schedule",
    description:
      "模擬生管人員安排工單、檢查機台每日尖峰負載與交期風險，並在設備停機時調整替代機台的排程決策。",
    scenario: "安排週排程時，確認急件、交期、機台產能與替代安排。",
    problem: "設備停機或產能超載時，生管需要快速判斷哪些工單受影響，以及哪一台機台能承接。",
    actions: ["查看機台週排程", "調整工單日期與機台", "模擬 PRESS-04 停機", "匯出目前排程 CSV"],
    highlights: ["週排程", "產能負載", "停機模擬", "替代安排"],
    value: "呈現我能把工單、交期與有限產能整理成可操作的排程決策工具。",
  },
  {
    title: "工廠生產製程追蹤 Dashboard",
    subtitle: "看生產狀態",
    image: "/smart-manufacturing-portfolio/assets/factory-dashboard.png",
    demo: "https://seanlu0503.github.io/factory-portfolio-dashboard/",
    repo: "https://github.com/seanlu0503/factory-portfolio-dashboard",
    specification: "https://github.com/seanlu0503/factory-portfolio-dashboard/blob/main/PROJECT-SPEC.md",
    description:
      "模擬現場主管或生管人員查看今日生產數、完成工單、延遲工單、異常機台、平均良率、工單目前站點、機台稼動狀態與異常原因排行。",
    scenario: "班前或班中查看今日產線、工單與機台的執行狀態。",
    problem: "當進度落後、良率異常或機台停機時，管理者需要先快速判斷影響範圍。",
    actions: ["切換產線篩選", "查看工單進度", "比對機台稼動與良率", "匯出目前工單 CSV"],
    highlights: ["工單進度", "產線篩選", "機台稼動", "良率分析"],
    value: "呈現我能把生產現場資料整理成主管可快速判讀的儀表板。",
  },
  {
    title: "工廠異常回報與維修派工系統",
    subtitle: "處理現場問題",
    image: "/smart-manufacturing-portfolio/assets/incident-dispatch.png",
    demo: "https://seanlu0503.github.io/factory-incident-dispatch-system/",
    repo: "https://github.com/seanlu0503/factory-incident-dispatch-system",
    specification: "https://github.com/seanlu0503/factory-incident-dispatch-system/blob/main/PROJECT-SPEC.md",
    description:
      "模擬產線發生設備故障、品質異常、缺料、停線或安全風險時，建立異常回報、指派處理人員、追蹤 SLA、主管驗收並留下 RCA 與改善追蹤紀錄。",
    scenario: "產線發現異常後，建立案件並由主管安排處理與驗收。",
    problem: "現場問題若只靠口頭交接，容易不知道誰負責、處理到哪裡，以及是否真的完成改善。",
    actions: ["建立異常回報", "指派責任人員", "追蹤 SLA 與處理狀態", "匯出異常追蹤 CSV"],
    highlights: ["SLA 追蹤", "維修派工", "主管驗收", "改善追蹤"],
    value: "呈現我能把現場異常處理流程拆成可操作、可追蹤、可改善的系統流程。",
  },
];

const caseJourney = [
  {
    step: "01",
    system: "生產排程",
    title: "辨識產能風險",
    detail: "PRESS-04 停機 76 分鐘，急件 MO-260711-026 需調整。",
    href: "https://seanlu0503.github.io/factory-production-scheduling-system/?case=press-04",
  },
  {
    step: "02",
    system: "製程追蹤",
    title: "確認現場影響",
    detail: "Dashboard 聚焦同一張工單、停機機台與交期風險。",
    href: "https://seanlu0503.github.io/factory-portfolio-dashboard/?orderId=MO-260711-026#alerts",
  },
  {
    step: "03",
    system: "異常派工",
    title: "派工、驗收與改善",
    detail: "維修處置、RCA、主管驗收與兩週改善追蹤都有紀錄。",
    href: "https://seanlu0503.github.io/factory-incident-dispatch-system/?source=production-dashboard&incidentId=INC-260711-003#review",
  },
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
          <a href="#case-study">案例</a>
          <a href="#projects">作品</a>
          <a href="#decisions">設計</a>
          <a href="#about">關於</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">資管系夜間部學生｜製程數位化方向</p>
          <h1>
            <span>把工廠現場流程</span>
            <span>整理成可操作的</span>
            <span>資訊系統作品</span>
          </h1>
          <p>
            我目前的作品方向聚焦在工廠生產製程、智慧製造、MES/ERP 系統概念、資料整理與流程改善。這組作品聚焦在製造現場最常見的兩件事：掌握生產狀態，以及處理現場異常。
          </p>
          <div className="hero-actions">
            <AppLink href="#case-study">開始完整案例</AppLink>
            <AppLink href="https://github.com/seanlu0503" variant="secondary">
              GitHub
            </AppLink>
          </div>
        </div>
        <aside className="hero-panel" aria-label="作品集摘要">
          <div>
            <span>3</span>
            <strong>公開 Demo</strong>
            <small>排程、追蹤與異常處理</small>
          </div>
          <div>
            <span>React</span>
            <strong>前端實作</strong>
            <small>Vite / JavaScript / CSS</small>
          </div>
          <div>
            <span>1</span>
            <strong>共用案例</strong>
            <small>從風險到改善結案</small>
          </div>
          <div>
            <span>Flow</span>
            <strong>流程整理</strong>
            <small>SLA / RCA / 改善追蹤</small>
          </div>
        </aside>
      </section>

      <section className="case-study" id="case-study" aria-label="PRESS-04 完整案例">
        <div className="case-study-heading">
          <p className="eyebrow">One Connected Case</p>
          <h2>同一張工單，走完一次製造現場的處理流程</h2>
          <p>
            這不是三個沒有關係的 Demo。案例從 PRESS-04 油壓異常開始，影響急件工單 MO-260711-026；接著由生管調整替代產能，再由主管追蹤維修與改善成效。
          </p>
        </div>
        <div className="case-study-metrics" aria-label="案例結果">
          <div><span>共用工單</span><strong>MO-260711-026</strong></div>
          <div><span>異常機台</span><strong>PRESS-04</strong></div>
          <div><span>模擬停機</span><strong>76 分鐘</strong></div>
          <div><span>改善後追蹤</span><strong>24 分鐘</strong></div>
        </div>
        <div className="case-journey">
          {caseJourney.map((item, index) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <small>{item.system}</small>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <AppLink href={item.href} variant={index === 0 ? "primary" : "secondary"}>
                開啟此步驟
              </AppLink>
            </article>
          ))}
        </div>
      </section>

      <section className="section-heading" id="projects">
        <p className="eyebrow">Portfolio Projects</p>
        <h2>三個作品串起一條製造現場流程</h2>
        <p>
          第一個作品負責「事前安排」，第二個作品負責「看見狀態」，第三個作品負責「處理問題」。放在一起能呈現我對工廠流程、資料整理與前端介面設計的理解。
        </p>
      </section>

      <section className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              {project.preview === "schedule" ? (
                <div className="schedule-preview" aria-label={`${project.title} 預覽`}>
                  <div className="schedule-preview-head"><span>Weekly Planning</span><b>76%</b></div>
                  <div className="schedule-preview-kpis"><i>8</i><i>3</i><i>1</i></div>
                  <div className="schedule-preview-grid"><span>CNC-03</span><b /><b className="warm" /><span>PRESS-04</span><b className="risk" /><b /></div>
                </div>
              ) : (
                <img src={project.image} alt={`${project.title} 截圖`} />
              )}
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
                <AppLink href={project.specification} variant="secondary">
                  專案規格
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

      <section className="portfolio-note" id="about" aria-label="作品說明">
        <p>
          使用 Gemini、Codex 與 Claude 協作完成需求拆解、前端實作與文案整理；我負責流程判斷、欄位取捨與公開安全檢查。全站為純前端模擬作品，未使用真實公司資料、帳號系統或外部 API。
        </p>
      </section>

      <footer className="footer">
        <strong>呂向恩｜智慧製造方向作品集</strong>
        <span>React / Vite / JavaScript / GitHub Pages / AI 協作開發</span>
      </footer>
    </main>
  );
}
