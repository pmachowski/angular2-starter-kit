![Please Star](http://pmachowski.github.io/ghh/images/please_star.jpg)


# What we've got here

- [Server Side rendering](https://angularu.com/VideoSession/2015sf/angular-2-server-rendering) for instant page loading
- Entire Angular2 application is running in a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) (UI always will be smooth)
- [Preboot](https://www.npmjs.com/package/preboot) to catch browser events before Angular2 is ready to work.
- [Webpack](https://webpack.github.io/) and its [Code Splitting](https://webpack.github.io/docs/code-splitting.html) feature which allows us to lazy load parts of an application if needed.
- Live Reloading, a browser will be reloaded on any change in server or browser code. It works well for both a main thread and web workers.
- [TypeScript](http://www.typescriptlang.org/) with [Typings](https://github.com/typings/typings)
- Linting with [TSLint](http://palantir.github.io/tslint/)
- [Express](http://expressjs.com/) - de facto standard for Node.js web apps.
- [PM2](http://pm2.keymetrics.io/) - most advanced Node.js process manager
- Unit testing with [Karma](http://karma-runner.github.io/)
- End-to-End testing with [Protractor](https://angular.github.io/protractor)
- [Docker](https://www.docker.com) for easy deployments.

## Requirements

- **`node`** >= **5.0.0**
- **`npm`** >= **3.0.0**

# Quick start
```bash
# install npm global dependencies as necessary
npm install -g typescript typings

# install npm local dependencies
npm install

# build and run the production server
npm start
```
Go to [http://localhost:3000](http://localhost:3000) in your browser.

You may want to stop or restart the production server:
```bash
# stop the production server
npm stop

# restart the production server
npm restart
```

# Building
```bash
# build the production project
npm run build
```

# Running Server
```bash
# run the server with node
npm run serve

# OR
# run the server with pm2
npm run serve:pm2
```

## Development with Live Reloading
```bash
# make sure that the production server is not running
npm stop

# run the development server with live reloading support
npm run build:dev
```

The development server will watch for any changes, make rebuilds and reload a browser. All built code will be kept in
memory, so `dist` folder will not be generated (**all** means code for **both** **client** and **server** sides).

## Turning server side rendering and web workers on/off
You can optionally turn server side rendering or web workers support on/off. You just need
to change `HAS_SS` and `HAS_WW` in `constants.js`

```js
// ...

// Server side rendering. Set it to `false` to turn it of.
exports.HAS_SS = 'NG2_SS' in process.env ? process.env.NG2_SS === 'true' : true;
// For example:
// exports.HAS_SS = false;

// Web workers support. Set it to `false` to turn it of.
exports.HAS_WW = 'NG2_WW' in process.env ? process.env.NG2_WW === 'true' : true;
// For example:
// exports.HAS_WW = 'NG2_WW' in process.env ? process.env.NG2_WW === 'true' : false;
// exports.HAS_WW = false;

//...
```
Then you need to restart the server to apply the changes:
```bash
# for production server
npm restart

# for development server - stop its process and run it again
npm run dev
```

# Linting
```bash
# check the project (source files)
npm run lint

# check the project and start watching for its changes
npm run lint:watch
```

# Testing
The next command will run both unit and end-to-end tests.

For end-to-end tests you need to start Selenium Server and application server first (see [End-to-End Testing](#end-to-end-testing)).
```bash
# run all tests (single run)
npm test
```

## Unit Testing
```bash
# run unit tests (single run)
npm run unit

# run unit tests and start watch for changes
npm run unit:watch

# run unit tests for specified directory (path must be relative to root directory)
# currently you can specify paths only for "src" directory
npm run unit src/app

# run unit tests for specified file and start watch for changes
npm run unit:watch src/app/app.spec.ts
```

## End-to-End Testing
For end-to-end tests you need to start Selenium Server (webdriver) and application server first.
```bash
# update selenium server (you need to run it only once)
npm run webdriver:update

# (1 terminal/cmd window) build and start application server
npm run build && npm run serve

# (2 terminal/cmd window) start Selenium Server (webdriver)
npm run webdriver:start

# (3 terminal/cmd window) run end-to-end test (single run)
npm run e2e
```

# Cleaning
```bash
# remove "dist" and "logs" folders
npm run clean

# remove "dist" folder
npm run clean:dist

# remove "logs" folder
npm run clean:logs
```
