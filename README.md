# Playwright Practice Framework

A lightweight, scalable test automation framework built using **Playwright** and **JavaScript**. This repository implements the **Page Object Model (POM)** design pattern to automate and validate a Todo application.

## 🚀 Features

* **Page Object Model (POM):** Clean separation between page elements/actions and actual test scripts.
* **Utility Helpers:** Centralized custom actions and test data management for high reusability.
* **Robust Assertions:** Leverages Playwright's built-in auto-waiting and assertions.
* **Flane-free Execution:** Configured for fast, reliable, and parallel browser testing.

---

## 📁 Repository Structure

```text
Playwright-practice-framework-main/
├── pages/
│   └── todoPage.js       # Page Object containing selectors and actions for the Todo page
├── tests/
│   └── todo.spec.js      # Test suites and test cases
├── utils/
│   ├── actions.js        # Global wrapper functions / custom Playwright actions
│   └── data.js           # Test fixtures and static data definitions
├── .gitignore            # Specifying intentionally untracked files to ignore
├── .gitattributes        # Git configuration for path attributes
└── README.md             # Project documentation

```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v16 or higher recommended).

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/Playwright-practice-framework.git
cd Playwright-practice-framework-main

```


2. Install dependencies:
```bash
npm install

```


3. Install Playwright browsers:
```bash
npx playwright install

```



---

## 🧪 Running Tests

You can run your automation scripts using the following Playwright CLI commands:

* **Run all tests in headless mode:**
```bash
npx playwright test

```


* **Run tests in headed mode (UI visible):**
```bash
npx playwright test --headed

```


* **Run a specific test file:**
```bash
npx playwright test tests/todo.spec.js

```


* **Open Playwright Test UI Mode:**
```bash
npx playwright test --ui

```



---

## 📝 Best Practices Implemented

> **Page Object Model:** Tests in `tests/todo.spec.js` do not interact directly with page elements. Instead, they call semantic methods defined in `pages/todoPage.js`.
> **Data-Driven Prep:** Static selectors, environment URLs, or string definitions are extracted into `utils/data.js` to avoid hardcoding values inside tests.

