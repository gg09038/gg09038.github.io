---
title: "KL730：RGB + Thermal 疊合對齊（ToF 輔助）"
permalink: /projects/kl730-fusion/
---

# KL730：RGB + Thermal 疊合對齊（ToF 輔助）
> **Problem → Method → Experiments → Results → Demo/Repo**

**一句話摘要**：在 KL730 邊緣裝置上整合 RGB/熱像/ToF，多距離資料蒐集 + Homography 對齊，做到可疊合顯示、可操作微調、可遠端控制、並加入熱點/拍照/YOLO 物件辨識。

---

## Problem（問題）
RGB 與熱像相機視角/鏡頭/畸變不同，直接疊合會錯位；而邊緣裝置資源有限，需要一個「計算量合理、可在多場景穩定運作」的對齊與展示流程，並提供使用者操作介面（按鍵/搖桿/網頁）。

---

## Method（方法）
### 1) 硬體整合（多源輸入）
- Kneron Pi（KL730）  
- Broadcom ToF 距離感測（0.5m ~ 30m）  
- Obsidian 熱像相機（680×480）  
- IMX219 RGB 相機（最高到 3840×2160；常用 1920×1080 / 680×480）

> 圖：系統架構/接線示意  
![](/assets/img/projects/kl730/system.png)

### 2) 影像校正與疊合（Fisheye → Homography）
- 熱像端先做魚眼校正（必要時）  
- 以 **透視轉換 / Homography（3×3）** 做平面對齊  
- **多距離資料蒐集**：不同距離下標記配對點，生成對應距離的矩陣表  
- 由 ToF 提供單點距離，系統依距離選擇對應矩陣（提升穩定性）

> 圖：資料蒐集 → 標記 → 匯入矩陣 → 系統依距離套用  
![](/assets/img/projects/kl730/calibration_pipeline.png)

### 3) 使用者操作與功能
- 疊合影像微調（搖桿上下左右；可重置）
- IR 顯示風格（六種色彩）
- 疊合透明度（五檔）
- 熱點偵測
- 自訂秒數儲存影像 / 拍照
- AI 物件辨識（YOLO：顯示物件名稱與信心度）
- 多重影像輸出模式（顯示/傳輸）
- 遠端網頁控制（Web UI）

> 圖：UI / 操作流程截圖  
![](/assets/img/projects/kl730/ui.png)

---

## Experiments（實驗）
### 資料蒐集與標記
- 選擇與環境有溫差、邊緣清晰的標記物  
- 量測多個距離（最遠距離依需求設定）  
- 將對應距離的資料匯入工具標記，產生 Homography 表

### 功能驗證
- 室內場景、室外/動態場景：驗證疊合穩定度、操作流程、遠端控制、YOLO 顯示等。

---

## Results（結果）
- 完成 KL730 上的「多源影像輸入 → 校正/疊合 → 顯示/傳輸 → UI 操作」整合
- 功能包含：微調、色彩/透明度、熱點、拍照、自訂儲存秒數、YOLO、遠端網頁控制等

> 圖：疊合結果（建議放 2–3 張：室內 + 室外 + 動態）  
![](/assets/img/projects/kl730/result_indoor.png)  
![](/assets/img/projects/kl730/result_outdoor.png)

---

## Demo / Repo
- Demo（室內）：https://youtu.be/AROkHkRmdvg  
- Demo（室外/動態）：https://youtu.be/cx5LC9ij29A  
- Repo：*（若可公開放這裡）*
