$ ng new ng5 --style=scss --routing
$ ng serve
browser on http://localhost:4200
npm install @angular/animations@latest --save

npm install express body-parser --save

to generate component
$ ng generate component home



Go dev:
	"nodemon": "nodemon server.js",
	"watch": "ng build --watch",


Go production:
	ng build
	add and commit
	git push heroku master

	heroku logs --tail
	heroku open

https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app


you cannot cheat the votes are completely hidden (even in code) til revealed - this is NOT DONE YET
names for choosing
card flip effects
funny messages daily (use api)

TO DO: add icons for picking for each user, save to local storage

# Ng5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
