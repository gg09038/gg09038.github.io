---
layout: project
title: "基於本地語言模型之司法判決預測"
kicker: "Course Project · Generative AI"
subtitle: "Local LLM + RAG legal assistant with privacy-oriented deployment"
hero: "/assets/img/LLM.png"
tags: ["Local LLM", "TAIDE", "RAG", "Prompt Engineering", "Data Pipeline"]
metrics:
  - label: "Execution"
    value: "Local"
  - label: "Core"
    value: "RAG"
  - label: "Domain"
    value: "Legal AI"
permalink: /projects/juror-rag/
---

# 基於本地語言模型之司法判決預測

> **一句話摘要**：以本地語言模型搭配 RAG 建立法律助理原型，兼顧案件資料保密、即時查詢與知識更新能力。

## Problem

司法案件與判決資料具有隱私與敏感性，直接將內容送往外部雲端模型並不理想；同時法律知識具有時效性，需要能夠持續更新資料來源。

## Method

- 使用 **TAIDE / Local LLM** 建立本地端推論環境。
- 整理法學資料並建立 **Retrieval-Augmented Generation (RAG)** 流程。
- 透過 Prompt Engineering 改善回答格式與任務引導。
- 針對長文件先摘要或重整內容，再進行量刑/法律問答。

## Result

完成可在本地端運行的法律助理原型，支援法律資料檢索、白話說明與司法判決相關任務；實作過程中也觀察並處理長文本、檢索品質與模型回答一致性等問題。
