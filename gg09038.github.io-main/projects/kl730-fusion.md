---
layout: project
title: "多模態 RGB/IR 即時影像融合系統"
kicker: "Industry Collaboration · Embedded AI"
subtitle: "Depth-indexed Homography for RGB/Thermal alignment with ToF sensing and KL730 deployment"
hero: "/assets/img/projects/kl730/rgbir-ai.png"
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

## Problem

RGB 與熱像相機因鏡頭視角、安裝位置與影像尺度不同，直接疊合會產生視差錯位；而單一固定 Homography 只對特定距離有效，物體景深改變後對位品質會明顯下降。

## Method

1. 在多個前景距離蒐集成對 RGB / Thermal 影像。
2. 於各距離標定跨模態對應點，直接估算該距離的 Homography Matrix。
3. 將各距離矩陣建立成深度索引表。
4. 系統運作時利用 **ToF** 即時量測距離，選擇對應的投影映射矩陣。
5. 完成透視轉換、影像融合與顯示，並整合 AI 物件辨識。

![RGB/IR/ToF 系統流程](/assets/img/projects/kl730/fusion-flow.png)

## Embedded Deployment

系統進一步移植到 **Kneron KL730** 邊緣運算平台，整合：

- RGB Camera / Thermal Camera 影像輸入
- ToF 距離量測
- Homography-based alignment
- RGB/IR Alpha Blending
- AI Object Detection
- 外部控制與顯示介面

## Engineering Challenges

- 處理 RGB 與 IR 視角差異、尺度差異與多距離視差。
- 將 Python 原型邏輯轉換至嵌入式 C/C++ 流程。
- 配合邊緣裝置的運算資源、影像 buffer 與即時顯示限制重新整理資料流。
- 對齊影像處理、AI inference、ToF 與 UI 控制等多個模組介面。

## Result

完成從資料蒐集、跨模態標定、深度索引矩陣建立，到 KL730 即時融合與 AI 辨識的完整系統原型。此專案讓我進一步理解演算法從 PC 開發環境走向實際嵌入式硬體時的效能、介面與資料流限制。
