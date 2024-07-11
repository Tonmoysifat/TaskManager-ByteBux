# Task Manager

Task Manager is a web application to manage your daily tasks. You can create, read, update, and delete tasks using the provided API endpoints.

## Live Link

You can access the live application [https://task-manager-byte-bux.vercel.app/](https://task-manager-byte-bux.vercel.app/).

## Project Overview
### Front-End:
- Framework: React.js
- CSS: Bootstrap and Custom CSS.
- State Management: React Hook ( useState, useEffect, useParams, useNavigate).

### Back-End:
- Language:  Node.js with Express

### Database: 
-  NoSQL database (e.g.,
   MongoDB Atlas)

### API Endpoints

The following endpoints are available in the Task Manager application:

- `GET /tasks`: Retrieve a list of tasks.
- `GET /tasks/:id`: Retrieve a specific task by ID.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update an existing task by ID.
- `DELETE /tasks/:id`: Delete a task by ID.

## Setup and Run Locally

Follow these steps to clone the project and run it in your local environment.

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm (Node Package Manager)
- Git

### Create a New Folder

Create a new folder to house the project. Open the folder and in the Address Bar type "cmd ."

### Clone the Repository
Clone the project from GitHub using the following command in the opened PowerShell:

```
git clone https://github.com/Tonmoysifat/TaskManager-ByteBux.git

```
### Install Dependencies
Navigate to the project directory and install the required dependencies:

```
cd TaskManager-ByteBux

npm install
```
### Craete ".env" file
Inside the root project directory (TaskManager-ByteBux) create a ".env" file and add there two environment variables:
```
DB_USER = "Your_mongoDB_Atlas_User_name" 
DB_PASS = "Your_mongoDB_Atlas_password"
```
### Run the Project
```
nodemon or node index.js
```