# 🍎 AlgoFruit Lab (Visual Algo Suite)

Interactive web-based laboratory for visualizing sorting and searching algorithms. Built with a focus on clean architecture, performance, and real-time execution control.

## ✨ Features

- **🎬 Real-time Visualization**: Watch algorithms manipulate data step-by-step with smooth UI updates.
- **⏸️ Execution Control**: Pause, resume, and completely abort (via `AbortController`) asynchronous algorithm execution on the fly.
- **💻 Language Agnostic Code Viewer**: Side-by-side view of the executing algorithm in **Python** and **C#** (optimized lazy-loaded syntax highlighting).
- **🧩 DRY & Modular Forms**: Unified control panels built with Generics and `react-hook-form`.
- **🔔 Smart Notifications**: Integrated toast system to report search results and execution interruptions.

## 🏗️ Architecture: Feature-Sliced Design (FSD)

This project strictly adheres to the **Feature-Sliced Design** architectural methodology to ensure scalability and maintainability:

- `app/` - Global initialization, routing, and styles.
- `pages/` - Routable components (Sorting, Searching).
- `widgets/` - Self-contained blocks (AlgoVisualizer, CodeViewer, AlgoControls).
- `features/` - Business logic and algorithm implementations (Bubble Sort, Quick Sort, Binary Search, etc.).
- `entities/` - Business entities (Fruit data models).
- `shared/` - Reusable UI components, hooks (`useAlgorithm`), and utilities.

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form
- **State/Async Management**: Custom Hooks + Web API (`AbortController`, `Promise`)
- **UI Libraries**: Sonner (Toasts), React-Syntax-Highlighter (Prism Light)

## 🚀 Getting Started

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/visual-algo-suite.git
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## 📚 Implemented Algorithms

**Sorting**: Bubble Sort, Insertion Sort, Selection Sort, Quick Sort, Merge Sort.
**Searching**: Linear Search, Binary Search.

---

_Developed for the 126 Major Educational Program._
