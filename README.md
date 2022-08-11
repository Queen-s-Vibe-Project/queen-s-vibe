
# Groupie

## Description

_This project was a 2 week sprint._

Groupie is a gym app that allows gym goers to search for gym instructors based on predefined tags/identify markers such as LGBTQ, Diverse/POC, Senior Fitness. Gym goers can view the gym instructor's profile and 'Save Class', favorite the instructor, or 'Sign Up' that will take the gym goer to the instructor's external website where gym goers can sign up for the instructors' class. 

Users do not need to be logged in to search for instructors. Gym goers will need to be logged in to save the class and to favorite the instructor.

This app is best viewed on a mobile device. 

To see the fully functional site, please visit [Groupie](https://dry-crag-81755.herokuapp.com/#/home).

## Screen Shot

![Aug-10-2022 20-38-21](https://user-images.githubusercontent.com/109628257/184050698-3287640d-ca6a-4409-b7fe-f42448ea25c7.gif)

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

```
├── PostmanPrimeSoloRoutes.json
├── PostmanPrimeSoloRoutesv2.json
├── README.md
├── database.sql
├── documentation
│   └── images
├── dump.sql
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── uploads
├── server
│   ├── constants
│   ├── modules
│   ├── routes
│   ├── server.js
│   └── strategies
└── src
    ├── components
    ├── hooks
    ├── index.js
    └── redux
```

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Acknowledgement

We want to thank Prime Academy and Olivia DeRusse for the opportunity to work on this exciting project. 
