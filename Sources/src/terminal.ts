import * as vscode from "vscode";

const TERMINAL_NAME = "Locust";

/**
 * Run a command in terminal
 * @param command 
 */
export function run(command: string): void {
    const terminal = getTerminal();
    terminal.show();
    terminal.sendText(command);
}

/**
 * Get the terminal
 */
function getTerminal(): vscode.Terminal {
    // Try to get the terminal
    let terminal = vscode.window.terminals.find(c => c.name === TERMINAL_NAME);
    // Test if the terminal exists
    if (terminal !== undefined) {
        return terminal;
    }
    // Create a new terminal
    return vscode.window.createTerminal(TERMINAL_NAME);
}