# 🧪 TexLab: Your Interactive LaTeX Math Playground

Welcome to **TexLab**! 🎉 This is a simple yet elegant single-page web application designed to help you render, explore, and learn LaTeX mathematical expressions. Whether you're a student, educator, or researcher, TexLab provides an intuitive environment to work with mathematical notation.

## ✨ Features

TexLab comes packed with features to enhance your LaTeX math rendering experience:

- **Real-time LaTeX Rendering**: Instantly see your LaTeX math code transformed into beautifully typeset equations using KaTeX. 🚀
- **Copy LaTeX Input**: Easily copy the raw LaTeX code from the input area to your clipboard with a single click. 📋
- **Download Rendered Output**: Export your rendered equations as high-quality images (PNG) or PDF documents for easy sharing and integration into your projects. 🖼️📄
- **Comprehensive LaTeX Documentation**: An in-app, scrollable documentation section provides a quick reference for common LaTeX math syntax, complete with code examples and rendered previews. 📚
- **Mobile Responsive Design**: Enjoy a seamless experience across various devices, from desktops to smartphones. 📱
- **Keyboard Shortcuts**: Boost your productivity with `Ctrl + Enter` to quickly render your LaTeX input. ⌨️
- **Clear Input**: A dedicated button to quickly clear the input area and start fresh. 🧹

## 🛠️ Technologies Used

TexLab is built with modern web technologies to ensure a smooth and efficient user experience:

- **Frontend**:
  - [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/) for a fast development environment
  - [Tailwind CSS](https://tailwindcss.com/) for utility-first styling 🎨
  - [Shadcn/UI](https://ui.shadcn.com/) for beautiful and accessible UI components 💅
  - [tw-animate-css](https://github.com/InternalError-J/tw-animate-css) for simple animations
- **LaTeX Rendering**:
  - [KaTeX](https://katex.org/) for fast and high-quality math typesetting.
- **Export Functionality**:
  - [html-to-image](https://github.com/bubkoo/html-to-image) for converting rendered output to images.
  - [jsPDF](https://github.com/parallax/jsPDF) for generating PDF documents.

## 🚀 Getting Started

Follow these steps to get TexLab up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/texlab.git
    cd texlab
    ```

    _(Replace `https://github.com/your-username/texlab.git` with the actual repository URL if different.)_

2.  **Install dependencies**:
    ```bash
    npm install
    ```
    This command will install all the necessary packages, including React, Tailwind CSS, KaTeX, and other utilities.

### Running the Development Server

To start the development server and view the application in your browser:

```bash
npm run dev
```

The application will typically be available at `http://localhost:5173/`. Vite provides hot module replacement (HMR) for a fast development workflow.

### Building for Production

To create a production-ready build of the application:

```bash
npm run build # which runs `tsc -b && vite build`
```

This will compile and optimize your code into the `dist` directory, ready for deployment.

## 📂 Project Structure

The project follows a standard React application structure, with components organized for reusability and maintainability:

```
latex_viewer/
├── public/
├── src/
│   ├── App.css
│   ├── App.tsx             # Main application component
│   ├── index.css
│   ├── main.tsx            # Entry point for React app
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── CodeBlock.tsx       # Custom component for displaying code
│   │   ├── DocLatexRenderer.tsx  # KaTeX renderer for documentation examples
│   │   ├── Documentation.tsx   # Component for LaTeX syntax reference
│   │   ├── InputForm.tsx       # Input area and control buttons
│   │   ├── LatexRenderer.tsx   # Main KaTeX renderer for user input
│   │   └── ui/                 # Shadcn/UI components
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── switch.tsx
│   │       ├── textarea.tsx
│   │       └── dropdown-menu.tsx
│   └── lib/
│       └── utils.ts
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html              # Main HTML file
├── package-lock.json
├── package.json
├── README.md               # This file
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 💡 Usage

1.  **Enter LaTeX Math**: Type or paste your LaTeX mathematical expressions into the large text area.
2.  **Render**: Click the "Render" button (or press `Ctrl + Enter`) to see the typeset output above the input area.
3.  **Copy**: Click "Copy LaTeX" to copy your raw input to the clipboard.
4.  **Download**: Use "Download PNG" or "Download PDF" to save the rendered equation.
5.  **Explore Documentation**: Scroll down to the "TexLab Documentation" section for examples and syntax references.
    Expand each accordion item to view descriptions, code, and rendered previews.

## 📚 Documentation Section

The in-app documentation is a key feature, providing a quick and accessible reference for LaTeX math syntax. It's structured into expandable categories:

- **Basic Syntax**: Inline vs. display math (`\(...\)` and `\[...\]`).
- **Superscripts & Subscripts**: `x^2`, `x_1`, nesting.
- **Fractions & Roots**: `\frac{a}{b}`, `\sqrt{x}`, `\sqrt[n]{x}`.
- **Greek Letters**: `\alpha`, `\beta`, etc.
- **Operators**: `\pm`, `\times`, `\leq`, etc.
- **Summations & Integrals**: `\sum`, `\int`.
- **Matrices**: `\begin{matrix}`, `\begin{bmatrix}`.
- **Brackets & Delimiters**: `\left( ... \right)`.
- **Text in Math Mode**: `\text{}` usage.

Each entry includes:

- A short description.
- The raw LaTeX code in a `CodeBlock`.
- A rendered preview using KaTeX.
- Helpful tips or notes.

## ♿ Accessibility (a11y)

TexLab is built with accessibility in mind, adhering to best practices for semantic HTML and ARIA attributes where appropriate, ensuring a usable experience for all users.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to open an issue or submit a pull request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
