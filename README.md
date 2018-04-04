# Tuddle App 

### [helios-tuddle.herokuapp.com](https://helios-tuddle.herokuapp.com/) for live demo
![Alt text](src/assets/images/screenshot.png?raw=true "screenshot img")

## App Structure
* Angular 5, TypeScript, Scss
* Node / Express, Socket io (websockets)
* Deployed on Heroku

### Frontend Organization
![Alt text](src/assets/images/frontend-organization.png?raw=true "flow chart img")

## Development server
	Install necessary packages:

	`$ npm install`

	Running locally:

	`$ npm run watch`

	`$ npm run nodemon`

	open "localhost:5000" in browser

## Production server

	1. `$ ng build`

	2. commit code

		`$ git push heroku master`

		To monitor log:
		`$ heroku logs --tail`

		To open page:
		`$ heroku open`

## Improvements / TODO's
	* Reveal & Reset privilege
	* Add specs
	* Rooms
	* Selection of card packs
	* User avatars instead of usernames
	* Migrate local storage service logic to state service
	* Database maybe (noSQL is sufficient)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
