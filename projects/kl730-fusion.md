---
title: "KL730 邊緣裝置：RGB + Thermal 疊合對齊"
layout: project
permalink: /projects/kl730-fusion/
subtitle: "Homography / Perspective Transform，並用 ToF 距離提升穩定性"
hero: /assets/img/project-kl730.svg
tags: ["Edge AI", "Thermal-RGB Fusion", "Homography", "Calibration"]
metrics:
  - label: "Device"
    value: "KL730"
  - label: "Sensors"
    value: "RGB + Thermal + ToF"
  - label: "Control"
    value: "Local buttons + Web"
---

## Overview
在 KL730 上完成多源影像輸入、疊合顯示與操作流程（含距離輔助對齊）。

## What I did
- Homography / Perspective Transform 幾何對齊
- 依距離選擇對齊參數提升穩定性
- 網頁遠端控制（操作/拍照/顏色/透明度）
