---
layout: project
title: "CNC 工具機智慧鐵屑清潔監控系統"
kicker: "Undergraduate Capstone · Computer Vision"
subtitle: "Image recognition, automatic nozzle control and real-time monitoring for CNC chip cleaning"
hero: "/assets/img/projects/cnc/real.jpg"
tags: ["Computer Vision", "OpenCV", "Python", "Arduino", "Servo Control"]
metrics:
  - label: "System"
    value: "Vision → Decision → Control"
  - label: "Prototype"
    value: "Automatic cleaning"
  - label: "Research output"
    value: "IEEE paper"
permalink: /projects/cnc-cacs/
---

# CNC 工具機智慧鐵屑清潔監控系統

> **一句話摘要**：利用影像處理判斷 CNC 機台內鐵屑分布與清潔優先順序，再以 Arduino、伺服馬達與自製噴嘴完成自動清潔與監控。

## System Pipeline

1. 相機擷取 CNC 內部影像。
2. 使用 OpenCV、Canny edge detection、mask 與 contour 等方法分析鐵屑分布。
3. 將畫面分區並計算各區鐵屑占比，選擇清潔優先區域。
4. 使用雷射光點作為噴嘴定位回授。
5. Python 透過 serial communication 控制 Arduino Mega2560。
6. 雙軸伺服馬達控制噴嘴移動，對準後啟動水閥清潔。
7. Node-RED + MySQL 顯示與紀錄清潔狀態。

<figure>
  <img src="{{ '/assets/img/projects/cnc/cnc-system-environment.jpg' | relative_url }}" alt="CNC 鐵屑自動清潔系統實驗環境架構圖" loading="lazy">
  <figcaption>實驗環境架構：自製噴嘴、沖洗平台、沉積與循環水路共同構成可重複運行的自動清潔測試系統。</figcaption>
</figure>

## Engineering Experience

此專題同時涉及影像辨識、機構、嵌入式控制與監控介面，因此除了完成單一模組外，也需要與組員持續確認介面、定位誤差與實驗結果。實作過程中處理了水花反光誤判、噴嘴盤旋、機構晃動與水柱落點偏差等實際工程問題。

其中，水花與高亮反光區域會被邊緣偵測誤判為鐵屑。為降低 false positive，系統利用高亮度輪廓建立 mask，排除反光區域後再進行鐵屑占比計算，使辨識結果更穩定。

<figure>
  <img src="{{ '/assets/img/projects/cnc/cnc-reflection-mask-before-after.png' | relative_url }}" alt="水花反光誤判改善前後比較" loading="lazy">
  <figcaption>Reflection masking before / after：以高亮度區域遮罩降低水花反光造成的鐵屑誤判。</figcaption>
</figure>

## Results

完成可自動判斷待清潔區域、控制噴嘴沖洗並即時監控鐵屑占比的系統原型。三次完整測試中，系統皆能將初始鐵屑占比顯著降低：10.76% → 2.51%、24.48% → 4.66%、17.94% → 2.54%，對應清潔時間分別為 157、201 與 191 秒。

### Cleaning Process

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;">

  <figure style="margin:0;">
    <img
      src="{{ '/assets/img/projects/cnc/cnc-cleaning-before.png' | relative_url }}"
      alt="系統啟動時工具機內鐵屑分布與待清潔區域標記"
      loading="lazy"
      style="width:100%;height:auto;">
    <figcaption>
      <strong>Before.</strong>
      系統啟動時分析各區域鐵屑占比，並標記優先清潔位置。
    </figcaption>
  </figure>

  <figure style="margin:0;">
    <img
      src="{{ '/assets/img/projects/cnc/cnc-cleaning-after.png' | relative_url }}"
      alt="自動清潔後期僅剩少量待清潔區域"
      loading="lazy"
      style="width:100%;height:auto;">
    <figcaption>
      <strong>After.</strong>
      經多輪定位與沖洗後，大部分鐵屑已被清除，僅剩少量區域待處理。
    </figcaption>
  </figure>

</div>

由清潔前期與後期畫面可觀察到，系統會持續重新計算各區鐵屑占比、更新清潔優先順序，並控制噴嘴逐區沖洗，直到各區域達到設定的停止條件。

## Publication

[A Monitoring and Control System Based on Image Recognition for Iron Filings Cleaning of CNC Machine Tools](https://ieeexplore.ieee.org/document/10773234)

相關成果後續完成 IEEE 論文發表。
