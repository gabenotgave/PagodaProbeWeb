# PagodaProbe Web

This repository contains the source code for the PagodaProbe Web application, the official frontend for the [PagodaProbe API](https://github.com/gabenotgave/PagodaProbeApi). This single-page application (SPA) provides a user-friendly interface for searching and viewing public records data.

The application is built with React and Vite, using JavaScript and Bootstrap for styling.

---

## Table of Contents

- [Backend Service](#backend-service)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Backend Service

This frontend application requires the [PagodaProbe API](https://github.com/gabenotgave/PagodaProbeApi) to be running to function correctly. Please refer to the backend repository's `README.md` for instructions on how to set it up.

---

## Features

-   **Intuitive Search Interface**: Allows users to easily search for people and court dockets.
-   **Detailed Views**: Presents aggregated data in a clean, readable format.
-   **Responsive Design**: Ensures a seamless experience on both desktop and mobile devices.
-   **Secure Contact Form**: Provides a way for users to get in touch, protected by Google ReCAPTCHA v3.
-   **Component-Based Architecture**: Built with reusable React components for maintainability.

---

## Technologies Used

-   **Framework**: React 18
-   **Build Tool**: Vite
-   **Language**: JavaScript (JSX)
-   **Styling**: Bootstrap
-   **Routing**: React Router
-   **State Management**: React Context API
-   **HTTP Client**: Axios
-   **Linting/Formatting**: ESLint, Prettier

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A running instance of the [PagodaProbe API](https://github.com/gabenotgave/PagodaProbeApi).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/gabenotgave/PagodaProbeWeb.git](https://github.com/gabenotgave/PagodaProbeWeb.git)
    cd PagodaProbeWeb
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or if you use yarn:
    ```bash
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a new file named `.env.local` in the root of the project. This file will hold your local environment variables.

    Add the URL for your running backend API instance and the Google ReCAPTCHA Site Key:

    ```env
    VITE_API_BASE_URL=https://localhost:7035
    VITE_RECAPTCHA_SITE_KEY=YOUR_RECAPTCHA_SITE_KEY
    ```
    > **Note:** The `VITE_API_BASE_URL` should point to the address of your local PagodaProbe API. The port `7035` is the default for the backend project. The `VITE_RECAPTCHA_SITE_KEY` can be obtained from the backend's user secrets.

### Running the Application

Once the setup is complete, you can start the development server:

```bash
npm run dev
```
or
```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

---

## Project Structure

The `src` directory is organized as follows:

-   **`components/`**: Contains reusable UI components (e.g., `Button`, `Input`, `Navbar`).
-   **`pages/`**: Contains the main page components that are mapped to routes (e.g., `HomePage`, `SearchResultsPage`).
-   **`services/`**: Includes logic for interacting with the backend API, such as Axios instances and API call functions.
-   **`context/`**: Holds React Context providers for managing global state.
-   **`hooks/`**: Contains custom React hooks.
-   **`App.tsx`**: The main application component where routing is defined.
-   **`main.tsx`**: The entry point of the React application.

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
