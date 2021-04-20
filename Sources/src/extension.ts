// The module 'vscode' contains the VS Code extensibility API
import * as vscode from "vscode";
import * as terminal from "./terminal";
import * as locust from "./locust";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Install
	context.subscriptions.push(vscode.commands.registerCommand('locust-extension.install', () => {
		terminal.run("pip3 install locust");
	}));

	// Uninstall
	context.subscriptions.push(vscode.commands.registerCommand('locust-extension.uninstall', () => {
		terminal.run("pip3 uninstall locust --yes");
	}));

	// Upgrade
	context.subscriptions.push(vscode.commands.registerCommand('locust-extension.upgrade', () => {
		terminal.run("pip3 install --upgrade locust");
	}));

	// Run
	context.subscriptions.push(vscode.commands.registerCommand('locust-extension.run', () => {
		// Try to get the file to use
		const file = getFile();
		if (file === undefined) {
			return;
		}
		// Use locust
		locust.run(file);
	}));
}

// this method is called when your extension is deactivated
export function deactivate() { }

function getFile(): vscode.TextDocument | undefined {
	// Try to get the current file
	const editor = vscode.window.activeTextEditor;
	if (editor === undefined) {
		return undefined;
	}
	// Test if the current file should be saved
	if (editor.document.isDirty || editor.document.isUntitled) {
		vscode.window.showWarningMessage(`The file ${editor.document.fileName} should be saved first.`);
		return undefined;
	}

	return editor.document;
}
