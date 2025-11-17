```
██╗  ██╗ █████╗ ██╗     ██╗███╗   ██╗ ██████╗  █████╗ ██╗
██║ ██╔╝██╔══██╗██║     ██║████╗  ██║██╔════╝ ██╔══██╗██║
█████╔╝ ███████║██║     ██║██╔██╗ ██║██║  ███╗███████║██║
██╔═██╗ ██╔══██║██║     ██║██║╚██╗██║██║   ██║██╔══██║██║
██║  ██╗██║  ██║███████╗██║██║ ╚████║╚██████╔╝██║  ██║███████╗
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝

✨ KalingaAI — The Futuristic Chat Intelligence by Yashwant ✨
```
# ⚡ KalingaAI Chat – Futuristic AI Assistant 🤖

> A production-ready, cyberpunk-inspired AI chatbot built by **Yashwant (BCA-AIML, Kalinga University, Raipur)**.  
> It blends advanced AI (TinyLLaMA via Ollama) with a neon-lit, Nike-grade user interface designed for speed, immersion, and intelligence.

---

## 🧠 Overview

**KalingaAI** is a next-generation chatbot system designed for **Kalinga University**, combining cutting-edge AI features with an immersive, futuristic design philosophy.  
The system mimics the intelligence and responsiveness of ChatGPT — entirely powered **locally** via Ollama and Flask.

It is optimized for:
- ⚡ Real-time AI interaction  
- 🧩 Persistent and structured chat experience  
- 🌌 Cyberpunk-themed, glowing UI/UX that feels alive  

---

## 🏗️ Architecture

### 🔧 Backend – Flask + Ollama + TinyLLaMA
- Fast, scalable Flask server for chat routing  
- Integrates with **Ollama (TinyLLaMA)** at `http://localhost:11434/api/generate`  
- Handles prompt-response flow with:
  - API error tolerance  
  - Timeout recovery  
  - CORS for frontend communication  
  - Logging & debugging support  
  - Persistent chat storage (file or SQLite)

### 💻 Frontend – React + TypeScript + Tailwind + Vite
- Modern **SPA** (Single Page App) for real-time AI chat  
- Animated chat interface inspired by **Nike** & **Cyberpunk 2077**  
- Dark mode / Light mode with smooth transitions  
- Markdown rendering (bold, italic, lists, code blocks)  
- “Thinking…” typing indicators  
- Auto-scroll & sound-enhanced message flow  

---

## 🎨 Design Philosophy

A perfect fusion of **AI intelligence** + **cyberpunk art direction**, focused on feeling *alive* while staying *minimal*.

### ✴️ Visual Highlights:
- **Glowing neon edges** with glassmorphism  
- **Orbitron / Exo / Rajdhani fonts** for futuristic typography  
- **Electric blue + magenta gradients**  
- **Chat bubble animations** and **holographic panels**  
- **Sound FX** for message send/receive (whoosh + ping)  
- **Nike UI inspiration** – clean, high-contrast, animated  

---

## ✨ Core Functional Features

| Feature | Description |
|----------|-------------|
| 💬 Chat Interface | Real-time conversation with AI |
| 🧾 Markdown Support | Bold, italics, bullet points, and code formatting |
| 🔄 Auto Scroll | Automatically scrolls to the latest message |
| 🔊 Sound Effects | Send = whoosh • Receive = ping |
| 🕒 Persistent History | Saves past conversations locally |
| 💡 Theme Toggle | Cyberpunk Dark / Light mode with animation |
| ⚠️ Error Handling | Graceful messages for network or AI unavailability |
| 🧠 AI Integration | Uses Ollama + TinyLLaMA for local inference |

---

## 🧩 Folder Structure

```bash
/kalingaai
├── client/                # Frontend (React + Vite + Tailwind)
│   ├── public/
│   │   └── sounds/        # send.mp3 + receive.mp3
│   └── src/
│       ├── App.tsx        # Main chat UI
│       ├── main.tsx       # Entry point
│       ├── index.css      # Global styles
│       └── components/    # Future modular UI parts
│
├── server/                # Backend (Flask)
│   ├── index.ts           # Express/Flask integration
│   └── routes.ts          # Chat API routes
│
└── README.md              # Project documentation
