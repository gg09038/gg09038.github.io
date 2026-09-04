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
      專注於 <strong>深度學習、電腦視覺與嵌入式系統</strong>。
      研究與開發經歷涵蓋深度視訊壓縮、RGB/IR 多模態影像融合、
      Edge AI 部署與 RTOS 核心層實作。
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

<section class="section-block">
  <div class="section-heading">
    <div>
      <div class="section-kicker">HIGHLIGHTS</div>
      <h2>關鍵成果</h2>
    </div>
  </div>

  <div class="skill-grid">
    <div class="skill-card">
      <h3>Deep Video Compression</h3>
      <p><strong>-44.91% BD-rate</strong> · P-frame vs. H.265 reference，並擴展單一模型多碼率操作範圍。</p>
    </div>

    <div class="skill-card">
      <h3>Embedded AI Deployment</h3>
      <p>完成 <strong>RGB / Thermal / ToF</strong> 多模態影像融合，並部署於 <strong>KL730</strong> Edge AI 平台。</p>
    </div>

    <div class="skill-card">
      <h3>IEEE CACS 2024</h3>
      <p>以 CNC 工具機鐵屑清潔監控系統成果發表 <strong>IEEE conference paper</strong>。</p>
    </div>

    <div class="skill-card">
      <h3>Academic Excellence</h3>
      <p><strong>Graduate coursework GPA 3.96 / 4.3</strong> · Feng Chia University Academic Excellence Award。</p>
    </div>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <div>
      <div class="section-kicker">EXPERIENCE</div>
      <h2>產學合作經歷</h2>
    </div>
  </div>

  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-dot"></div>

      <div class="timeline-date">2025.01 — 2026.01</div>

      <div class="timeline-content">
        <h3>RGB / Thermal / ToF Edge AI System</h3>

        <p>
          <strong>National Taiwan University of Science and Technology × 全科科技</strong>
          · Industry Collaboration
        </p>

        <p>
          參與「多功能熱影像重疊智慧傳輸模組」系統整合開發，
          負責 RGB / Thermal 影像校正與疊合、ToF 距離資訊整合、
          KL730 Edge AI 平台部署與跨模組除錯。
        </p>

        <p>
          將 PC 端影像處理原型移植至 KL730 嵌入式 C++ 環境，
          並整合即時顯示、AI 物件辨識、外部控制介面與系統測試。
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <div><div class="section-kicker">EDUCATION</div><h2>學歷與研究方向</h2></div>
  </div>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">2024 — 2026</div>
      <div class="timeline-content">
        <h3>National Taiwan University of Science and Technology</h3>
        <p><strong>M.S. Electrical Engineering</strong></p>
        <p>Deep Video Compression / Computer Vision / Embedded Systems</p>
        <p><strong>Graduate coursework GPA: 3.96 / 4.3</strong></p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">2020 — 2024</div>
      <div class="timeline-content">
        <h3>Feng Chia University</h3>
        <p><strong>B.S. Automatic Control Engineering</strong></p>
        <p><strong>GPA: 3.60 / 4.3 · Top 20% · Academic Excellence Award</strong></p>
      </div>
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
      <p>
        <strong>Tsung-Yen Yang</strong>, Fu-Yu Chiang, Yan-Hong Chen, Guan-Jie Lee,
        Yu-Sheng Lin, Shang-Chih Lin, Shun-Feng Su, and Yennun Huang
      </p>
      <p><strong>2024 International Automatic Control Conference (CACS)</strong> · 2024 · pp. 1–6 · IEEE</p>
      <p>DOI: 10.1109/CACS63404.2024.10773234</p>
    </div>
    <div class="pub-arrow">↗</div>
  </a>
</section>

<section id="skills" class="section-block">
  <div class="section-heading">
    <div>
      <div class="section-kicker">TECHNICAL STACK</div>
      <h2>技術能力</h2>
    </div>
  </div>

  <div class="tech-stack">
    <div class="tech-row">
      <strong>AI / Video</strong>
      <span>PyTorch · Deep Video Compression · Entropy Modeling · Rate-Distortion Optimization</span>
    </div>

    <div class="tech-row">
      <strong>Computer Vision</strong>
      <span>OpenCV · RGB/IR Fusion · Homography · ToF · Object Detection</span>
    </div>

    <div class="tech-row">
      <strong>Embedded / System</strong>
      <span>C/C++ · μC/OS-II · RTOS · Arduino · Serial Communication · Edge AI</span>
    </div>

    <div class="tech-row">
      <strong>Development</strong>
      <span>Python · Git · Linux</span>
    </div>
  </div>
</section>
