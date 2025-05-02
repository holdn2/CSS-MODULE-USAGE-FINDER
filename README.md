# CSS Module Usage Finder – VSCode Extension

A helpful Visual Studio Code extension for React developers who use **CSS Modules**.

This extension allows you to jump directly from a CSS class defined in a `.module.css` file to where it's used as `styles.className` in your nearby React code.

---

## ✨ Features

- Use `Ctrl + Click` on Windows/Linux or `Cmd + Click` on macOS to jump from a class name in a `.module.css` file to its usage as `styles.className` in `.tsx`, `.jsx`, `.ts`, or `.js` files in the same folder.

- If no usage is found, a message like the following will appear:

  ```
  No usage of styles.YourClassName found.
  ```

---

## 🎥 Demo

See how easily you can jump from a CSS Module class to its usage in code:

![Demo](https://i.imgur.com/HdcRBs7.gif)

## 🔍 Example

**Example.module.css**

```css
.button {
  background: red;
}
```

**Example.tsx**

```tsx
import styles from "./Example.module.css";

export function MyComponent() {
  return <div className={styles.button}>Click me</div>;
}
```

By pressing `Ctrl + Click` or `Cmd + Click` on `.button` in `Example.module.css`, you will jump to the `styles.button` usage in the component file.

---

## ⚠ Limitations

- Only searches within files in the **same folder** as the `.module.css` file.
- Only matches direct usage like `styles.className`, not dynamic usages (`styles[someVar]`).

---

## 🛠 Installation

Install via the [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=uchan0.css-module-usage-finder) or by running:

```bash
code --install-extension uchan0.css-module-usage-finder
```

---

## 🔧 Feedback & Contributions

Feel free to suggest improvements or report bugs via the [GitHub repository](https://github.com/holdn2/CSS-MODULE-USAGE-FINDER).

---

## 📄 License

MIT
