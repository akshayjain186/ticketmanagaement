# Ticket Management System

A simple ticket management system built using Node.js and MongoDB. This API allows users to create, read, update, and delete support tickets efficiently.

## Features

- Create new tickets
- Retrieve all tickets
- Retrieve a ticket by ID
- Update existing tickets
- Delete tickets
- Input validation for ticket fields

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Validator
- dotenv

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or Atlas account)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/ticket-management-system.git
   cd ticket-management-system
2 Install Dependencies
  npm install

3 Start the Server
  npm start
  node app.js
  npm run dev
  nodemon app.js

API Documentation

Base URL: http://localhost:5000/api

1. Create Ticket
Endpoint: POST /tickets
Description: Create a new support ticket.
Payload:

{
  "title": "Ticket Title",
  "description": "Ticket Description",
  "priority": "high" // optional
}
Success Response:
Code: 201
Content:

{
  "message": "Ticket created successfully",
  "ticket": { 
    "_id": "ticket_id_here",
    "title": "Ticket Title",
    "description": "Ticket Description",
    "priority": "high",
    "status": "open",
    "createdAt": "2023-09-23T00:00:00.000Z",
    "updatedAt": "2023-09-23T00:00:00.000Z"
  }
}
2. Get All Tickets
Endpoint: GET /tickets
Description: Retrieve all support tickets.
Success Response:
Code: 200
Content:

[
  {
    "_id": "ticket_id_here",
    "title": "Ticket Title",
    "description": "Ticket Description",
    "priority": "high",
    "status": "open",
    "createdAt": "2023-09-23T00:00:00.000Z",
    "updatedAt": "2023-09-23T00:00:00.000Z"
  },
  ...
]
3. Get Ticket by ID
Endpoint: GET /tickets/:id
Description: Retrieve a specific ticket by its ID.
Success Response:
Code: 200
Content:

{
  "_id": "ticket_id_here",
  "title": "Ticket Title",
  "description": "Ticket Description",
  "priority": "high",
  "status": "open",
  "createdAt": "2023-09-23T00:00:00.000Z",
  "updatedAt": "2023-09-23T00:00:00.000Z"
}
Error Response:
Code: 404
Content:

{
  "error": "Ticket not found"
}
4. Update Ticket
Endpoint: PUT /tickets/:id
Description: Update an existing ticket by its ID.
Payload:

{
  "title": "Updated Ticket Title",
  "description": "Updated Description",
  "status": "closed" // optional
}
Success Response:
Code: 200
Content:

{
  "message": "Ticket updated successfully",
  "ticket": { 
    "_id": "ticket_id_here",
    "title": "Updated Ticket Title",
    "description": "Updated Description",
    "status": "closed",
    "createdAt": "2023-09-23T00:00:00.000Z",
    "updatedAt": "2023-09-23T00:00:00.000Z"
  }
}
5. Delete Ticket
Endpoint: DELETE /tickets/:id
Description: Delete a ticket by its ID.
Success Response:
Code: 200
Content:

{
  "message": "Ticket deleted successfully"
}
Error Response:
Code: 404
Content:

{
  "error": "Ticket not found"
}
