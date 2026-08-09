---
title: "Projects | Tsung-Yen Yang"
layout: default
permalink: /projects/
---

<section class="page-intro">
  <div class="eyebrow">PROJECT ARCHIVE</div>
  <h1>Projects</h1>
  <p>從深度學習研究、電腦視覺、Embedded AI 到 RTOS 與軟體應用，整理各專案的問題、方法、實作與成果。</p>
</section>

<div class="project-grid all-projects">
  {% for p in site.data.projects %}
    <a class="project-card" href="{{ p.url | relative_url }}">
      <div class="project-media"><img src="{{ p.cover | relative_url }}" alt="{{ p.title }}"></div>
      <div class="project-card-body">
        <div class="project-meta-line"><span class="project-category">{{ p.category }}</span><span class="project-period">{{ p.period }}</span></div>
        <h3>{{ p.title }}</h3>
        <p>{{ p.subtitle }}</p>
        {% if p.metrics %}
        <div class="mini-metrics">
          {% for m in p.metrics limit:2 %}
            <div><span>{{ m.label }}</span><strong>{{ m.value }}</strong></div>
          {% endfor %}
        </div>
        {% endif %}
        <div class="tags compact">
          {% for t in p.tags %}<span class="tag">{{ t }}</span>{% endfor %}
        </div>
      </div>
    </a>
  {% endfor %}
</div>
