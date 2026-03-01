---
title: "Projects"
---

# Projects

## 碩士論文｜Deep Video Compression
**方向：**拓展 RD 範圍、抑制長序列誤差傳播（Quality/Feature Modulation）  
- **成果（初步）：**Avg BD-Rate **-49.95%**、Avg BD-PSNR **+3.122 dB**（HEVC B/C/D/E + UVG，20+ 段序列）
- **做法：**Quality/Feature Modulation、RD Range Expansion、長序列誤差傳播抑制
- **關鍵字：**DVC / RD Optimization / Quality Modulation / Error Propagation

> 對比圖（把圖片放到 assets/img/bdrate.png）
![](assets/img/bdrate.png)

---

## CNC 工具機鐵屑清潔度監控（CACS 2024 第一作者）
- **成果：**完成「影像判定 → 清潔決策 → 硬體控制 → 監控介面」整合原型
- **重點：**在雜訊/反光/環境變動下設計耐用影像處理流程，將辨識結果轉為可執行清潔控制
- **關鍵字：**Industrial CV / OpenCV / Embedded Control / System Integration

---

## KL730 邊緣裝置：RGB + Thermal 疊合對齊
- **成果：**在 KL730 上完成多源影像輸入、疊合顯示與操作流程（含 ToF 距離輔助）
- **重點：**以 Homography / Perspective Transform 做幾何對齊，依距離選擇對齊參數提升穩定性
- **關鍵字：**Edge AI / Thermal-RGB Fusion / Homography / Calibration

---

## 國民法官最佳助手（Local LLM + RAG）
- **成果：**本地端法律輔助原型（保密、可更新、可查詢）
- **重點：**RAG 資料整理、embedding/檢索流程調整、提示詞設計
- **關鍵字：**RAG / Local LLM / Prompt Engineering / Data Pipeline

---

## 藥妝品廣告詞違規檢測（黑客松決賽＋獲獎）
- **成果：**決賽與獲獎；完成「文案 → 違規類型判定 → 介面輸出」原型
- **重點：**法規整理、可解釋輸出、API/介面整合
- **關鍵字：**Explainable NLP / RegTech / Web API / Crawler

---

## RTOS（μC/OS-II）排程演算法實作
- **成果：**kernel-level scheduler 改寫與行為驗證（輸出 response/preemption/blocking/miss deadline 指標）
- **重點：**實作 RM/EDF/FIFO 與 NPCS/CPP，處理共享資源與 priority inversion
- **關鍵字：**RTOS / μC/OS-II / Scheduling / Real-time Systems
