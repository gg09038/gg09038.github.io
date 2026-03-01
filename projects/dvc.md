---
title: "碩士論文｜Deep Video Compression"
layout: project
permalink: /projects/dvc/
subtitle: "RD Range Expansion + Quality/Feature Modulation（抑制長序列誤差傳播）"
hero: /assets/img/project-dvc.svg
tags: ["DVC", "RD Optimization", "Quality Modulation", "Error Propagation"]
metrics:
  - label: "Avg BD-Rate"
    value: "-49.95%"
  - label: "Avg BD-PSNR"
    value: "+3.122 dB"
  - label: "Test sets"
    value: "HEVC B/C/D/E + UVG"
---

## Overview
我在做「單一模型可涵蓋更寬 RD 操作範圍」的深度視訊壓縮，並針對長序列時誤差累積/擴散做抑制。

## What I did
- Quality/Feature Modulation
- RD Range Expansion
- 長序列誤差傳播抑制（長鏈參考 / 分層約束）

## Result (initial)
- Avg BD-Rate **-49.95%**
- Avg BD-PSNR **+3.122 dB**

## Figures
> 把圖放到 `assets/img/bdrate.png`

![](/assets/img/bdrate.png)

## Next
- 補上：模型架構圖、Ablation、RD 曲線、推論速度/complexity
