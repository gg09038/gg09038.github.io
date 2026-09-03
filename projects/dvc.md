---
layout: project
title: "深度學習式多碼率視訊壓縮系統"
kicker: "Master Thesis · Deep Learning / Video Compression"
subtitle: "Single-Model Multi-Rate Deep Video Compression with Full-Path Scale Modulation and Multi-Source Prior Fusion"
hero: "/assets/img/projects/dvc/original.png"
tags: ["PyTorch", "Deep Video Compression", "Entropy Model", "Rate-Distortion", "Multi-Rate"]
metrics:
  - label: "P-frame BD-rate vs. HM-16.25 (H.265 reference)"
    value: "-44.91%"
  - label: "I+P BD-rate vs. HM-16.25 (H.265 reference)"
    value: "-37.73%"
  - label: "PSNR operating-range expansion"
    value: "+2.39–2.61 dB"
permalink: /projects/dvc/
---

<style>
.dvc-comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin: 1rem 0;
}

.dvc-comparison-grid figure {
  margin: 0;
  min-width: 0;
}

.dvc-comparison-grid img {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 650px) {
  .dvc-comparison-grid {
    grid-template-columns: 1fr;
  }
}
</style>

# 深度學習式多碼率視訊壓縮系統

> **一句話摘要**：以單一深度視訊壓縮模型支援多碼率操作，透過全鏈路尺度調變、多源先驗融合與長序列穩定化，改善碼率控制、位元配置與長預測鏈下的率失真表現。

## Problem

深度視訊壓縮雖然已有良好的壓縮效率，但實際部署時仍存在三個問題：

- **單一模型的品質控制範圍有限**：不同品質設定不一定能穩定對應到不同 bitrate，甚至出現操作點排序不一致。
- **位元配置缺乏彈性**：有限的 bit 不應平均分配，而應優先保留難預測、紋理複雜或運動明顯的區域。
- **長序列誤差會逐步累積**：P-frame 持續依賴先前重建結果，短序列訓練得到的模型不一定能在長 GOP 下維持穩定。

<figure>
  <img
    src="{{ '/assets/img/projects/dvc/dvc-rate-nonmonotonicity.png' | relative_url }}"
    alt="基準模型於品質索引順序下出現 bitrate 非單調現象"
    loading="lazy"
    style="width:100%;height:auto;">
  <figcaption>
    基準模型的 bitrate 非單調現象：品質索引提高時，實際位元消耗不一定穩定增加，代表品質控制訊號未能一致地反映到整條編碼路徑。
  </figcaption>
</figure>

## Method

1. **Full-Path Scale Modulation**  
   將同一組品質控制訊號導入 latent、context 與 reconstruction 三個主要層次，使內容、運動、時序上下文與重建路徑能協同響應不同操作點。

2. **Multi-Source Prior Fusion**  
   整合 hyperprior、temporal prior、前一幀內容 latent 與 motion latent，提升內容與運動熵模型對當前符號分布的預測能力。

3. **Spatial Bit Allocation**  
   加入單通道空間量化調變，使模型能依畫面內容調整不同位置的量化強度，將更多位元分配給較重要或較難預測的區域。

4. **Long-Sequence Stabilization**  
   重新整理跨幀參考特徵來源並搭配長序列微調，降低長預測鏈中的誤差傳播。

5. **Training / Bitstream Alignment**  
   使用全域指數型非均勻抽樣、漸進式 GOP 訓練與 STE-based mismatch-aware rate estimation，使訓練時的估計 bitrate 更接近實際 entropy coding 行為。

<figure>
  <img
    src="{{ '/assets/img/projects/dvc/dvc-full-path-scale-modulation.webp' | relative_url }}"
    alt="全鏈路尺度調變將品質控制訊號導入 latent、context 與 reconstruction 三個層次"
    loading="lazy"
    style="width:100%;height:auto;">
  <figcaption>
    Full-Path Scale Modulation：同一個品質條件同時作用於 latent、context 與 reconstruction domains，使不同操作點能更一致地改變整體編碼行為。
  </figcaption>
</figure>

## Result

最終模型以 **GOP12、PSNR-YUV 與實際 bitstream** 進行評估：

- **vs. HM-16.25**：P-frame / I+P-frame BD-rate 分別為
  **-44.91% / -37.73%**。

- **vs. Lu'25 baseline**：P-frame / I+P-frame BD-rate 分別為
  **-73.22% / -45.36%**。

同時，單一模型的 PSNR 操作範圍較基準模型增加約 **2.39–2.61 dB**。

<figure>
  <img
    src="{{ '/assets/img/projects/dvc/dvc-gop12-yuv420-rd-all-frame.png' | relative_url }}"
    alt="YUV420格式下含 I-frame 與 P-frame 的 RD 曲線比較(GOP12)"
    loading="lazy"
    style="width:100%;height:auto;">
  <figcaption>
    YUV420、GOP12、實際 bitstream 下的 I-frame + P-frame RD 曲線，可比較 Proposed、傳統編碼器與其他 Learned Video Codecs 的率失真表現。
  </figcaption>
</figure>

在統一條件下，本研究方法明顯優於 Lu'25 baseline，並優於 VTM-13.2、DCVC-DC 與 DCVC-RT；整體 I+P-frame 結果略遜於 DCVC-FM。

## Engineering Challenges

- 在大型 **PyTorch** 視訊壓縮 codebase 中追蹤 motion / content latent、entropy model、context model、reconstruction path 與 recurrent state 的跨幀資料流。
- 處理 **NaN、品質操作點非單調、estimated / actual bitrate mismatch** 與長序列品質衰退等訓練及推論問題。
- 建立 estimated-rate 與 actual-bitstream 兩套測試流程，並以不同 GOP、色彩轉換、PSNR 與 BD-rate / BD-PSNR 交叉驗證。
- 透過消融實驗、逐幀分析與固定訓練策略控制實驗，區分改善究竟來自模型架構或後續訓練策略。

<details markdown="1">
<summary><strong>Technical Details：方法與訓練細節</strong></summary>

### Full-Path Scale Modulation

基準模型的品質控制主要集中在少數節點，因此不同操作點下的內部特徵響應有限。本研究將品質條件擴展到三個主要層次：

- **Latent domain**：調整內容與運動特徵的表示及量化強度。
- **Context domain**：控制前一幀資訊與多尺度時序上下文對目前畫面的影響。
- **Reconstruction domain**：使重建特徵也能依品質設定重新調整。

因此品質切換不再只影響量化器，而是讓整條編碼資料流共同對操作點做出反應。

### Multi-Source Prior Fusion

熵編碼效率取決於模型能否準確估計待編碼符號的機率分布。本研究整合：

- 當前畫面的 **hyperprior**
- 前一幀提供的 **temporal prior**
- 前一幀已解碼的 **content latent**
- 前一幀已解碼的 **motion latent**

這些資訊共同提供給內容與運動熵模型，降低潛變量中的冗餘位元。

### Spatial Bit Allocation

加入單通道空間量化調變，讓模型依影像內容產生空間控制資訊：

> 複雜、難預測、需要保留細節的區域 → 分配較多資訊  
> 平坦、容易預測的區域 → 使用較少資訊

因此多碼率控制不只是一個全畫面共同的品質參數，也能進一步影響局部位元配置。

### Long-Sequence Stabilization

P-frame 會依賴先前已重建的影格，因此誤差可能沿預測鏈持續傳遞。本研究重新整理不同來源的參考特徵，並使用長序列資料進行後續微調，使訓練時的時間尺度更接近實際推論情境。

### Training Strategy

- 使用 **全域指數型非均勻抽樣**，增加高品質操作點在訓練中的覆蓋。
- 漸進式增加 GOP 長度，提升模型對長時序依賴的適應能力。
- 使用 **STE-based mismatch-aware rate estimation**，縮小 estimated bitrate 與實際 bitstream 之間的差距。

</details>

<details markdown="1">
<summary><strong>Benchmark Details：完整比較與主觀重建結果</strong></summary>

### 與代表性傳統 / Learned Video Codecs 比較

| Method | Avg. BD-rate vs. HM-16.25 | Avg. BD-PSNR |
|---|---:|---:|
| HM-16.25 (H.265 reference) | 0.00% | 0.000 dB |
| VTM-13.2 (H.266 reference) | -17.88% | +0.689 dB |
| DCVC-DC (Microsoft 2023) | -16.70% | +0.615 dB |
| DCVC-FM (Microsoft 2024) | **-41.51%** | **+1.851 dB** |
| DCVC-RT (Microsoft 2025) | -35.74% | +1.475 dB |
| Lu'25 Baseline (2025) | +14.20% | -0.267 dB |
| **Proposed** | **-37.73%** | **+1.733 dB** |

### Subjective Reconstruction Comparison：HEVC Class E FourPeople（GOP12）

以下固定比較相同影格、相同空間區域，並挑選相近平均 P-frame bitrate 的操作點：

<div class="dvc-comparison-grid">
  <figure style="margin:0;">
    <img src="{{ '/assets/img/projects/dvc/original.png' | relative_url }}" alt="HEVC Class E FourPeople 原始畫面" loading="lazy" style="width:100%;height:auto;">
    <figcaption><strong>Original</strong><br>Reference frame</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="{{ '/assets/img/projects/dvc/vtm.png' | relative_url }}" alt="HEVC Class E FourPeople VTM-13.2 GOP12 重建畫面" loading="lazy" style="width:100%;height:auto;">
    <figcaption><strong>VTM-13.2</strong><br>0.001785 bpp / 36.469 dB</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="{{ '/assets/img/projects/dvc/dcvc-fm.png' | relative_url }}" alt="HEVC Class E FourPeople DCVC-FM GOP12 重建畫面" loading="lazy" style="width:100%;height:auto;">
    <figcaption><strong>DCVC-FM</strong><br>0.001664 bpp / 33.293 dB</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="{{ '/assets/img/projects/dvc/proposed.png' | relative_url }}" alt="HEVC Class E FourPeople Proposed GOP12 重建畫面" loading="lazy" style="width:100%;height:auto;">
    <figcaption><strong>Proposed</strong><br>0.001663 bpp / 37.383 dB</figcaption>
  </figure>
</div>

</details>

<details markdown="1">
<summary><strong>Validation Details：複雜度與固定訓練策略控制實驗</strong></summary>

### Complexity / Performance Trade-off

| Metric | Lu'25 Baseline | Proposed | Change |
|---|---:|---:|---:|
| Parameters | 14.55 M | 29.48 M | **+102.6% (2.03×)** |
| MACs | 4.648 T | 4.548 T | **-2.2%** |
| Encoding time | 931.2 ms | 1052.6 ms | **+13.0%** |
| Decoding time | 1011.4 ms | 795.9 ms | **-21.3%** |
| Encode + Decode | 1942.6 ms | 1848.5 ms | **-4.9%** |

模型參數量約增加一倍，但 MACs 並未同步增加；實際量測中，單一 P-frame 的編解碼總時間相較基準模型仍約降低 4.9%。

### Controlled Architecture Experiment

為區分「架構修改」與「訓練策略」的效益，Baseline 與 Proposed-Arch 使用相同資料、初始化、optimizer、batch size、quality sampling、learning rate 與總訓練 epochs。

| GOP | Avg. BD-rate | Avg. BD-PSNR | PSNR operating range |
|---|---:|---:|---:|
| GOP12 | **-44.32%** | **+3.098 dB** | 4.534 → 5.806 dB (**+1.272 dB**) |
| GOP32 | **-48.78%** | **+2.797 dB** | 3.968 → 5.226 dB (**+1.258 dB**) |

即使不使用後續額外訓練策略，Proposed-Arch 仍展現較佳 RD performance 與更寬的品質操作範圍；相鄰操作點的 P-frame bitrate 非單調 pair 數亦由 **74 / 345 降至 32 / 345**。

</details>

<details markdown="1">
<summary><strong>Background：第一次接觸視訊壓縮可以看這裡</strong></summary>

### 視訊壓縮在做什麼？

相鄰影格通常具有大量重複資訊，因此視訊壓縮的核心可以簡化成：

**「哪些資訊可以由前一張畫面預測？哪些資訊真的需要額外傳送？」**

第一張畫面通常以 **I-frame** 完整描述畫面品質及資料量都很高；後續 **P-frame** 則利用先前重建畫面進行重建，通常需傳輸的資料量遠低於 I-frame。

### 怎麼看實驗結果？

- **Bitrate / bpp**：資料量，越低越省頻寬。
- **PSNR**：重建影像與原始影像的接近程度，在相同評估條件下通常越高越好。
- **RD curve**：同時觀察 bitrate 與重建品質。
- **BD-rate**：比較兩條 RD curve 的平均 bitrate 差異；負值通常代表壓縮效率較佳。

因此「BD-rate = -20%」可直觀理解為：在相近畫質範圍內，平均約可少使用 20% bitrate。

### 為何 P-frame 的改善比整體結果更大？

本研究主要修改 **P-frame 幀間編碼模型**；I-frame 使用既有圖像壓縮模型，因此當 I-frame bitrate 一起納入統計時，P-frame 的改善會被部分稀釋。

P-frame-only 指標主要反映本文設計的幀間模型效益，而 I+P-frame 則代表完整視訊編碼系統的實際成本。

</details>
