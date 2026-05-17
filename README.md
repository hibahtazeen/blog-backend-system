# Blog Backend System

A backend API for a blog platform built using Express.js, MySQL, and Sequelize.

## Features
- User Registration
- User Login with JWT Authentication
- Create Blog Posts
- View Blog Posts
- Add Comments to Posts
- MySQL Database Integration

## Technologies Used
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT Authentication
- bcryptjs

## API Endpoints

### Authentication
- POST /auth/register
- POST /auth/login

### Posts
- POST /posts
- GET /posts
- GET /posts/:id

### Comments
- POST /comments
- GET /comments/:postId

## Setup Instructions

1. Install dependencies

```bash
npm install
