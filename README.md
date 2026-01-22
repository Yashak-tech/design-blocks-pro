
# 🧠 Visual Designer

### A DOM-Only Figma-Style Design Editor (Built with Lovable)

> A full-featured, browser-based visual design editor built **entirely with DOM elements**, inspired by Figma — without canvas, SVG, or external frameworks.
> Designed to demonstrate deep understanding of UI systems, DOM manipulation, editor architecture, and product UX.

---

## 🚀 Live Demo

👉 https://design-blocks-pro.lovable.app

---

## 🎯 Project Overview

**Visual Designer** is a modern, multi-page design tool that allows users to visually create, manipulate, and export layouts using only HTML/CSS-based elements.

The project was built using **Lovable** as a no-code full-stack platform, but the architecture, system design, UX flows, and editor logic were intentionally engineered to mirror real-world design tools like Figma and Framer.

This is **not a toy editor** — it’s a mini design engine implemented on top of the DOM.

---

## 🧩 Why This Project Is Different

Most design editors use `<canvas>` or SVG.
This one uses **pure DOM elements**.

That means:

* Every shape is a real `<div>`
* Every interaction is native DOM math
* Every export is production-ready HTML
* No rendering engines
* No shortcuts

This makes the project both technically challenging and extremely transparent.

---

## ✨ Features

### 🧭 Product Experience

* Premium landing page before editor
* Multi-page app (Landing, Features, Templates, Editor, Docs)
* Smooth page transitions
* Figma-like dark UI with cyan accents
* Custom cursor system (resize, drag, rotate, pan, text)

### 🎨 Editor Core

* Rectangle & Text creation
* Single & multi-selection
* Drag with bounds + smart snap
* Corner-only resizing
* Rotation handle + inspector control
* Layers panel with z-index control
* Properties panel (size, color, text, rotation)
* Grouping & nesting
* Keyboard shortcuts (Delete, Arrows, etc.)
* Zoom & pan workspace
* Undo / Redo system

### 🧱 System-Level Features

* Constraint-based layout logic
* Parent-child relationships
* Component system (master + instances)
* Design tokens (colors, fonts, spacing)
* Template gallery
* Inspector mode (layout visualization)

### 💾 Persistence & Export

* Auto-save to localStorage
* JSON export (full editor state)
* Standalone HTML export (pixel-perfect)
* CSS-separated export
* React JSX export (DOM-only)

### 📚 Onboarding & Docs

* In-app help panel
* First-time user walkthrough
* Embedded architecture documentation
* Sample project preloaded

---

## 🏗️ Architecture Overview

The editor is built as a **state-driven system**:

```text
App Shell
 ├── Routing (Pages)
 │    ├── Landing
 │    ├── Templates
 │    ├── Editor
 │    └── Docs
 ├── Editor Engine
 │    ├── Elements State
 │    ├── Selection System
 │    ├── Drag/Resize/Rotate
 │    ├── History (Undo/Redo)
 │    └── Export Engine
 ├── UI Panels
 │    ├── Toolbar
 │    ├── Layers
 │    ├── Properties
 │    └── Status Bar
 └── Persistence Layer
      └── localStorage
```

Every interaction is a state mutation — no hidden magic, no canvas tricks.

---

## 🛠️ Tech Stack

* **Lovable** — Full-stack no-code platform (UI, state, persistence, routing)
* **HTML** — DOM-based rendering
* **CSS** — Styling, transitions, layout
* **JavaScript (via Lovable logic)** — State, events, math
* **localStorage** — Persistence
* **Pure DOM** — No canvas, no SVG, no external libraries

---

## 🧠 Design Decisions

### Why DOM instead of Canvas?

Because it’s harder — and more educational.

It forces:

* Real coordinate math
* Real layout constraints
* Real browser behavior handling
* Real export logic

This mirrors how real editors are engineered internally.

---

### Why Lovable?

Lovable was used to:

* Rapidly prototype complex UI
* Manage state visually
* Build multi-page flows without boilerplate
* Focus on **architecture and UX**, not setup

The engineering challenge was in **system design**, not syntax.

---

## 🧪 Evaluation Criteria (Competition Mapping)

| Criteria      | How It’s Addressed                           |
| ------------- | -------------------------------------------- |
| Creativity    | DOM-only editor, component system, templates |
| UI/UX         | Premium dark UI, cursor system, onboarding   |
| Functionality | Drag, resize, rotate, export, persist        |
| Engineering   | State engine, constraints, history, grouping |
| Completeness  | Multi-page product, not just a tool          |

---

## 📸 Screenshots

*(Add screenshots here — landing, editor, templates, export)*

---

## 🧑‍💻 Author

**Yash Kakade**
B.Tech Engineering Student
Focused on UI systems, DOM architecture, and product-grade engineering


---

## ⭐ Final Note

This project is intentionally over-engineered for a competition submission.
The goal was to demonstrate **how far the DOM can be pushed** when treated like a real rendering engine.

If you understand this codebase, you understand how editors are built.

---

If you want, next I can:

* Rewrite this README for **recruiters**
* Make a **judge-focused version**
* Generate a **killer project demo script**
* Write a **LinkedIn post that makes this go viral**

Just tell me.

