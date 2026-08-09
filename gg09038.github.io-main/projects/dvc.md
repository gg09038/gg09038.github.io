---
layout: project
title: "深度學習式多碼率視訊壓縮系統"
kicker: "Master Thesis · Deep Learning"
subtitle: "Single-Model Multi-Rate Deep Video Compression with Full-Path Scale Modulation and Multi-Source Prior Fusion"
hero: "/assets/img/project-dvc.svg"
tags: ["PyTorch", "Deep Video Compression", "Entropy Model", "Rate-Distortion", "Multi-Rate"]
metrics:
  - label: "P-frame BD-rate vs. HM-16.25"
    value: "-44.91%"
  - label: "All-frame BD-rate vs. HM-16.25"
    value: "-37.73%"
  - label: "PSNR operating range"
    value: "+2.39–2.61 dB"
permalink: /projects/dvc/
---

# 深度學習式多碼率視訊壓縮系統

> **一句話摘要**：以單一模型支援多個率失真操作點，透過全鏈路尺度調變、多源先驗融合與長序列穩定化設計，改善可變碼率操作彈性與長鏈編碼效率。

## Problem

深度視訊壓縮在實際應用上除了追求壓縮效率，也需要單一模型能涵蓋較寬廣且穩定的率失真（Rate-Distortion, RD）操作範圍。基準模型在不同量化條件下仍存在碼率響應不足、位元配置彈性有限，以及長預測鏈下誤差累積等問題。

## Method

- **全鏈路尺度調變**：將品質控制訊號導入內容潛變量、運動潛變量、時序上下文與重建特徵等主要路徑。
- **多源先驗融合**：擴充內容與運動分支的條件熵模型，整合跨幀狀態與多種先驗資訊。
- **空間位元配置**：增加空間域量化調變能力，使不同區域能依內容特性調整位元配置。
- **長序列穩定化**：重整參考特徵來源與長序列訓練流程，降低長預測鏈下的品質劣化。
- **訓練策略**：採用全域指數型非均勻抽樣，以強化高品質端的學習並拓展單一模型操作範圍。

## Engineering Work

此研究不只包含模型架構設計，也包含完整的研究與工程流程：

- 閱讀、重現與比較 DCVC 系列等 learned video compression 方法。
- 在大型 PyTorch codebase 中修改模型架構、熵模型與訓練/測試流程。
- 追蹤跨幀 recurrent state 與 tensor data flow，處理訓練不穩定、NaN、estimated/actual bitrate mismatch 等問題。
- 以消融實驗、RD curve、BD-rate / BD-PSNR 與長序列測試驗證各項設計。

## Results

在 GOP12、PSNR-YUV 與實際位元流評估設定下：

- 相較 HM-16.25，**P-frame 平均 BD-rate 降低 44.91%**。
- 相較 HM-16.25，**All-frame 平均 BD-rate 降低 37.73%**。
- 相較基準模型，**PSNR 可操作範圍拓展約 2.39–2.61 dB**。

## What I learned

這項研究讓我建立從論文理解、模型實作、系統化除錯到量化實驗驗證的完整流程，也讓我更熟悉大型深度學習專案中的資料流追蹤與模組整合。
