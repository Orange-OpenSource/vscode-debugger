/*
 * Software Name : Vscode-debugger
 * SPDX-FileCopyrightText: Copyright (c) Orange
 * SPDX-License-Identifier: MIT
 *
 * This software is distributed under the MIT,
 * see the "LICENSE.txt" file for more details or https://opensource.org/license/mit
 *
 * Software description: Easily add or remove the `debugger;` statement in your JavaScript (js) / Typescript (ts) files with a simple shortcut. (Ctrl+Alt+D)
 */

import * as vscode from "vscode";

/**
 * Activate the extension
 */
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "vscodedebugger.debugger",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }
      const selection = editor.selection;
      const lineOfSelectedVar = selection.active.line;
      const document = editor.document;
      const lineText = document.lineAt(lineOfSelectedVar).text;

      editor.edit((editBuilder) => {
        if (lineText.includes("debugger")) {
          // Remove all instances of 'debugger' in the line
          const newText = lineText.replace(/\bdebugger;?\s?/g, "");
          const range = document.lineAt(lineOfSelectedVar).range;
          editBuilder.replace(range, newText);
        } else {
          // If the line is not empty, insert 'debugger;' at the start
          if (lineText.trim().length > 0) {
            editBuilder.insert(
              new vscode.Position(lineOfSelectedVar, 0),
              "debugger;\n",
            );
          } else {
            // If the line is empty, insert 'debugger;'
            editBuilder.insert(
              new vscode.Position(lineOfSelectedVar, 0),
              "debugger; ",
            );
          }
        }
      });
    },
  );

  context.subscriptions.push(disposable);
}

/**
 * Deactivate the extension
 */
export function deactivate() {}
