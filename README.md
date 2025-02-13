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

## Usage
1. Open your browser and go to `http://localhost:3000` to access the application.
2. Upload a casual photo using the provided interface.
3. Click on the button to generate a professional headshot.

## License
This project is licensed under the MIT License.
