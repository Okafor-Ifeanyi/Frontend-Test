# Nuxt.js Investigation Screen

## Overview

> This project implements an investigation screen built with **Nuxt.js**, designed as per the provided Figma design and functionality requirements. It utilizes **Bootstrap** for CSS implementation and **Apollo GraphQL** to make requests to the API endpoints.

### Features
1. **Side Menu:** 
   - The side menu is hardcoded and provides navigation options.
   - It is responsive for mobile devices.
   
2. **Category and Test List:**
   - Categories and test lists (e.g., chest, cervical vertebrae, thoracic vertebrae) are dynamically fetched from the API.
   - The GET API endpoint for fetching this data is:  
     `https://testdrive.kompletecare.com/api/investigations`.

3. **Submission Endpoint:**
   - The form data is submitted via the POST API endpoint:  
     `https://testdrive.kompletecare.com/api/investigations`.
   
4. **Authentication:**
   - Both the GET and POST endpoints require authentication via **Bearer Token** in the request header.
   - The token can be obtained by a call to the login endpoint:  
     `https://testdrive.kompletecare.com/api/investigations`.
   
5. **Popup Dialog:**
   - After a successful submission, a popup dialog will inform the user of the successful submission.

6. **GraphQL API:**
   - Apollo GraphQL is used for API requests, including both fetching and submitting data.

7. **Responsive Design:**
   - The layout is mobile-friendly, using **Bootstrap** for responsive design.
   
### Technologies Used
- **Nuxt.js** for frontend framework.
- **Bootstrap** for CSS and responsive layout.
- **Apollo GraphQL** for API requests.
- **Figma** design reference for UI layout.
  
### API Endpoints
- **GET Categories & Test List:**  
  `https://testdrive.kompletecare.com/api/investigations`  
  (Requires Authorization header: `Bearer {token}`)
  
- **POST Submission:**  
  `https://testdrive.kompletecare.com/api/investigations`  
  (Requires Authorization header: `Bearer {token}`)
  
- **Login (for Token Generation):**  
  `https://testdrive.kompletecare.com/api/investigations`
  
### Steps to Run the Project

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/investigation-screen.git
   cd investigation-screen

2. Install dependencies:

   ```bash
   npm install
   ```

3.  Start the development server:   
    
    ```bash
    npm run dev
    ```

4. 	Open the application in your browser at:
    http://localhost:3000

## Authentication

To authenticate, you need to get a Bearer token from the login endpoint. Include this token in the Authorization header when making API requests.

## Figma Design

The design was created in Figma. You can view it here.

## API Documentation

For detailed information on the API endpoints, refer to the API documentation on Postman:
[API Documentation](https://documenter.getpostman.com/view/11249916/Uz5CLxxV#7ff6fc9d-cda3-498d-ae29-372416ff010e).

## GitHub Repository

The code for this project can be found in the GitHub repository:
GitHub Repository Link

## Submission
1.	Push the code to a new GitHub repository.
2.	Send the repository link to peopleoperations@kompletecare.com by the submission deadline (Wednesday, 30th April, 2025 at 5:00 pm WAT).