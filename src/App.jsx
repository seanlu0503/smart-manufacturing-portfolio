const projects = [
  {
    title: "工廠生產製程追蹤 Dashboard",
    subtitle: "看生產狀態",
    image: "/smart-manufacturing-portfolio/assets/factory-dashboard.png",
    demo: "https://seanlu0503.github.io/factory-portfolio-dashboard/",
    repo: "https://github.com/seanlu0503/factory-portfolio-dashboard",
    description:
      "模擬現場主管或生管人員查看今日生產數、完成工單、延遲工單、異常機台、平均良率、工單目前站點、機台稼動狀態與異常原因排行。",
    highlights: ["工單進度", "產線篩選", "機台稼動", "良率分析"],
  },
  {
    title: "工廠異常回報與維修派工系統",
    subtitle: "處理現場問題",
    image: "/smart-manufacturing-portfolio/assets/incident-dispatch.png",
    demo: "https://seanlu0503.github.io/factory-incident-dispatch-system/",
    repo: "https://github.com/seanlu0503/factory-incident-dispatch-system",
    description:
      "模擬產線發生設備故障、品質異常、缺料、停線或安全風險時，建立異常回報、指派處理人員、追蹤處理狀態並留下 RCA 改善紀錄。",
    highlights: ["異常通報", "維修派工", "處理歷程", "RCA 改善"],
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
  "生產追蹤",
  "異常回報",
  "主管確認",
  "維修派工",
  "處理紀錄",
  "改善分析",
];

function AppLink({ href, children, variant = "primary" }) {
  return (
    <a className={`app-link ${variant}`} href={href} target="_blank" rel="noreferrer">
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
          <a href="#skills">能力</a>
          <a href="#workflow">流程</a>
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
            我目前希望往工廠生產製程、智慧製造、MES/ERP 系統助理、資料整理與流程改善相關職缺發展。這組作品聚焦在製造現場最常見的兩件事：掌握生產狀態，以及處理現場異常。
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
            <small>GitHub Pages 部署</small>
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
        </aside>
      </section>

      <section className="process-band" id="workflow" aria-label="製造現場流程">
        {process.map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </div>
        ))}
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
              <div className="tags" aria-label={`${project.title} 功能亮點`}>
                {project.highlights.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
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

      <footer className="footer">
        <strong>呂向恩｜智慧製造方向作品集</strong>
        <span>React / Vite / JavaScript / GitHub Pages / AI 協作開發</span>
      </footer>
    </main>
  );
}
