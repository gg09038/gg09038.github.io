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

# 深度學習式多碼率視訊壓縮系統

> **一句話摘要**：讓一個深度學習視訊壓縮模型像影音平台的「畫質選擇器」一樣，可以依頻寬需求切換不同碼率與畫質；同時讓模型更懂得把位元花在重要內容上，並降低長影片連續預測造成的品質衰退。

<details markdown="1">
<summary><strong>入門補充：第一次接觸視訊壓縮可以先看這裡</strong></summary>

### 視訊壓縮到底在做什麼？

視訊是大量連續影像。若把每一張畫面都完整儲存，資料量會非常龐大；但相鄰影格通常有大量重複資訊，例如背景幾乎不變，真正改變的可能只有人物、車輛或鏡頭移動。

因此視訊壓縮的核心問題可以簡化成：

**「哪些資訊可以從前一張畫面推測出來？哪些資訊真的需要額外傳送？」**

傳統的 H.264 / H.265 / H.266 由人工設計大量預測、轉換、量化與熵編碼工具；深度視訊壓縮（Deep Video Compression, DVC）則利用神經網路學習影格之間的空間與時間關係，讓整個壓縮流程可以透過資料進行端到端最佳化。

### 一個簡化例子

假設影片中是一個人在固定背景前走動：

1. 第一張畫面需要完整描述，可視為 **I-frame**，畫面品質好資料量大。
2. 後續畫面不必重新傳送整張圖片，只需要描述「人物往哪裡移動」以及「還有哪些地方無法由上一張畫面預測」，形成 **P-frame**。
3. 編碼器再把這些資訊壓縮成 bitstream；解碼器利用已解碼的前一幀與收到的新資訊重建下一張畫面。

此研究主要改進的就是 P-frame 編碼流程。

### 怎麼看視訊壓縮的實驗結果？

主要有兩個衡量指標：

- **Bitrate / bpp**：資料量，越低越省空間與頻寬。
- **PSNR**：重建畫面和原始畫面的接近程度，在相同評估方式下通常越高代表失真越低。

研究中會把兩者畫成 **Rate-Distortion（RD）curve**：

> 希望在相同畫質下使用更少 bitrate，或在相同 bitrate 下得到更高畫質。

而 **BD-rate** 用來比較兩條 RD curve 的平均差異。可以把它直接理解成：

> **在相近畫質範圍內，平均可以少用多少 bitrate。**

因此 BD-rate 為負值通常代表較好的壓縮效率。

</details>

## 我想解決什麼問題？

近年深度視訊壓縮已取得優異的壓縮效率，但在實際使用上，**「壓得好」並不等於「好控制」**。故此研究聚焦在單一模型多碼率操作與長序列穩定性，主要處理三個問題：

### 1. 一個模型能不能支援很多種畫質？

實際影音服務不會只有一種畫質，舉例來說：網路狀況好時，希望使用較高 bitrate 換取清晰畫面；頻寬不足時，又需要降低 bitrate。

理想情況下，同一個模型應該像一個可連續調整的「品質旋鈕」。但基準模型的品質控制主要集中在局部位置，因此不同品質設定不一定能充分影響整個編碼流程，甚至可能出現：

> 使用者要求更高品質的視訊，模型卻沒有穩定地使用更多位元。

<figure>
  <img src="{{ '/assets/img/projects/dvc/dvc-rate-nonmonotonicity.png' | relative_url }}" alt="基準模型於品質索引順序下出現 bitrate 非單調現象" loading="lazy" style="width:100%;height:auto;">
  <figcaption>基準模型的 bitrate 非單調現象：品質索引提高時，實際位元消耗不一定穩定增加，代表品質控制訊號未能一致地反映到整條編碼路徑。</figcaption>
</figure>

也就是品質設定與實際 bitrate 的排序不夠穩定。

### 2. 有限的位元應該花在哪裡？

一張畫面中，不同區域的重要程度並不相同。人物輪廓、文字、快速運動與複雜紋理通常需要更多資訊；平坦背景或容易從前一幀推測的區域則可以少花一些位元。

因此模型除了要決定「整體使用多少 bitrate」，還需要學會 **如何把有限的位元分配到更值得保留的內容上**。

### 3. 影片越長，前面的小錯誤會不會一路累積？

P-frame 會參考先前已經重建的畫面。如果某一幀出現誤差，後續畫面又持續參考它，誤差就可能沿著預測鏈累積。

這也是為什麼在短片段上訓練表現良好的模型，不一定能在數十或上百張連續 P-frame 中維持相同穩定度。

## 研究方法

從整條編碼資料流重新設計品質控制、機率估測與跨幀資訊使用方式：

### 1. Full-Path Scale Modulation：把「品質旋鈕」接到整條編碼路徑

可以把原本的模型想像成：品質旋鈕只接到少數幾個位置，轉動旋鈕時，其他模組不一定充分跟著改變。

本研究把同一個品質控制訊號擴展到三個主要層次：

- **Latent domain**：控制內容與運動特徵在壓縮前後的表示與量化強度。
- **Context domain**：調整前一幀資訊與多尺度時序上下文對目前畫面的影響。
- **Reconstruction domain**：讓最後的重建特徵也能依目前品質設定重新調整。

<figure>
  <img src="{{ '/assets/img/projects/dvc/dvc-full-path-scale-modulation.webp' | relative_url }}" alt="全鏈路尺度調變將品質控制訊號導入 latent、context 與 reconstruction 三個層次" loading="lazy" style="width:100%;height:auto;">
  <figcaption>Full-Path Scale Modulation：同一個品質條件同時作用於 latent、context 與 reconstruction domains，使不同操作點能更一致地改變整體編碼行為。</figcaption>
</figure>

故當使用者改變目標品質時，不只是量化器改變，而是整條資料流一起對新的操作點做出反應。

### 2. Multi-Source Prior Fusion：在編碼前先利用「已知線索」猜得更準

熵編碼的概念可以簡化成：**越能準確預測某個資訊會出現的機率，就越能用較少的 bit 表示它。**

因此本研究同時利用多種已知資訊來估測目前需要編碼的內容，例如：

- 當前畫面的輔助統計資訊（hyperprior）
- 前一幀所提供的時間資訊（temporal prior）
- 前一幀已解碼的內容 latent
- 前一幀已解碼的 motion latent

這些資訊共同提供給內容與運動熵模型，使模型對「接下來可能出現什麼」有更完整的判斷，降低冗餘位元消耗。

### 3. Spatial Bit Allocation：讓模型知道哪裡值得多花 bit

加入單通道空間量化調變機制，讓模型可以依據畫面內容產生空間上的控制資訊。

直觀上可以理解成：

> 複雜、難預測、需要保留細節的區域 → 分配更多資訊  
> 平坦、容易預測的區域 → 使用較少資訊

這讓「可變碼率」不只是一個全畫面共同的數字，也能進一步影響畫面不同位置的位元配置。

### 4. Long-Sequence Stabilization：讓模型習慣更長的預測鏈

為降低長序列中的誤差傳播，調整模型架構適配不同來源的參考特徵，並透過長序列資料進行後續微調，使訓練時看到的時間尺度更接近實際推論情境。

實驗證實，長序列微調的收益會隨 GOP 增長而變得更明顯：平均 P-frame BD-rate 改善由 GOP12 的 **-3.48%** 增加到 GOP32 的 **-8.75%**。

### 5. Training Strategy：讓模型真的學會高品質端與實際 bitstream

除了網路架構，本研究也調整模型訓練方式：

- 使用**全域指數型非均勻抽樣**，增加高品質操作點在訓練中被看見的機率。
- 逐步增加 GOP 長度，讓模型適應更長的時序依賴。
- 使用 **STE-based mismatch-aware rate estimation**，縮小訓練期間「估計 bitrate」與實際 entropy coder 產生 bitstream 之間的差異。

以上設計使模型不只是「在 loss 裡看起來壓得很好」，而是實際輸出 bitstream 時也能維持一致的行為。

## Results

最終模型使用 GOP12、PSNR-YUV 與**實際 bitstream**進行評估，並以 HM-16.25（H.265 / HEVC reference software）作為比較基準：

- **P-frame：平均 BD-rate -44.91%**  
  在相近畫質下，幀間編碼平均可使用約 **44.91% 較低的 bitrate**。

- **I-frame + P-frame：平均 BD-rate -37.73%**  
  納入 I-frame 成本後，完整視訊編碼平均可降低約 **37.73% bitrate**。

- **單一模型的 PSNR 操作範圍增加約 2.39–2.61 dB**  
  代表同一個模型可以涵蓋更寬的品質區間，而不需要為每一個操作點訓練一套模型。

### 與代表性傳統 / Learned Video Codecs 比較

| Method | Avg. BD-rate vs. HM-16.25 | Avg. BD-PSNR |
|---|---:|---:|
| HM-16.25 (H.265 reference) | 0.00% | 0.000 dB |
| VTM-13.2 (H.266 reference) | -17.88% | +0.689 dB |
| DCVC-DC (2023) | -16.70% | +0.615 dB |
| DCVC-FM (2024) | **-41.51%** | **+1.851 dB** |
| DCVC-RT (2025) | -35.74% | +1.475 dB |
| Lu'25 Baseline (2025) | +14.20% | -0.267 dB |
| **Proposed** | **-37.73%** | **+1.733 dB** |

<figure>
  <img src="{{ '/assets/img/projects/dvc/dvc-gop12-yuv420-rd-all-frame.png' | relative_url }}" alt="YUV420格式下含 I-frame 與 P-frame 的 RD 曲線比較(GOP12)" loading="lazy" style="width:100%;height:auto;">
  <figcaption>YUV420格式下含 I-frame + P-frame 的實際 bitstream RD 曲線(GOP12)。此圖可直接觀察本文方法與傳統編碼器及其他 Learned Video Codecs 方法在不同資料集上的率失真表現。</figcaption>
</figure>

在統一條件下，本研究方法明顯優於基準模型 Lu'25，並優於 VTM-13.2、DCVC-DC 與 DCVC-RT；略遜於 DCVC-FM。

### Subjective Reconstruction Comparison：HEVC Class E FourPeople（GOP12）

另外固定比較測試集 FourPeople 序列的相同影格與相同空間區域，並挑選相近平均 P-frame bitrate 的操作點進行主觀畫質比較：

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin:1rem 0;">
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

<details markdown="1">
<summary><strong>為何 P-frame 的改善比整體結果更大？</strong></summary>

本研究主要修改 **P-frame 幀間編碼模型**。I-frame 使用既有的圖像壓縮模型，因此當 I-frame 的 bitrate 一起納入統計時，P-frame 帶來的改善會被部分稀釋。

故同時報告 P-frame-only 與 I+P-frame：前者能直接觀察本研究所設計的幀間模型，後者為完整視訊編碼系統的實際成本。

</details>

## Engineering Work

這項研究除了提出模型架構，也包含大量模型重現、系統整合與實驗工程：

- 以 **PyTorch** 閱讀、重現並比較 DCVC 系列與多種 learned video compression 方法。
- 在大型研究 codebase 中修改 motion / content latent、entropy model、context model、reconstruction path 與訓練流程。
- 追蹤跨幀 recurrent state、reference feature 與 tensor data flow，確認不同模組在長預測鏈中的資料來源與依賴關係。
- 處理訓練不穩定、NaN、品質操作點非單調，以及 estimated / actual bitrate mismatch 等問題。
- 建立 estimated-rate 與 actual-bitstream 兩套測試流程，並使用不同 GOP、色彩轉換與品質指標交叉驗證。
- 透過消融實驗、RD curve、BD-rate / BD-PSNR、逐幀品質分析與長序列測試，確認各架構與訓練策略的影響。

<details markdown="1">
<summary><strong>Complexity / Performance Trade-off & Controlled architecture experiment</strong></summary>

### Complexity / Performance Trade-off

驗證性能提升是否伴隨計算成本提升，另外比較基準模型與本研究模型的參數量、MACs 與實際位元流編解碼時間：

| Metric | Lu'25 Baseline | Proposed | Change |
|---|---:|---:|---:|
| Parameters | 14.55 M | 29.48 M | **+102.6% (2.03×)** |
| MACs | 4.648 T | 4.548 T | **-2.2%** |
| Encoding time | 931.2 ms | 1052.6 ms | **+13.0%** |
| Decoding time | 1011.4 ms | 795.9 ms | **-21.3%** |
| Encode + Decode | 1942.6 ms | 1848.5 ms | **-4.9%** |

結果顯示模型參數量約增加一倍，但 MACs 並未隨參數量同步增加。實際執行時間方面：編碼端增加約 13.0%，解碼端下降約 21.3%，因此單一 P-frame 的編解碼總時間相較基準模型仍約降低 4.9%。

### Controlled architecture experiment

為區分「架構修改」與「後續訓練策略」的影響，另外建立固定訓練策略控制實驗：Baseline 與 Proposed-Arch 使用相同資料、初始化、optimizer、batch size、quality sampling、learning rate 與總訓練 epochs。

在這個控制條件下，Proposed-Arch 相對 Lu'25 的 **P-frame PSNR-RGB (BT.709)** 結果為：

| GOP | Avg. BD-rate | Avg. BD-PSNR | PSNR operating range |
|---|---:|---:|---:|
| GOP12 | **-44.32%** | **+3.098 dB** | 4.534 → 5.806 dB (**+1.272 dB**) |
| GOP32 | **-48.78%** | **+2.797 dB** | 3.968 → 5.226 dB (**+1.258 dB**) |

即使使用與基準模型完全相同的訓練策略，Proposed-Arch 仍呈現明顯較佳的 RD performance 與更寬的品質操作範圍，顯示整體架構修改本身已有獨立於後續訓練策略之外的相對效益；同時相鄰操作點的 P-frame bitrate 非單調 pair 數則由 **74 / 345 降至 32 / 345**，表示單一模型除了 RD efficiency 提升外，品質控制的可用範圍與排序穩定性也同步改善。

</details>

<!-- ## What I learned

這篇碩論讓我真正建立了一套完整的研究流程：從閱讀與重現論文、理解大型模型的跨幀資料流，逐步提出假設、修改架構，再透過控制實驗與消融實驗確認改善究竟來自哪裡。

比起單純追求一個更好的 benchmark 數字，我更重視的是把「模型為什麼會出現這個現象」拆成可驗證的問題，再用實驗逐步確認。例如品質控制訊號是否真的影響整條編碼路徑、bitrate 為什麼會出現非單調、長序列品質為什麼會逐步下降，以及訓練時估計的 bitrate 為什麼會和實際 bitstream 不一致。

這些經驗也讓我更熟悉大型深度學習系統中的 **data-flow tracing、ablation design、training debugging、metric analysis 與 reproducible evaluation**。 -->
