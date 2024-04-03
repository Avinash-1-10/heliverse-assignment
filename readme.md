# Full Stack User Management Web Application

## Backend Deployed Link [https://u-manager.onrender.com](https://u-manager.onrender.com)

## Frontend Deployed Link [https://u-manager.vercel.app](https://u-manager.vercel.app)

This is a full-stack web application that allows users to view and interact with a list of users. Users can perform various actions such as viewing users, searching by name, filtering by domain, gender, and availability, creating teams, and viewing team details.

## Features

- **Display Users with Pagination**: Users are displayed in a visually appealing card format with pagination support.
- **Search by Name**: Users can search for other users by their names. The search functionality dynamically updates the displayed user list as the user types in the search input.
- **Filters**: Users can filter the user list by domain, gender, and availability. Multiple filters can be applied simultaneously.
- **Create a Team**: Users can create teams by selecting users from the list. Only users with unique domains and availability can be added to the team.
- **Show Team Details**: Once a team is created, users can view the details of the team, including information about the selected users.
- **Responsive Design**: The application is fully responsive and works well on various screen sizes and devices.

## Tech Stack

**Frontend:**

- React.js: JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for styling.

**Backend:**

- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing user data.
- Mongoose: ODM (Object Data Modeling) library for MongoDB.

## Installation

1. Clone the repository:

2. Navigate into the project directory:

3. Install dependencies:

4. Start the development server:


## API Endpoints

### Users

- GET `/api/users`: Retrieve all users with pagination support.
- GET `/api/users/:id`: Retrieve a specific user by ID.
- POST `/api/users`: Create a new user.
- PUT `/api/users/:id`: Update an existing user.
- DELETE `/api/users/:id`: Delete a user.

### Teams

- POST `/api/team`: Create a new team by selecting users from the list with unique domains and availability.
- GET `/api/team/:id`: Retrieve the details of a specific team by ID.


