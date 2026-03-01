---
title: "Yang Zong-Yan | Portfolio"
layout: default
---

<di:contentReference[oaicite:7]{index=7}>楊宗諺（Yang Zong-Yan）</h1>
  <p>影像演算法 / 電腦視覺 / 邊緣 AI｜國立臺灣科技大學 電機碩士</p>

  <div class="badges">
    <span class="badge">C/C++</span>
    <span class="badge">Python</span>
    <span class="badge">OpenCV</span>
    <span class="badge">Edge AI</span>
    <span class="badge">Deep Video Compression</span>
  </div>

  <p class="muted" style="margin-top:14px">
    Email：as0903817384@gmail.com ｜ GitHub：gg09038 ｜ Pages：gg09038.github.io
  </p>
</div>

<div class="section-title">Featured Projects</div>
<div class="grid">
  {% assign featured = site.data.projects | slice: 0, 3 %}
  {% for p in featured %}
    <a class="card" href="{{ p.url | relative_url }}">
      <img src="{{ p.cover | relative_url }}" alt="{{ p.title }}">
      <h3>{{ p.title }}</h3>
      <p>{{ p.subtitle }}</p>
      <div class="tags">
        {% for t in p.tags %}<span class="tag">{{ t }}</span>{% endfor %}
      </div>
    </a>
  {% endfor %}
</div>

<div class="section-title">Highlights</div>
<div class="grid">
  <div class="card" style="grid-column: span 12;">
    <h3 style="margin-top:0">我在做什麼？</h3>
    <p class="muted">
      目前聚焦深度視訊壓縮（DVC）：拓展 RD 操作範圍、並抑制長序列誤差傳播。
      初步結果：Avg BD-Rate -49.95%、Avg BD-PSNR +3.122 dB。
    </p>
    <p class="muted">
      我也做工業視覺整合（CNC 鐵屑清潔監控）、Edge AI 多感測器疊合（RGB+Thermal+ToF）、以及本地 RAG 法律助手。
    </p>
  </div>
</div>

<div class="section-title">Next</div>
<p class="muted">
  👉 前往 <a href="{{ '/projects/' | relative_url }}">Projects</a> 看每個專案的數據、圖片、與 demo。
</p>
