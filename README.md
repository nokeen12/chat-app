# Dre's Simple Chat

## A web chat application that allows for users to add each other as friends, message and create group chats.

This project was made initially for practicing and gaining experience in implementing an online chat feature into a full application. Since then, it has evolved into it's own full stack web application.

## Current Goals

* Create a REST API that allows for full CRUD operations on users, messages and group chats
* Add sending multiple filetypes in chats
* Implement app customization- changing message bubble colors, font size and background theme through settings.
* Create working search bar that filters through created usernames
* Display sent messages to users with minimal delay using WebSocket API
<!--- add 1st example image here --->
## Features

* Global chat
* Direct messaging
* Group chats
* Add friends
* Customize your theme
* Chat filter

## How to run application

There may be many bugs as this is still in development

1. Clone this project
2. Inside the client folder, install dependencies with the command - `npm install`
3. Inside the server folder, install dependencies with the command - `npm install`
3. Optional: Inside the server folder, create .env file - Add PORT= any port you'd like to use and MONGODB_URI= the link to your mongoDB server
4. Run `npm start` in the client folder and `nodemon server.js` in the server folder to start the application on http://localhost:3000/

### Tech

JavaScript, MongoDB, Express, React, Node.js, HTML, CSS


## Images

![Homepage](images/SimpleChat-1.png)
![Chatpage](images/SimpleChat-5.png)
![Login](images/SimpleChat-4.png)
![Signup](images/SimpleChat-3.png)