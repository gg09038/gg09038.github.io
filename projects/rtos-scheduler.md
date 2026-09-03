---
layout: project
title: "μC/OS-II 即時排程與核心層實作"
kicker: "Course Project · Embedded OS"
subtitle: "Kernel-level scheduler modification, TCB tracing, deadline handling and resource protocols"
hero: "/assets/img/RTOS.png"
tags: ["RTOS", "C", "μC/OS-II", "Scheduler", "Kernel", "Real-time"]
metrics:
  - label: "Schedulers"
    value: "RM / FIFO / EDF / CUS"
  - label: "Protocols"
    value: "NPCS / CPP"
  - label: "Implementation"
    value: "Kernel-level"
permalink: /projects/rtos-scheduler/
---

# μC/OS-II 即時排程與核心層實作

> **一句話摘要**：修改 μC/OS-II 核心層程式碼，實作與分析多種即時排程器、deadline handling、TCB linked list 與共享資源協定。

## Scope

此課程實作不是只呼叫 RTOS API，而是直接閱讀並修改 μC/OS-II scheduler 與 kernel source code，以觀察 context switch、TCB 與 task scheduling 的實際行為。

## Implemented Components

### Scheduler

- **Rate Monotonic (RM)**
- **FIFO** non-preemptive scheduling
- **Earliest Deadline First (EDF)**
- **Constant Utilization Server (CUS)** for aperiodic jobs

### Kernel / Task State

- TCB dynamic address 與 linked list 追蹤
- Current / Next task 切換
- Context switch 次數
- Response time / Preemption time
- Deadline miss detection 與處理

### Shared Resource Protocol

- **Non-Preemptible Critical Section (NPCS)**
- **Ceiling-Priority Protocol (CPP)**
- Priority inversion、blocking time 與 resource locking 行為分析

## Why it matters

這些實作讓我從「使用作業系統」進一步理解到 scheduler 如何在 kernel 層決定 task 執行順序、如何維護 task state，以及共享資源如何影響即時性。對後續嵌入式軟體與韌體工作而言，也建立了較扎實的 RTOS 基礎。
