![Please Star](http://pmachowski.github.io/ghh/images/please_star.jpg)


# What we've got here

- [Server Side rendering](https://angularu.com/VideoSession/2015sf/angular-2-server-rendering) for instant page loading
- [Preboot](https://www.npmjs.com/package/preboot) to catch browser events before Angular2 is ready to work.
- [Webpack](https://webpack.github.io/) and its [Code Splitting](https://webpack.github.io/docs/code-splitting.html) feature which allows us to lazy load parts of an application if needed.
- Live Reloading, a browser will be reloaded on any change in server or browser code. It works well for both a main thread and web workers.
- [TypeScript 2](http://www.typescriptlang.org/)
- Linting with [TSLint](http://palantir.github.io/tslint/)
- [Express](http://expressjs.com/) - de facto standard for Node.js web apps.
- [PM2](http://pm2.keymetrics.io/) - most advanced Node.js process manager
- Unit testing with [Karma](http://karma-runner.github.io/)
- End-to-End testing with [Protractor](https://angular.github.io/protractor)


## Installation

* `yarn install` (npm install will still work)

## Serve

* `npm start` to build your client app and start a web server
* `npm run build` to prepare a distributable bundle

## Development
* run `npm start` and `npm run watch` in two separate terminals to build your client app, start a web server, and allow file changes to update in realtime

## Watch files
* `npm run watch` to build your client app and start a web server

## AoT and Prod
* `npm run build:prod:ngc` to compile the ngfactory files and build prod
