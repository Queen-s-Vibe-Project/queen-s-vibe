
# Groupie

## Description

_This project was a 2 week sprint._

Groupie is a gym app that allows gym goers to search for gym instructors based on predefined tags/identify markers such as LGBTQ, Diverse/POC, Senior Fitness. Gym goers can view the gym instructor's profile and 'Save Class', favorite the instructor, or 'Sign Up' that will take the gym goer to the instructor's external website where gym goers can sign up for the instructors' class. 

Users do not need to be logged in to search for instructors. Gym goers will need to be logged in to save the class and to favorite the instructor.

This app is best viewed on a mobile device. 

To see the fully functional site, please visit [Groupie](https://dry-crag-81755.herokuapp.com/#/home).

## Screen Shot

![Groupie GIPHY 2](https://user-images.githubusercontent.com/109628257/184051065-a5c34384-5bd3-4b95-a5ab-d0f11d422175.gif)


![Aug-10-2022 20-38-21](https://user-images.githubusercontent.com/109628257/184050698-3287640d-ca6a-4409-b7fe-f42448ea25c7.gif)

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and tables

Create a new database called `vibes-database` and create tables in the database.sql file. Required INSERT statements are labeled along with optional sample data.

If you would like to name your database something else, you will need to change `vibes-database` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
    - AWS_ACCESS_KEY_ID = yourKey
    - AWS_SECRET_ACCESS_KEY = yourKey
    - AWS_REGION = yourKey
    - AWS_BUCKET_NAME = yourKey
    - REACT_APP_GOOGLE_API_KEY = yourKey
    - SERVER_SESSION_SECRET = createAnyKeyCombo

- Start postgres if not running already 
- Run `npm run server`
- Run `npm run client`
- If using nodemon, app will open in new browser tab after running `npm run client`. If not, navigate to `localhost:3000`

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

## Built With

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

- Google Map
- Google Places

## Acknowledgement

We want to thank the Groupie development team, Prime Academy and Olivia DeRusse for the opportunity to work on this exciting project. 
