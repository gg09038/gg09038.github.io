---
title: "楊宗諺 Tsung-Yen Yang | Portfolio"
layout: default
---

<section class="hero-modern hero-integrated">
  <div class="hero-copy">
    <div class="eyebrow">M.S. in Electrical Engineering · NTUST</div>

    <h1>
      楊宗諺
      <span>Tsung-Yen Yang</span>
    </h1>

    <p class="hero-lead">
      專注於 <strong>深度學習、電腦視覺與嵌入式系統</strong>。研究經歷涵蓋深度視訊壓縮、
      RGB/IR 多模態影像融合、Edge AI 部署與即時作業系統核心層實作。
    </p>

    <div class="hero-actions">
      <a class="btn primary" href="{{ '/projects/' | relative_url }}">
        查看專案
      </a>

      <a class="btn" href="mailto:as0903817384@gmail.com">
        聯絡我
      </a>

      <a
        class="btn ghost"
        href="https://github.com/gg09038"
        target="_blank"
        rel="noopener"
      >
        GitHub ↗
      </a>
    </div>

    <div class="hero-chips">
      <span>Algorithm</span>
      <span>Computer Vision</span>
      <span>Embedded AI</span>
      <span>RTOS</span>
    </div>
  </div>

  <div class="hero-photo-panel">
    <img
      class="hero-photo"
      src="{{ '/assets/img/profile/profile.webp' | relative_url }}"
      alt="楊宗諺 Tsung-Yen Yang"
      loading="eager"
    >
  </div>
</section>

<style>
  /*
   * Hero 區塊改為同一張卡片中的左右雙欄：
   * 左側 = 個人資訊
   * 右側 = 個人照片
   */
  .hero-modern.hero-integrated {
    display: grid;
    grid-template-columns: minmax(0, 1.65fr) minmax(300px, 0.85fr);
    align-items: stretch;
    gap: 0;

    width: 100%;
    overflow: hidden;
  }

  .hero-integrated .hero-copy {
    min-width: 0;
    padding-right: clamp(28px, 4vw, 64px);
  }

  .hero-integrated .hero-photo-panel {
    position: relative;
    min-width: 0;
    align-self: stretch;
    overflow: hidden;

    /*
     * 圖片屬於 hero-modern 本體，因此會和文字共用
     * 同一個外層圓角 / 邊框 / 陰影。
     */
    border-radius: 0;
    background: #eef4fb;
  }

  .hero-integrated .hero-photo {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center 35%;
  }

  /*
   * 如果原本 hero-modern 的 padding 會讓右側照片無法貼齊外框，
   * 只取消右側外層 padding；文字區自己的 padding 仍由 hero-copy 保留。
   */
  .hero-modern.hero-integrated {
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .hero-integrated .hero-copy {
    padding-top: clamp(42px, 5vw, 72px);
    padding-bottom: clamp(42px, 5vw, 64px);
  }

  /*
   * 平板 / 手機：改成上下排列，避免窄螢幕硬塞雙欄。
   */
  @media (max-width: 900px) {
    .hero-modern.hero-integrated {
      grid-template-columns: 1fr;
      padding-left: 0;
    }

    .hero-integrated .hero-copy {
      padding-left: clamp(24px, 6vw, 48px);
      padding-right: clamp(24px, 6vw, 48px);
    }

    .hero-integrated .hero-photo-panel {
      min-height: 360px;
    }

    .hero-integrated .hero-photo {
      height: 360px;
      object-position: center 30%;
    }
  }
</style>

<section id="about" class="section-block two-col">
  <div>
    <div class="section-kicker">ABOUT</div>
    <h2>從演算法到系統部署</h2>
  </div>
  <div class="about-copy">
    <p>
      我畢業於國立臺灣科技大學電機工程研究所。
      大學期間從自動控制與嵌入式系統出發，逐步接觸電腦視覺與影像處理；研究所則進一步投入深度學習式視訊壓縮研究。
    </p>
    <p>
      習慣從整體系統角度理解問題。無論是模型訓練異常、跨模態影像錯位，或 RTOS 排程行為，
      都會先拆解資料流與模組介面，再透過中間結果與對照實驗逐步定位原因。
      團隊專案與產學合作也讓我學習到：完成自己的模組之外，更需要理解其他子系統的限制並共同整合。
    </p>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <div><div class="section-kicker">EDUCATION</div><h2>學歷與研究方向</h2></div>
  </div>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">2024.09 — 2026.09</div>
      <div class="timeline-content">
        <h3>國立臺灣科技大學 · 電機工程系碩士班</h3>
        <p>深度視訊壓縮、深度學習、影像處理、嵌入式作業系統實作。</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">2020.09 — 2024.06</div>
      <div class="timeline-content">
        <h3>逢甲大學 · 自動控制工程學系</h3>
        <p>自動控制、電腦視覺、嵌入式控制與系統整合；專題完成 IEEE 論文發表。</p>
      </div>
    </div>
  </div>
</section>

<section id="skills" class="section-block">
  <div class="section-heading">
    <div><div class="section-kicker">SKILLS</div><h2>核心能力</h2></div>
  </div>
  <div class="skill-grid">
    <div class="skill-card">
      <h3>AI / Model</h3>
      <p>PyTorch · Deep Learning · Deep Video Compression · Entropy Modeling · Rate-Distortion Optimization</p>
    </div>
    <div class="skill-card">
      <h3>Computer Vision</h3>
      <p>OpenCV · Image Processing · RGB/IR Fusion · Homography · ToF · Object Detection</p>
    </div>
    <div class="skill-card">
      <h3>Embedded / System</h3>
      <p>C/C++ · μC/OS-II · RTOS Scheduler · Arduino · Serial Communication · Edge AI</p>
    </div>
    <div class="skill-card">
      <h3>Engineering Workflow</h3>
      <p>Python · Git · Linux · Experiment Design · Systematic Debugging · Data-driven Validation</p>
    </div>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <div><div class="section-kicker">FEATURED WORK</div><h2>精選專案</h2></div>
    <a class="text-link" href="{{ '/projects/' | relative_url }}">查看全部專案 →</a>
  </div>
  <div class="project-grid">
    {% assign featured_ids = "dvc,kl730,rtos,cnc" | split: "," %}
    {% for id in featured_ids %}
      {% assign p = site.data.projects | where: "id", id | first %}
      <a class="project-card" href="{{ p.url | relative_url }}">
        <div class="project-media"><img src="{{ p.cover | relative_url }}" alt="{{ p.title }}"></div>
        <div class="project-card-body">
          <div class="project-meta-line"><span class="project-category">{{ p.category }}</span><span class="project-period">{{ p.period }}</span></div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.subtitle }}</p>
          <div class="tags compact">
            {% for t in p.tags limit:4 %}<span class="tag">{{ t }}</span>{% endfor %}
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
</section>

<section id="publication" class="section-block">
  <div class="section-heading">
    <div><div class="section-kicker">PUBLICATION</div><h2>研究成果</h2></div>
  </div>
  <a class="publication-card" href="https://ieeexplore.ieee.org/document/10773234" target="_blank" rel="noopener">
    <div class="pub-index">01</div>
    <div class="pub-content">
      <h3>A Monitoring and Control System Based on Image Recognition for Iron Filings Cleaning of CNC Machine Tools</h3>
      <p>大學專題延伸成果 · IEEE Xplore</p>
    </div>
    <div class="pub-arrow">↗</div>
  </a>
</section>

<section class="section-block contact-block">
  <div>
    <div class="section-kicker">CONTACT</div>
    <h2>對演算法、電腦視覺與嵌入式軟體職缺有興趣</h2>
    <p>希望將研究階段累積的模型開發、問題分析與系統整合能力，投入實際產品與工程開發。</p>
  </div>
  <div class="contact-actions">
    <a class="btn primary" href="mailto:as0903817384@gmail.com">Email</a>
    <a class="btn" href="https://github.com/gg09038" target="_blank" rel="noopener">GitHub ↗</a>
  </div>
</section>
