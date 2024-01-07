# Animal Webapp

## Overview

This full-stack application was developed to provide an interactive and dynamic platform for displaying funny animal content. 

The project integrates: 
* Angular on the front end
* Node.js on the backend
* A Sqlite database to hold animal information.

I built this project to demonstrate proficiency in HTML, CSS, Javascript, Angular, Node.js, and SQL. 

## Features

- **Interactive Content Display:** The frontend is handled by **Angular** and **Angular Material UI**, allowing the user to select an animal and view a funny photo and description of it.

- **Animal Info Retreival:** The backend is powered by **Node.js**. Every time the user selects an animal, real-time data is retrieved via the **SQLite** database. 

- **Secure HTTPS Communication:** The client-server communication is secured through HTTPS, prioritizing the privacy and security of user interactions.

## Demo
![Webapp function](https://github.com/caremackin/animal-webapp-project/blob/main/animal_webapp/gif/undefined-high.gif)

## Running Locally

### Animal Webapp Frontend

#### To Run Frontend:

1. **Get Required Modules:**
   Open the integrated terminal and run the following command to install the required modules:
   ```bash
   npm install

1. **To Start Server:**
   Open the integrated terminal and run the following command to install the required modules:
   ```bash
   ng serve

The application will be accessible at http://localhost:4200.

### Animal Webapp Backend

#### To Run Backend:

1. **Get Required Modules:**
   Open the integrated terminal and run the following command to install the required modules:
   ```bash
   npm install
2. **To Create/Populate Database and Start Server:**
   Open the integrated terminal and run the following command to populate the database and start the server:
   ```bash
   npm run startup
   
The backend server will be accessible at http://localhost:3000.

