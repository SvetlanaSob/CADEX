# Test Project

This repository contains a test project that showcases a web application utilizing Next.js for the front-end and a Node.js-based backend. The application features a user-friendly interface and responsive design, making it accessible on various devices.

## Project Setup Instructions / Hosting Details

### Prerequisites
- Node.js
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables as needed in the `.env` file.(ask for .env)
4. Start the backend server:
   ```bash
   npm start
   ```
   
### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables as needed in the `.env` file.(ask for .env)
4. Start the development server:
   ```bash
   npm run dev
   ```

### Deployment
- The frontend application is deployed on [Vercel](https://vercel.com/)
- The backend application is hosted on [Render](https://render.com/)

## Styling, SEO, and Performance Strategies Used

- **Styling:** 
  - The project uses CSS for styling, along with `styled-components` for styling components in the JavaScript and Material-UI for ready-made UI elements.
  - Most color values and numerical constants used throughout the application are defined as variables, making it easier to maintain and update the design.
  - Custom CSS was applied to form elements, specifically for labels and backgrounds on hover.

- **SEO:**
  - Necessary Open Graph meta tags have been included in the `<head>` section to enhance previews on social media platforms.
  
- **Performance:**
  - A loader is implemented on the first page, which displays while fetching data from Firestore, ensuring users are aware that the application is loading.
  - The entire content is responsive, optimizing the user experience on different screen sizes.

## Assumptions Made

- The project is designed with the assumption that an active connection to Firestore is available and correctly configured.
- The design is based on a provided template and adheres to the specified requirements for this test project.
- All sensitive information, including API keys and secrets, is managed through environment variables stored in a `.env` file.

## Features
- Two pages implemented based on the template provided.
- A loader that spins when data is being fetched from Firestore on the first page.
- The first page includes a YouTube video embedded using `react-responsive-embed`.
- The second page contains a form with custom-styled `MUI` input fields, which sends data to the backend and saves it in Firestore. Upon successful submission, a message is displayed, and relevant information is logged in the console.

Feel free to explore the project and modify it as needed!
