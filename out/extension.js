"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand("vscodedebugger.debugger", () => {
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
            }
            else {
                // Insert 'debugger;' at the beginning of the line
                editBuilder.insert(new vscode.Position(lineOfSelectedVar, 0), "debugger; ");
            }
        });
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map