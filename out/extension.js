"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
/**
 * Activate the extension
 */
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
                // Si la ligne contient déjà du code (hors espaces), insérer 'debugger;' sur une nouvelle ligne avant
                if (lineText.trim().length > 0) {
                    editBuilder.insert(new vscode.Position(lineOfSelectedVar, 0), "debugger;\n");
                }
                else {
                    // Sinon, insérer 'debugger;' au début de la ligne
                    editBuilder.insert(new vscode.Position(lineOfSelectedVar, 0), "debugger; ");
                }
            }
        });
    });
    context.subscriptions.push(disposable);
}
/**
 * Deactivate the extension
 */
function deactivate() { }
//# sourceMappingURL=extension.js.map