import * as vscode from 'vscode'
export function activate(context: vscode.ExtensionContext) {
	// let disposable = vscode.commands.registerCommand('extension.tffecode', () => {
	// 	vscode.window.showInformationMessage('Hello World!')
	// })
	// context.subscriptions.push(disposable)
}
export function deactivate() {
	console.log('插件tffecode已被卸载！')
}
