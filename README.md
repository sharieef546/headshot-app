# AI Headshot Generator

## Description
The AI Headshot Generator is a web application that transforms casual photos into professional headshots using the Vidnoz OpenAPI. This project consists of a backend built with Node.js and Express, and a frontend developed with React.js.

## Features
- Upload a casual photo.
- Generate a professional headshot.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **API**: Vidnoz OpenAPI for headshot generation

## Project Structure
```
ai-headshot-generator
├── backend
│   ├── controllers
│   │   └── headshotController.js
│   ├── routes
│   │   └── headshotRoutes.js
│   ├── app.js
│   └── package.json
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── HeadshotUploader.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
├── .gitignore
└── README.md
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm start
   ```

### Frontend
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

   API Integration Description
To integrate the Vidnoz OpenAPI for generating professional headshots, follow these steps:

Backend Setup:

Install Axios for making HTTP requests.
Create a controller to handle the API request to Vidnoz OpenAPI.
Define a route to handle the POST request from the frontend.
Update the backend app to use the new route.
Frontend Setup:

Create a component to handle photo upload and API request.
Update the main App component to include the new component.
This setup allows the frontend to send a photo to the backend, which then communicates with the Vidnoz OpenAPI to generate and return a professional headshot.

## Usage
1. Open your browser and go to `http://localhost:3000` to access the application.
2. Upload a casual photo using the provided interface.
3. Click on the button to generate a professional headshot.

## License
This project is licensed under the MIT License.
