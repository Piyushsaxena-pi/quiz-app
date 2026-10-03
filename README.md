# 🧠 Interactive Quiz App

A clean, timer-based quiz application built with **vanilla HTML, CSS, and JavaScript**. It walks users through a welcome screen, a timed multiple-choice quiz with a live progress bar, and a results screen with a score summary — no frameworks, no dependencies, just plain JS modules.

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Demo](#-demo)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

- 🚀 **Start screen** — a simple, inviting entry point before the quiz begins
- ⏱️ **Countdown timer** — tracks and displays time remaining for the quiz
- 📊 **Live progress bar** — shows current question number out of the total
- ✅ **Single-answer selection** — the "Next" button stays disabled until an option is picked
- 🏁 **Results screen** — displays final score, total questions, and a percentage breakdown
- 🔁 **Retry option** — restart the quiz instantly from the results screen
- 🧩 **Modular JavaScript** — quiz logic organized using ES modules (`components/`)

---

## 🛠️ Tech Stack

- **HTML5** — markup and screen structure (`quiz.html`)
- **CSS3** — styling and layout (`quiz.css`)
- **JavaScript (ES6+ Modules)** — quiz logic, state handling, and DOM interactions (`quiz.js` + `components/`)

No build tools, frameworks, or external dependencies are required — it runs directly in the browser.

---

## 🎮 Demo

> Add a live demo link here once deployed (e.g. via GitHub Pages, Netlify, or Vercel):
> ```md
> 🔗 [Live Demo](your-deployed-link-here)
> ```

---

## 🚀 Getting Started

Since this is a dependency-free, static project, you can run it in two simple ways:

### Option 1 — Open directly in browser

1. **Clone the repository**
   ```bash
   git clone https://github.com/Piyushsaxena-pi/quiz-app.git
   cd quiz-app
   ```
2. Open `quiz.html` directly in your browser.

### Option 2 — Run with a local server (recommended, since `quiz.js` uses ES modules)

1. **Clone the repository**
   ```bash
   git clone https://github.com/Piyushsaxena-pi/quiz-app.git
   cd quiz-app
   ```
2. **Serve it locally** (using VS Code's Live Server extension, or):
   ```bash
   npx serve .
   ```
3. Open the local URL shown in your terminal (e.g. `http://localhost:3000`).

> ⚠️ Opening `quiz.js` directly via `file://` may block ES module imports in some browsers — a local server avoids this.

---

## 📁 Project Structure

```
quiz-app/
├── components/        # Modular JS files (questions data, UI logic, etc.)
├── quiz.html          # Main markup — start, question, and results screens
├── quiz.css           # Styling for all quiz screens and components
├── quiz.js            # Core quiz logic (timer, scoring, navigation)
└── README.md
```

---

## ⚙️ How It Works

1. The **start screen** greets the user and offers a "Start Quiz" button.
2. Once started, the **question screen** displays one question at a time, along with:
   - A progress indicator (`Question X of 10`)
   - A live countdown timer
   - Answer options to choose from
3. The **Next** button is disabled until an answer is selected, then advances to the next question.
4. After the final question, the **results screen** shows the final score, total questions, and a percentage score.
5. Users can hit **Try Again** to restart the quiz from scratch.

---

## 🎨 Customization

- **Change the questions** — update the question data inside the `components/` folder.
- **Adjust the timer** — modify the time limit logic in `quiz.js`.
- **Change the number of questions** — update the question count references in `quiz.html` and `quiz.js`.
- **Restyle the UI** — all visual styling lives in `quiz.css`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source. Consider adding a [LICENSE](LICENSE) file (e.g. MIT) so others know how they can use your code.

---

## 👤 Author

**Piyush Saxena**

- GitHub: [@Piyushsaxena-pi](https://github.com/Piyushsaxena-pi)

---

⭐ If you found this project useful, consider giving it a star on GitHub!
