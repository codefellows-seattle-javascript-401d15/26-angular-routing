# Lab 26: Angular Routing

## Description

## Version
* 0.1.0

## Installation
Please visit the following pages for how to install your project locally.

* [Cloning A Repository](https://help.github.com/articles/cloning-a-repository/)
* [Fork A Repo](https://help.github.com/articles/fork-a-repo/)
* [Forking](https://guides.github.com/activities/forking/)

### Node
You need to have node.js installed.
* [Download Node](https://nodejs.org/en/)

### NPM Packages
* [NPM Docs](https://docs.npmjs.com)
* [NPM package.json](https://docs.npmjs.com/files/package.json)

### JSON Configuration
Initializing package.json
```
npm init
```
```
npm i -S @uirouter/angularjs angular babel-core babel-loader babel-preset-es2015 camelcase clean-webpack-plugin css-loader dotenv extract-text-webpack-plugin file-loader html-loader html-webpack-plugin node-sass pascalcase resolve-url-loader sass-loader style-loader url-loader webpack
```
```
npm i -D webpack-dev-server angular-mocks jasmine jasmine-core karma karma-chrome-launcher karma-jasmine karma-webpack webpack-dev-server
```

Add the following to package.json:
```
"scripts": {
  "test": "karma start --single-run",
  "test-watch": "karma",
  "build": "webpack",
  "build-watch": "webpack-dev-server --inline --hot"
}
```

### Dependencies
The result of installation above.

```
"dependencies": {
  "@uirouter/angularjs": "^1.0.3",
  "angular": "^1.6.4",
  "babel-core": "^6.24.1",
  "babel-loader": "^7.0.0",
  "babel-preset-es2015": "^6.24.1",
  "camelcase": "^4.1.0",
  "clean-webpack-plugin": "^0.1.16",
  "css-loader": "^0.28.4",
  "dotenv": "^4.0.0",
  "extract-text-webpack-plugin": "^2.1.0",
  "file-loader": "^0.11.1",
  "html-loader": "^0.4.5",
  "html-webpack-plugin": "^2.28.0",
  "node-sass": "^4.5.3",
  "pascalcase": "^0.1.1",
  "resolve-url-loader": "^2.0.2",
  "sass-loader": "^6.0.5",
  "style-loader": "^0.18.1",
  "url-loader": "^0.5.8",
  "webpack": "^2.6.1"
},
"devDependencies": {
  "angular-mocks": "^1.6.4",
  "jasmine": "^2.6.0",
  "jasmine-core": "^2.6.2",
  "karma": "^1.7.0",
  "karma-chrome-launcher": "^2.1.1",
  "karma-jasmine": "^1.1.0",
  "karma-webpack": "^2.0.3",
  "webpack-dev-server": "^2.4.5"
}
```

## Application
In Terminal run `webpack`
In Terminal run `npm run build-watch`

## Test Setup
```
karma init karma.conf.js

Which testing framework do you want to use ?
> jasmine

Do you want to use Require.js ?
> no

Do you want to capture any browsers automatically ?
> Chrome

What is the location of your source and test files ?
> test/**/*-test.js

Should any of the files included by the previous patterns be excluded ?
> no

Do you want Karma to watch all the files and run the tests on change ?
> no
```

## Running Tests
In [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) (Terminal) enter the command:

karma start

## Resources
* [Testing Controllers](http://www.bradoncode.com/blog/2015/06/05/ngmock-fundamentals-testing-controllers/)
* [End to End Testing](https://docs.angularjs.org/guide/e2e-testing)
* [Testing with Protractor](http://www.ng-newsletter.com/posts/practical-protractor.html)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/mmpadget/26-angular-routing/blob/lab-26/lab-padget/LICENSE) file for details.

## Acknowledgments
* Code Fellows
* Scott Schmidt, Instructor
* Cayla Zabel, Teaching Assistant
* Devon Hackley, Teaching Assistant
* Thomas Martinez, Teaching Assistant
* JR Iriarte, Teaching Assistant
