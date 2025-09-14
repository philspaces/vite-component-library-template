# UI Library

A UI library built with Vite, React, Tailwind CSS, and Storybook.

## ✨ Features

- **React 19**: Leveraging the latest features of React.
- **Vite**: Next-generation frontend tooling for a fast development experience.
- **Tailwind CSS v4**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: Strong typing for component props and logic.
- **Storybook v9**: For UI component development and testing in isolation.
- **Vitest**: A blazing fast unit test framework powered by Vite.
- **ESLint v9 & Prettier**: For consistent code style and quality.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or newer)
- [pnpm](https://pnpm.io/)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/philspaces/vite-component-library-template.git
    cd vite-component-library-template
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

### Development

To start the Storybook development server, run:

```bash
pnpm dev
```

This will open Storybook in your browser, where you can see and interact with your components.

## Available Scripts

- `pnpm dev`: Starts Storybook dev server.
- `pnpm test`: Runs tests once with Vitest.
- `pnpm test:watch`: Runs tests in watch mode.
- `pnpm build:lib`: Builds the library for publishing.
- `pnpm lint`: Lints the codebase.
- `pnpm format`: Formats the code with Prettier.
