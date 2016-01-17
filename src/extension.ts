// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    var disposable = vscode.commands.registerCommand('extension.goToDefinitionInNextEditor', () => {
        if (!vscode.window.activeTextEditor) {
            return null;
        }

        let col = vscode.window.visibleTextEditors.indexOf(vscode.window.activeTextEditor) + 2;
        let sel = vscode.window.activeTextEditor.selection;

        vscode.window.showTextDocument(vscode.window.activeTextEditor.document, col).then(() => {
            vscode.window.activeTextEditor.selection = sel;
            vscode.commands.executeCommand("editor.action.goToDeclaration")
        })
    });

    context.subscriptions.push(disposable);
}
