---
title: "Deep Video Compression（碩論）"
permalink: /projects/dvc/
---

# Deep Video Compression（碩論）
> **Problem → Method → Experiments → Results → Demo/Repo**

**一句話摘要**：用單一模型拓展 RD 操作範圍，並用品質/特徵調變降低長序列誤差傳播，讓長片段更穩定、也省掉多碼率重訓的成本。

---

## Problem（研究問題）
深度視訊壓縮（DVC）雖然在客觀品質上逐步逼近傳統標準，但仍常見兩個部署痛點：  
1) **單一模型可涵蓋的 RD（Rate–Distortion）範圍有限**，不同碼率點常要分別訓練/調參。  
2) **長序列容易出現誤差累積與擴散**，跨幀預測誤差會讓品質逐步衰退、變得不穩定。

---

## Method（方法）
### 1) RD Range Expansion（RD 範圍拓展）
- 使用端到端 **Feature Modulation（特徵調變）**，讓編碼器/解碼器依目標碼率自適應調整表徵分配與量化強度。
- 搭配 **多階段訓練流程**，降低「每個碼率點都要分別訓練」的成本。

> 圖：方法總覽（建議放一張架構圖）  
![](/assets/img/projects/dvc/overview.png)

### 2) Long-sequence Stabilization（長序列穩定化）
- 設計 **幀內品質調變（Intra-frame Quality Modulation）**：策略性切換關鍵幀的幀內重建品質。  
- 引入 **階層式長鏈參考（Hierarchical Long-chain Reference）**：強化時域約束、抑制誤差在後續幀傳遞與放大。

> 圖：長序列誤差傳播示意（建議放「不做 vs 做」對比圖）  
![](/assets/img/projects/dvc/error_propagation.png)

### 3) Implementation Notes（實作重點）
- 在 codebase 中實作 **Feature Modulation 版本**：以 gain/scale 模組插入至多層表徵處理流程（example：`FeatureGainedMSHyperprior` 類別）。
- 用固定的 λ（lambda）集合支援多個 RD 工作點（可在文末 Repo/Code 連結中補上對應 commit/檔案）。

---

## Experiments（實驗設計）
### Datasets
- **HEVC Class B/C/D/E + UVG**（20+ 段序列）

### Metrics
- **Avg BD-Rate / Avg BD-PSNR**（你目前首頁與 projects list 已經用這組指標呈現）

### Baselines（可選）
- 你 repo 裡已有 per-sequence 的 BD 統計檔（如 DCVC/TCM 的 `*_ssim_BD.json`），可用來補上對比表格（或貼在附錄）。

---

## Results（結果）
### Main numbers（目前版本）
- **Avg BD-Rate：-49.95%**
- **Avg BD-PSNR：+3.122 dB**
- 測試集：HEVC B/C/D/E + UVG，20+ 段序列

> 圖：RD Curve / BD-Rate 對比圖（你 `projects.md` 已經預留了 bdrate.png）  
![](/assets/img/bdrate.png)

### Qualitative（建議補）
- 放 2–4 組「原圖 / 重建圖 / 殘差」或「長序列後段品質穩定度」對比  
![](/assets/img/projects/dvc/qual_1.png)  
![](/assets/img/projects/dvc/qual_2.png)

---

## Demo / Repo
- Demo：*（若有影片/簡報連結放這裡）*
- Repo：*（放 GitHub repo 連結；或私有可放「可提供 upon request」）*

---

## What I learned（可選）
- 如何把研究貢獻落到可重現的評估流程（RD curve、BD 指標、長序列穩定度）
- 訓練多 RD 工作點時的穩定訓練策略與 debug（loss/scale stats）
