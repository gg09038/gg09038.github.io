---
layout: project
title: "CNC 工具機智慧鐵屑清潔監控系統"
kicker: "Undergraduate Capstone · Computer Vision"
subtitle: "Image recognition, automatic nozzle control and real-time monitoring for CNC chip cleaning"
hero: "/assets/img/project-cnc.svg"
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

## Engineering Experience

此專題同時涉及影像辨識、機構、嵌入式控制與監控介面，因此除了完成單一模組外，也需要與組員持續確認介面、定位誤差與實驗結果。實作過程中處理了水花反光誤判、噴嘴盤旋、機構晃動與水柱落點偏差等實際工程問題。

## Results

完成可自動判斷待清潔區域、控制噴嘴沖洗並即時監控鐵屑占比的系統原型。三次完整測試中，系統皆能將初始鐵屑占比顯著降低。

## Publication

[A Monitoring and Control System Based on Image Recognition for Iron Filings Cleaning of CNC Machine Tools](https://ieeexplore.ieee.org/document/10773234)

相關成果後續完成 IEEE 論文發表。
