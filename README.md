es6 modules example
===========

Packages and tools used
---
systemjs, jspm, jquery, bootstrap, d3, es6 modules, WebStorm

Steps
---

1. Install nodejs
2. Open terminal and run:

    ```sh
    mkdir es6-example
    cd es6-example
    mkdir modules
    touch modules/main.js
    npm install jspm
    npm install gulp
    jspm install
    jspm install text css json jquery bootstrap d3
    ```
    
2. If jspm has an error make sure jspm_packages folder exists in the project root or try: 
    
    ```sh
    npm cache clean
    ```
    
3. Create index.html:

    ```javascript
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="jspm_packages/system.js"></script>
        <script src="config.js"></script>
    </head>
    <body>
        <script>
            System.import('./modules/main');
        </script>
    </body>
    </html>
    ```
