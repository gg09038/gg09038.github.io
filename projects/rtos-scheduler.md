---
title: "RTOS（μC/OS-II）排程演算法實作"
permalink: /projects/rtos-scheduler/
---

# RTOS（μC/OS-II）排程演算法實作
> **Problem → Method → Experiments → Results → Demo/Repo**

**一句話摘要**：在 μC/OS-II 做 kernel-level scheduler 改寫，實作 RM/EDF/FIFO 與 NPCS/CPP，並輸出 response/preemption/blocking/miss deadline 指標來驗證行為。

---

## Problem（問題）
即時系統要在 deadline 約束下穩定排程，當 task 共享資源、存在 priority inversion 或臨界區時，排程策略（RM/EDF/FIFO）與資源協定（NPCS/CPP）會直接影響可排程性與 deadline miss 率。目標是在 OS kernel 層實作並驗證這些行為。

---

## Method（方法）
- Scheduler：RM / EDF / FIFO
- Resource protocol：NPCS / CPP（處理共享資源、避免/緩解 priority inversion）
- 驗證輸出：每個 task 的 response time、preemption、blocking time、deadline miss（可用 log/表格呈現）

> 圖：排程與資源協定示意  
![](/assets/img/projects/rtos/diagram.png)

---

## Experiments（實驗）
（你可以把實驗配置寫得像論文，這裡我先留模板）
- Workload：*（填 task 數、period、execution time、deadline 等）*
- Shared resources：*（填資源數量、哪些 task 會 lock）*
- Compare：RM vs EDF vs FIFO；有無 NPCS/CPP
- Metrics：deadline miss count、平均/最大 response time、平均 blocking time

---

## Results（結果）
（建議貼你跑出來的 log 統計表，作品集會非常像論文）
| Policy | Protocol | Miss count | Avg response | Max response | Avg blocking |
|---|---|---:|---:|---:|---:|
| RM | None |  |  |  |  |
| RM | CPP |  |  |  |  |
| EDF | None |  |  |  |  |
| EDF | CPP |  |  |  |  |

---

## Demo / Repo
- Repo：*（若可公開放這裡）*
