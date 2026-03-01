---
title: "Projects"
layout: default
permalink: /projects/
---

<div class="hero">
  <h1>Projects</h1>
  <p cl:contentReference[oaicite:9]{index=9}、數據、圖片、demo 連結。</p>
</div>

<div class="grid">
  {% for p in site.data.projects %}
    <a class="card" href="{{ p.url | relative_url }}">
      <img src="{{ p.cover | relative_url }}" alt="{{ p.title }}">
      <h3>{{ p.title }}</h3>
      <p>{{ p.subtitle }}</p>

      {% if p.metrics %}
      <div class="metrics">
        {% for m in p.metrics %}
          <div class="metric">
            <div class="k">{{ m.label }}</div>
            <div class="v">{{ m.value }}</div>
          </div>
        {% endfor %}
      </div>
      {% endif %}

      <div class="tags">
        {% for t in p.tags %}<span class="tag">{{ t }}</span>{% endfor %}
      </div>
    </a>
  {% endfor %}
</div>
