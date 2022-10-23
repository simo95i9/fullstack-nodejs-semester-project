import {Temporal} from "@js-temporal/polyfill"
import outdent from 'outdent';

export const article = {
    slug: "npm",
    created: new Temporal.PlainDate(2022, 10, 10),
    updated: new Temporal.PlainDate(2022, 10, 14),
    author: "Simon Gredal",
    title: "An Introduction to the Node.JS Package Manager",
    content: [
        {
            type: "figure",
            src: "/images/packages.webp",
            alt: "A three-wheeled scooter loaded with hundreds of packages",
            text: "This what your node_modules folder looks like.",
            class: "16x9"
        },
        {
            type: "p",
            text:
                `NPM is an essential tool when you're building software with Node.JS.
                In the following we will take a look at how to create a new project,
                understanding <code>package.json</code>, installing dependencies, and
                using how to execute your project. While you can manually invoke commands
                such as <code>npm install package</code> to install dependencies and
                <code>node app.js</code> to run you program, the best way to make use of
                <code>npm</code> is to control it with a <code>package.json</code> file.
                `
        },
        {
            type: "p",
            text:
                `Let's open up our terminal to create a fresh Node.JS project and explore a bit:`
        },
        {
            type: "pre-code",
            class: "language-shell",
            text: outdent`
                $ mkdir my-project
                $ cd my-project
                $ npm init -y
                Wrote to /Users/simon/my-project/package.json:
                
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "description": "",
                  "main": "index.js",
                  "scripts": {
                    "test": "echo \\"Error: no test specified\\" && exit 1"
                  },
                  "keywords": [],
                  "author": "",
                  "license": "ISC"
                }
                
                $ ls
                package.json`
        },
        {
            type: 'p',
            text:
                `For now the <code>package.json</code> file contains mostly boilerplate,
                but we'll be adding some dependencies and scripts later.
                Let's write some code, we'll create a new file <code>index.js</code>:
                `
        },
        {
            type: "pre-code",
            class: "language-javascript",
            text: 'console.log("hello world!");',
            comment: "index.js"
        },
        {
            type: 'p',
            text: 'And then we can run it from the terminal like so:'
        },
        {
            type: 'pre-code',
            class: "language-shell",
            text: outdent`
                $ node index.js
                hello world!`
        },
        {
            type: 'p',
            text:
                `This is fine, but as a project grows bigger and more complex we might
                need to run multiple build steps before starting our program, or have 
                multiple watcher processes running so we can see changes instantly
                during development. We can make use of <code>npm</code> to do this for us.
                Let's add a new script, called <code>"start"</code>, to the <code>package.json</code> file.
                `
        },
        {
            type: "pre-code",
            class: "language-json",
            text: outdent`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "description": "",
                  "main": "index.js",
                  "scripts": {
                    "start": "node index.js",
                    "test": "echo \\"Error: no test specified\\" && exit 1",
                  },
                  "keywords": [],
                  "author": ""
                  "license": "ISC"
                }
                `,
            comment: 'package.json'
        },
        {
            type: 'p',
            text: 'And then we can run it from the terminal like so:'
        },
        {
            type: 'pre-code',
            class: "language-shell",
            text: outdent`
                $ npm start

                > my-project@1.0.0 start
                > node index.js

                hello world!`
        },
        {
            type: "p",
            text:
                `Now we'll look at installing some dependencies and saving them to our 
                <code>packages.json</code> so we can easily replicate our environment when
                we need to deploy the project somewhere, or when someone wants to contribute.
                There are a few ways install dependencies with <code>npm</code>: either 
                by running a command like <code>npm install --save package</code>, or by editing
                the <code>package.json</code> and running <code>npm install</code>. We'll use
                latter method:  
                `
        },
        {
            type: "pre-code",
            class: "language-json",
            text: outdent`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "description": "",
                  "main": "index.js",
                  "scripts": {
                    "start": "node index.js",
                    "test": "echo \\"Error: no test specified\\" && exit 1"
                  },
                  "keywords": [],
                  "author": "",
                  "license": "ISC",
                  "dependencies": {
                    "express": "^4.18.2",
                    "nodemon": "^2.0.20"
                  }
                }`,
            comment: "package.json"
        },
        {
            type: "p",
            text: outdent`
                The dependencies section is a JSON object with the name of
                the package being the key, and the version specifier being the value. The
                <code>^</code> character in the version specifier simply means the latest
                version that's still compatible, for <code>"express": "^4.18.2"</code>
                it essentially means the latest 4.x.x version available.
                <br>
                Now we can run <code>npm install</code> and NPM will install and uninstall
                packages as needed to fulfill our specified dependencies.`
        },
        {
            type: "pre-code",
            class: "language-shell",
            text: outdent`
                $ npm install\
                
                added 90 packages, and audited 91 packages in 460ms
                
                10 packages are looking for funding
                  run \`npm fund\` for details
                
                found 0 vulnerabilities
                
                $ ls
                index.js    node_modules/    package-lock.json    package.json`
        },
        {
            type: 'p',
            text: outdent`
                Now that we have covered the most basic parts of using <code>npm</code>
                let's switch gears and try using our dependencies in code.
                There's two ways to import dependencies in Node.JS the classic CommonJS
                syntax and the newer ES6 Module syntax. CommonJS was created by Node.JS for
                Node.JS, while ES6 Modules are a part of the JavaScript specification.
                <br><br>
                CommonJS has a few more features, such as the ability to import JSON, while 
                ES6 module syntax has the advantage of using a syntax which is available
                both in Node.JS and in the browser. I'll start by showing the CommonJS syntax.
            `
        },
        {
            type: 'pre-code',
            class: 'language-javascript',
            text: outdent`
                const express = require('express')
                const app = express()
                
                app.get('/', (req, res) => {
                    res.send("hello world!")
                })
                
                app.listen(3000, () => { console.log("express server listening on port", 3000)})
            `,
            comment: "index.js"
        },
        {
            type: "p",
            text:
                `For now the default for Node.JS is to use the CommonJS syntax, in order
                to use the ES6 Module syntax we first have to enable it in our project.
                This is done by adding a setting a property <code>"type": "module"</code>
                in the <code>package.json</code> file like so: 
                `
        },
        {
            type: 'pre-code',
            class: 'language-json',
            text: outdent`
            {
                "name": "my-project",
                "version": "1.0.0",
                  "description": "",
                  "main": "index.js",
                  "scripts": {
                    "start": "node index.js",
                    "test": "echo \\"Error: no test specified\\" && exit 1"
                  },
                  "keywords": [],
                  "author": "",
                  "license": "ISC",
                  "dependencies": {
                    "express": "^4.18.2",
                    "nodemon": "^2.0.20"
                  },
                  "type": "module"
            }`,
            comment: "package.json"
        },
        {
            type: "p",
            text: `
                After setting the property <code>"type": "module"</code> we can no longer
                use the CommonJS syntax in our project, and it is not possible to use both
                at the same time. So we have to update our <code>index.js</code> file
                like this:
            `
        },
        {
            type: "pre-code",
            class: "language-javascript",
            text: outdent`
                import express from "express"
                const app = express()
                
                app.get('/', (req, res) => {
                    res.send("hello world!")
                })
                
                app.listen(3000, () => { console.log("express server listening on port", 3000)})
            `,
            comment: "index.js"
        },
        {
            type: "p",
            text: `
                No matter which way you write it, the result of running it should look 
                something like this:
            `
        },
        {
            type: "pre-code",
            class: "language-shell",
            text: outdent`
                $ npm start
                
                > my-project@1.0.0 start
                > node index.js

                express server listening on port 3000
            `
        },
        {
            type: "p",
            text: `
                The <code>"start"</code> and <code>"test"</code> scripts are a bit special
                because they can be run like <code>npm start</code> and <code>npm test</code>
                but if you make more scripts you can always run them with the run command
                <code>npm run my-script</code>.
                <br><br>
                I'll show the scripts section from a different project of mine that has a 
                more complex setup. The main trick is that a script is a little shell script.
                So we can run several <code>npm run</code> commands either sequentially by
                using <code>&&</code> or run them concurrently by using <code>&</code>. 
            `
        },
        {
            type: "pre-code",
            class: "language-json",
            text: outdent`
                "scripts": {
                    "start": "npm run prod",
                    
                    "dev": "npm run 'watch:js' & npm run 'watch:css' & npm watch:server",
                    "watch:js": "esbuild src/main.js --outfile=public/main.js --bundle --sourcemap --watch",
                    "watch:css": "tailwindcss -o public/tailwind.css --watch",
                    "watch:server": "nodemon app.js",
                    
                    "prod": "npm run 'build:js' && npm run 'build:css' && npm run 'build:server'",
                    "build:js": "esbuild src/main.js --outfile=public/main.js --bundle --minify",
                    "build:css": "tailwindcss -o public/tailwind.css --minify",
                    "build:server": "node app.js"
                }
            `,
            comment: "package.json"
        },
        {
            type: "p",
            text: `
            I think it's about time to wrap up. We have walked through what a
            <code>package.json</code> file looks like, how we can use it to install dependencies
            with <code>npm install</code>, how we can make use of those dependencies with
            either CommonJS syntax or ES6 Module syntax by setting <code>"type": "module"</code>,
            how to run the project either directly with <code>node</code> or with <code>npm start</code>,
            and briefly looked how to make more advanced use of <code>npm run</code> scripts.
            `
        }



    ]
}