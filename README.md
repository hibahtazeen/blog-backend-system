# Blog Backend System

## Features
- User Registration & Login (JWT Authentication)
- Create Blog Posts
- View All Posts
- Add Comments to Posts
- MySQL Database Integration
- REST API using Express.js

## Tech Stack
- Node.js
- Express.js
- MySQL
- Sequelize ORM

## Setup Instructions
npm install  
node server.js  

## API Routes

### Auth
POST /auth/register  
POST /auth/login  

### Posts
POST /posts  
GET /posts  
GET /posts/:id  

### Comments
POST /comments  
GET /comments/:postId  
