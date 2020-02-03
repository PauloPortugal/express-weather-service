# An Express.js Weather App
An event-driven asynchronous [Express.js](http://expressjs.com/) Weather app. This is the web application equivalent of [Node.js Weather App](https://github.com/PauloPortugal/nodejs-weather-app).

This is part of Andrew Mead's (mead.io) "The Complete Node.js Developer Course".

## Goal
Return a weather forecast based on user's input location

* Uses [mapbox.com](mapbox.com) for forward geocoding
* Uses [darksky.net](darksky.net) to return the weather forecast for a given town/place.
* Uses [npm hbs](https://www.npmjs.com/package/hbs) as the Express.js view engine for [handlebars.js](https://handlebarsjs.com/)
* Uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make an async call

## Setup

 * Create a (free) account with [mapbox.com](mapbox.com) and [darksky.net](darksky.net) and copy the access tokens to `.config/tokens.json`
 * Run `git update-index --assume-unchanged config/tokens.json` to avoid commiting the tokens to a remote repo


## How to execute

1. From the command line:
```
npm run start
```
2. Navigate to the browser:
```
http://localhost:3000
```

## Heroku integration

Useful commands:

```
   heroku login
   heroku keys:add
   heroku create <UNIQUE_NAME>
   git push heroku master
```