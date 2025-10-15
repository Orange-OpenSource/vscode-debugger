<br>
<div align="center">
   <img src="images/icon.png" alt="Debugger Icon" width="100"/>
</div>
<br>

# Debugger Keyword Shortcut for JavaScript

**Easily add or remove the `debugger;` statement in your JavaScript (js) / Typescript (ts) files with a simple shortcut.**

## 🛠️ Installation

You can install this extension directly from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stephanebouget.vscode-debugger):

1. Open the Extensions view in VS Code (`Ctrl+Shift+X`).
2. Search for `vscode-debugger` or `stephanebouget.vscode-debugger`.
3. Click **Install**.
4. Or, visit the [marketplace page](https://marketplace.visualstudio.com/items?itemName=stephanebouget.vscode-debugger) and click **Install**.

## ✨ Features

- **Toggle behavior:** The shortcut adds or removes `debugger;` on the selected line.
- If the line already contains code, `debugger;` is inserted on a new line before the existing code.
- Adds `debugger;` to the selected line with the shortcut.
- Default shortcut: **Ctrl+Alt+D** (customizable in VS Code keybindings: `Ctrl+K Ctrl+S`).

## 🚀 Usage

1. Place your cursor on the line you want to toggle the `debugger;` statement.
2. Press **Ctrl+Alt+D** (or your custom shortcut).
3. The extension will add or remove `debugger;` as needed:
   - If the line is empty, `debugger;` is added directly.
   - If the line contains code, `debugger;` is inserted on a new line above.
   - If `debugger;` is already present, it will be removed.

## 📄 License

vscode-debugger is under the MIT license. See the LICENSE file for details.
