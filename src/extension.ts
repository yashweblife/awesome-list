import { readFileSync } from 'fs';
import { join } from "path";
import * as vscode from 'vscode';
function getWebViewContent(p: string) {
	const resPath = vscode.Uri.file(
		join(__dirname, p)
	)
	const file = readFileSync(resPath.fsPath, 'utf-8');
	return file;
}

export function activate(context: vscode.ExtensionContext) {
	console.log("Hello World");
	const disposable = vscode.commands.registerCommand("awesome-list.open", function () {
		const panel = vscode.window.createWebviewPanel("awesomeList", "Awesome List", vscode.ViewColumn.Beside, {
			enableScripts:true
		});
		panel.webview.html = getWebViewContent("./index.html");
		vscode.window.showInformationMessage("Hello World");
	});
	context.subscriptions.push(disposable);
}
export function deactivate() { }
