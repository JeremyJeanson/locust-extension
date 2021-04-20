# Locust Extension
Visual Studio Code extension to simplify the usage of [Locust](https://locust.io/)

## Features available from the command palette
- Commands to manage the locus deployment:
    - Locus: Install		
    - Locus: Uninstall		
    - Locus: Upgrade		
- Run tests from *.py or *.conf files (the file to run should be opened first).
    - Locust: Run load test with Locust

## Editor integration
Load test could be could be run from the editor toolbar (click on the Locust icon).

![Run locust form the editor](https://raw.githubusercontent.com/JeremyJeanson/locust-extension/main/Assets/editor-toolbar.png)

When test started :
- Locus is started from the terminal.
- Your bowser is used to navigate to the Locust website http://localhost:8089/.

To stop Locust, close the terminal or stop the Locust process  (<kbd>Ctrl</kbd>+<kbd>C</kbd> on Windows or Linux, <kbd>^</kbd>+<kbd>C</kbd> on Mac).

## Contribute or report issues
You can report any issue via GitHub. If you found one, please report it! This code was open to be shared and improved. If you have an idea, tell it or send a pull request. 