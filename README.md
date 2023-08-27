# social-network-api
An API to be used for a social network.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

This is a practice API social network application. After just learning NoSQL databases, this is a good opportunity to apply everything I learned about MongoDB and mongoose.  Being an API means the back-end is functional before front-end integration. 

User's can have thoughts, comments to those thoughts, and reactions to those comments. User's can also add other users as friends. There are also CRUD methods to Users, Thoughts, and Comments. UD's to Reactions.

What I was able to take away from this project, is a bit more understanding about schema configuration. 

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

### Requirements

- Node.js
- MongoDB

### Steps

1. Download or clone repo
2. Navigate to project via terminal
3. In the terminal, run the command 'npm run seed'
4. Then run the command 'npm run start'
5. You are now ready to make API calls
6. Open browser, or your preferred software to test API calls

## Usage

Output should be the new data or a message. 

API calls, it's functions, and output are:

### Get all users 

Route: http://localhost:3001/api/users\
Method: GET\

### Get user by id

Route: http://localhost:3001/api/users/{userid}\
Method: GET\

### Create user

Route: http://localhost:3001/api/users\
Method: POST\
Body: `{
  "username": "John Doe",
  "email": "johndoe@gmail.com"
}`

### Update a user

Route: http://localhost:3001/api/users/{userIdToUpdate}\
Method: PUT\
Body: `{
	"username": "Jane Doe",
	"email": "janedoe@gmail.com"
}`

### Delete a user by id
Method: DELETE\
Route: http://localhost:3001/api/users/{userId}\

### Befriend user

Route: http://localhost:3001/api/users/{userId}/friends/{userIdToBefriend}\
Method: POST\

### Delete friend from user

Route: http://localhost:3001/api/users/{userId}/friends/{friendIdToDelete}\
Method: DELETE\

### Get all thoughts

Route: http://localhost:3001/api/thoughts\
Method: GET\

### Get thoughts by id 

Route: http://localhost:3001/api/thoughts/{thoughtId}\
Method: GET\

### Create a new thought

Route: http://localhost:3001/api/thoughts\
Method: POST\
Body: `{
	"thoughtText": "Thought text",
	"username": "John Doe"
}`

### Update a thought by id

Route: http://localhost:3001/api/thoughts/{thoughtIdToUpdate}\
Method: PUT\
Body: `{
	"thoughtText": "An updated thought",
	"username": "Jane Doe"
}`

### Delete thought by id

Route:  http://localhost:3001/api/thoughts/{thoughtIdToDelete}\
Method: DELETE\

### Create a reaction

Route: http://localhost:3001/api/thoughts/{thoughtIdToAddReactionTo}/reactions\
Method: POST\
Body: `{
	"reactionBody": "Wow, that's interesting.",
	"username": "John Doe"
}`

### Delete a reaction

Route: http://localhost:3001/api/thoughts/{thoughtIdToDelete}/reactions\
Method: DELETE\
Body: `{
	"reactionId": "{reactionIdToDelete}"
}`

## Credits

### Documentation

- https://mongoosejs.com/docs/index.html 
