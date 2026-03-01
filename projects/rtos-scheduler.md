---
title: "RTOS（μC/OS-II）排程演算法實作"
layout: project
permalink: /projects/rtos-scheduler/
subtitle: "RM/EDF/FIFO + NPCS/CPP，輸出 response/preemption/blocking/miss"
hero: /assets/img/project-rtos.svg
tags: ["RTOS", "μC/OS-II", "Scheduling", "Real-time Systems"]
metrics:
  - label: "Schedulers"
    value: "RM / EDF / FIFO"
  - label: "Metrics"
    value: "Response/Preempt/Miss"
  - label: "Level"
    value: "Kernel-level"
---

## Overview
kernel-level scheduler 改寫與行為驗證，輸出關鍵指標以觀察排程行為。

## Key points
- RM/EDF/FIFO 與 NPCS/CPP
- Priority inversion / shared resources 的處理
