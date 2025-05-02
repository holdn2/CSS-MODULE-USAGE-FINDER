import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  // register definition provider for CSS files
  context.subscriptions.push(
    vscode.languages.registerDefinitionProvider("css", {
      provideDefinition(document, position, token) {
        const wordRange = document.getWordRangeAtPosition(position, /\.[\w-]+/);
        if (!wordRange) return;

        const className = document.getText(wordRange).substring(1); // remove "."
        const currentDir = path.dirname(document.uri.fsPath);

        const targetFileExts = /\.(tsx|jsx|ts|js)$/;
        const files = fs
          .readdirSync(currentDir)
          .filter((file) => targetFileExts.test(file));

        for (const file of files) {
          const filePath = path.join(currentDir, file);
          const content = fs.readFileSync(filePath, "utf8");
          const lines = content.split("\n");

          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const searchPattern = `styles.${className}`;
            const column = line.indexOf(searchPattern);

            if (column !== -1) {
              const uri = vscode.Uri.file(filePath);
              const pos = new vscode.Position(i, column + 7);
              return new vscode.Location(uri, pos);
            }
          }
        }

        vscode.window.showInformationMessage(
          `No usage of styles.${className} found.`
        );
        return undefined;
      },
    })
  );
}

export function deactivate() {}
