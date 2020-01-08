The background of the page is an interactive visualization of a specific mathematical concept in a minimalist design focused on a clean user experience.

Click on the top left button to bring a drop-down to see the possible mathematical concepts to choose from. A new drop-down will render in the same place with a conceptual description of the concept, the formulas associated with the concept, and links to where this math can be found in art and nature. There will be a button here to return to the prior drop-down where you can select one of the other mathematical concepts.

All scripts for this project are located in src/scripts. 
Install all packages with npm install and run the code using npm start.

The file structure is as follows:

    * src/

        index.js

        scripts/

        styles/

            index.scss

The External APIs used are:
* Canvas: JavaScript visualization library
* Plotly: Javascript graphing library

### The following setup Readme was based off the following with slight alterations.
[Mrcjbradley JS Project Skeleton](https://github.com/mrcjbradley/js_project_skeleton)

### 1. git init
### 2. npm init

    Install the following packages:

    npm install canvas plotly @babel/core @babel/preset-env autoprefixer babel-loader css-loader mini-css-extract-plugin fibers node-sass postcss-loader sass sass-loader style-loader webpack webpack-cli webpack-dev-server webpack-merge

### 3. Create .gitignore file. Ignore the directory /nodemodules
### 4. Create a src/ file structure
    * src/

        index.js

        scripts/

        styles/

            index.scss
### 5. Create the following files:
* webpack.common.js
* webpack.dev.js
* webpack.prod.js
* postcss.config.js

The following files are boiler-plate code taken from https://github.com/mrcjbradley/js_project_skeleton

webpack.common.js
webpackdev.js
webpackprod.js
package.json
postcss.config.js
index.html
.gitignore

The method for creating tessellations was inspired by the following article at HTML5CanvasTutorials.com https://www.html5canvastutorials.com/advanced/html5-canvas-triangle-pattern/