# Promptopia

Promptopia is a web application where users can share any interesting or useful prompts related to Large Language Models (LLMs). Whether you're into AI, creativity, or just want to explore unique prompt ideas, Promptopia allows you to share and discover new prompts. 

**Website Link**: [https://nextjs-promptopia-alpha.vercel.app](https://nextjs-promptopia-alpha.vercel.app)

---

## Features

- **Prompt Sharing**: Users can create, share, and explore different prompts for LLMs.
- **User Profiles**: Each user has their own profile where their shared prompts are listed.
- **Authentication**: User authentication via Google OAuth to secure access and personalize experiences.
- **Dynamic Routes**: Each user has a unique profile URL based on their user ID.
- **LLM Prompts**: Share prompts specifically designed for use with large language models.

---

## Technology Stack

### Frontend & Backend: **Next.js**
Next.js is a React framework that enables building fast, user-friendly web applications. This project leverages both server-side and client-side rendering with Next.js components. Next.js also handles routing, authentication, and server-side logic in this project.

### Authentication: **Google OAuth**
Google OAuth is used for secure user login. Users can log in using their Google accounts, and their profile information, such as name and image, is fetched and displayed in the app.

### Database: **MongoDB**
The database is connected through MongoDB, allowing for the storage and retrieval of user data and prompts. MongoDB handles all user prompts and user-related information.

---

## What I Learned

### 1. **Next.js Project Structure**
Understanding the folder and file structure in a Next.js application is crucial. 
- **layout.js**: The main entry point of the application. This file controls what is displayed on every route page.
- **page.js**: Represents individual route pages (e.g., homepage).
- **globals.css**: Contains global CSS styles applied across the entire application.

### 2. **Server & Client Components**
Using Server and Client components helped optimize rendering and made it easier to decide where certain logic should be handled for performance benefits.

### 3. **Next.js Routing System**
- The routing system in Next.js is simple yet powerful. You can create folders in the `app` directory, and they automatically correspond to different routes in the application.
- The dynamic routing system allows for flexible page creation, for example, giving each user their unique profile page based on their user ID.

### 4. **Dynamic Routing**
- I learned how to create a flexible routing system where different users have different profile pages based on their data. 
- Example: `/profile/[id]` routes users to unique profile pages where the `[id]` is dynamically replaced by the user’s ID.

### 5. **Data Fetching**
Next.js offers both static and dynamic data fetching capabilities. I used this feature to efficiently fetch data from the server and render it dynamically based on user actions or URL parameters.

### 6. **Next.js API Endpoints**
Next.js allows the creation of custom API routes in the same file-based system:
- **File-based route handlers**: HTTP requests are handled directly within the `API` folder inside the `app` directory.
- I created routes for handling prompt submissions, user authentication, and retrieving prompt data.
  
---

## How To Run the Project Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and set up the following environment variables:
   ```env
   MONGODB_URI=<your-mongodb-uri>
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the app in action.

---

## Deployment

This project is deployed on **Vercel**. The deployment process is straightforward:
1. Connect your GitHub repository to Vercel.
2. Vercel will automatically handle the build process and deployment.
3. Make sure your environment variables are configured on Vercel.
