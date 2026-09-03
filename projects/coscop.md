---
layout: project
title: "藥妝品廣告詞違規檢測系統"
kicker: "2023 法律 × 法遵科技黑客松 · NLP / RegTech"
subtitle: "Explainable ad-compliance checking with structured language rules, API and web interface"
hero: "/assets/img/coscopppt.png"
tags: ["NLP", "Python", "API", "Vue.js", "MongoDB", "RegTech"]
metrics:
  - label: "Competition"
    value: "70+ teams"
  - label: "Awards"
    value: "2 awards"
  - label: "Random test"
    value: "48 / 50 passed"
permalink: /projects/coscop/
---

# 藥妝品廣告詞違規檢測系統

> **一句話摘要**：將藥妝品相關法規與實務案例整理成可維護的語意規則，結合句法結構分析、API 與 Web UI，自動分析廣告文案並標示可能涉及的違規類型。

## Project Background

此專案以藥妝品廣告合規為題，參加 **2023 法律 × 法遵科技黑客松競賽**。競賽共有超過 70 組由學生、學者與企業組成的團隊參賽，團隊進入決賽並完成可實際操作的系統原型。

系統希望將原本需要人工逐條比對的廣告法規與實務案例，轉換成可由程式檢查的語意規則，使企業能在廣告發布前進行自我審查，也提供法遵與主管機關一個快速篩選疑似違規文案的輔助工具。

## System Design

系統將常見違規情況整理為三類：

1. **涉及醫療效能**：藥妝品廣告宣稱具有醫療或治療效果。
2. **不屬於藥妝效能之宣稱**：廣告使用超出產品合理效能範圍的描述。
3. **涉及誇大或造假**：部分成分或效果需要額外認證或證據支持，系統將其標示為需要進一步查證的項目。

處理流程如下：

**法規與實務案例整理 → 語意分類 → 句法樹 / 詞性結構化 → 違規樣態比對 → Open API → Web UI 顯示結果**

相較於單純以文字向量相似度進行比對，專案採用可檢視的句型與詞性結構建立規則，因此當法規內容或判定條件更新時，可以直接調整對應規則與資料，而不必重新訓練整個模型。

## Engineering Experience

專案後端以 **Python** 為主，前端使用 **Vue.js + Bootstrap** 建立操作介面，並使用 **MongoDB / NoSQL database** 儲存規則與資料。開發過程亦使用 Git 進行多人版本管理，並建立 Container 以降低部署環境差異。

除了主要檢測流程外，系統也加入簡易網路爬蟲，從電商平台取得藥妝品廣告文案作為隨機測試資料，用來持續檢查實際市場文案下的判定結果。

## Demo

<div style="position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 16px; margin: 1rem 0 0.75rem;">
  <iframe
    src="https://www.youtube.com/embed/l1sLOMp7fNg"
    title="CosCOP 藥妝品廣告詞違規檢測系統 Demo"
    loading="lazy"
    style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

[在 YouTube 開啟 Demo](https://youtu.be/l1sLOMp7fNg)

## Results

使用隨機爬蟲取得的 **50 筆廣告文案**進行測試，其中 **48 筆通過預期判定**；2 筆錯誤皆出現在「涉及誇大或造假」類別的偽陰性（False Negative），相當於此次測試約 **96%** 的判定結果符合預期。

除了完成可操作的 Web prototype，也透過 API 將檢測能力與使用者介面分離，使後續能進一步串接其他服務或前端應用。

## Competition & Awards

團隊於 **2023 法律 × 法遵科技黑客松競賽**中由超過 70 組參賽團隊中進入決賽，並獲得兩項獎項：

- **法遵 / 公司治理特別獎**
- **卓騰技術應用獎**

兩項獎項分別肯定專案在法規遵循應用與技術實作上的成果，也讓這個作品不只是概念驗證，而是經競賽評審與企業端實際檢視的 Legal Tech prototype。
