---
layout: project
title: "多模態 RGB/IR 即時影像融合系統"
kicker: "Industry Collaboration · 全科科技"
subtitle: "Depth-indexed Homography for RGB/Thermal alignment with ToF sensing and KL730 deployment"
hero: "/assets/img/projects/kl730/cat.png"
tags: ["Computer Vision", "RGB/IR Fusion", "Homography", "ToF", "KL730", "C++"]
metrics:
  - label: "Platform"
    value: "KL730"
  - label: "Input"
    value: "RGB + Thermal + ToF"
  - label: "Output"
    value: "Real-time fused view"
permalink: /projects/kl730-fusion/
---

# 多模態 RGB/IR 即時影像融合系統

> **一句話摘要**：在未知相機內外參條件下，以 ToF 距離作為索引動態選擇 Homography，實現多景深 RGB/熱像即時對位，並部署於 KL730 邊緣裝置。

**合作單位：** 國立臺灣科技大學 × 全科科技  
**專案性質：** Industry Collaboration / Embedded AI  
**開發期間：** 2025.01–2026.01

本系統為「多功能熱影像重疊智慧傳輸模組」產學合作開發成果之一，
目標是在 KL730 邊緣平台整合 RGB、Thermal 與 ToF 感測資訊，
完成即時跨模態影像對位、融合、顯示與 AI inference。

## Problem

RGB 與熱像相機因鏡頭視角、安裝位置與影像尺度不同，直接疊合會產生視差錯位；而單一固定 Homography 只對特定距離有效，物體景深改變後對位品質會明顯下降。

<figure>
  <video
    autoplay
    loop
    muted
    playsinline
    preload="metadata"
    style="width:100%;height:auto;">

    <source
      src="{{ '/assets/img/projects/kl730/kl730-rgbir-demo.webm' | relative_url }}"
      type="video/webm">

    <source
      src="{{ '/assets/img/projects/kl730/kl730-rgbir-demo.mp4' | relative_url }}"
      type="video/mp4">

    Your browser does not support the video tag.
  </video>

  <figcaption>
    直接疊合會產生明顯視差錯位
  </figcaption>
</figure>

## Method

1. 在多個前景距離蒐集成對 RGB / Thermal 影像。
2. 於各距離標定跨模態對應點，直接估算該距離的 Homography Matrix。
3. 將各距離矩陣建立成深度索引表。
4. 系統運作時利用 **ToF** 即時量測距離，選擇對應的投影映射矩陣。
5. 完成透視轉換、影像融合與顯示，並整合 AI 物件辨識。

<figure>
  <img
    src="{{ '/assets/img/projects/kl730/fusion-flow.png' | relative_url }}"
    alt="RGB、IR 與 ToF 即時影像融合系統流程"
    loading="lazy"
    style="width:100%;height:auto;">
  <figcaption>
    RGB / Thermal / ToF 系統流程。ToF 提供即時距離資訊，系統依據深度選擇對應 Homography Matrix，完成跨模態影像對位、融合與 AI inference。
  </figcaption>
</figure>

## Embedded Deployment

系統進一步移植到 **Kneron KL730** 邊緣運算平台，整合：

- RGB Camera / Thermal Camera 影像輸入
- ToF 距離量測
- Homography-based alignment
- RGB/IR Alpha Blending
- AI Object Detection
- 外部控制與顯示介面

<figure>
  <img
    src="{{ '/assets/img/projects/kl730/sys.webp' | relative_url }}"
    alt="KL730 邊緣運算平台與 RGB、Thermal、ToF 感測器整合"
    loading="lazy"
    style="width:100%;height:auto;">
  <figcaption>
    KL730 邊緣運算平台與 RGB、Thermal、ToF 感測器整合。
  </figcaption>
</figure>

## Demo

以下為室外／動態場景的實際成果展示：

<div style="position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 12px;">
  <iframe
    src="https://www.youtube.com/embed/cx5LC9ij29A"
    title="RGB/IR Fusion System Demo"
    style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

## Engineering Challenges

- 處理 RGB 與 IR 視角差異、尺度差異與多距離視差。
- 將 Python 原型邏輯轉換至嵌入式 C/C++ 流程。
- 配合邊緣裝置的運算資源、影像 buffer 與即時顯示限制重新整理資料流。
- 對齊影像處理、AI inference、ToF 與 UI 控制等多個模組介面。

## Result

完成從資料蒐集、跨模態標定、深度索引矩陣建立，到 KL730 即時融合與 AI 辨識的完整系統原型。在專案過程中理解演算法從 PC 開發環境走向實際嵌入式硬體時的效能、介面與資料流限制。
