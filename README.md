# MVC Tech Blog

## Live Demo

Visit the live site at: [MVC Tech Blog](https://michaelpratt23.github.io/MVC-tech-blog/)

Had trouble deploying and got stuck along the way but did my best on this one - feel free to take a look at the code and see what the goal was.

## Description

The MVC Tech Blog is a full-stack web application designed for developers to share and discuss blog posts. The application follows the Model-View-Controller (MVC) architecture and includes authentication, session management, and database interactions. Users can create, edit, and delete blog posts, as well as comment on others' posts.

## Features

- User authentication with session-based login
- Blog post creation, editing, and deletion
- Commenting functionality on posts
- Handlebars.js templating for rendering dynamic content
- MySQL database with Sequelize ORM for data management

## Technologies Used

- Node.js
- Express.js
- MySQL & Sequelize
- Handlebars.js
- Bootstrap for styling
- dotenv for managing environment variables
- bcrypt for password hashing
- express-session for session handling

## Installation

To run the project locally, install dependencies, configure the database, and start the application. Ensure MySQL is installed and running.

## Usage

After starting the server, users can access the site locally. New users can sign up, log in, create blog posts, and leave comments. Authentication is required for posting and commenting.

## Folder Structure

- **config/**: Database configuration
- **controllers/**: Route handlers for API and web pages
- **db/**: Database schema
- **models/**: Sequelize models for database entities
- **public/**: Frontend assets (CSS, JavaScript)
- **views/**: Handlebars templates for rendering pages
- **utils/**: Helper functions for authentication and formatting
- **server.js**: Main application entry point

## License

This project is licensed under the MIT License.
