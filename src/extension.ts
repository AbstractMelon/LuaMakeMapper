import * as vscode from 'vscode';
import { LuaCompletionProvider } from './completionProvider';
import { LuaHoverProvider } from './hoverProvider';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "Lua Map Maker" is now active!');
    
    vscode.window.showInformationMessage("Lua Map maker extension has loaded!");

    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider('blua', new LuaCompletionProvider())
    );

    context.subscriptions.push(
        vscode.languages.registerHoverProvider('blua', new LuaHoverProvider())
    );
}
