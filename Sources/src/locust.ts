import * as terminal from "./terminal";
import * as vscode from "vscode";
import * as path from "path";

const LOCUST_URI = "http://localhost:8089/";

/**
 * Use a file with locust
 * @param document 
 */
export function run(document: vscode.TextDocument): void {
    if (document.languageId === "python") {
        // Run locust with a pyhton file
        terminal.run(`locust --locustfile "${document.fileName}"`);
    }
    else {
        const dir = path.dirname(document.fileName);
        // Go to the folder of the config file
        terminal.run(`cd ${dir}`);
        // Run locust with a config file
        terminal.run(`locust --config "${document.fileName}"`);
    }
    // Open the browser
    vscode.env.openExternal(vscode.Uri.parse(LOCUST_URI));
}