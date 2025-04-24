# NextEvents - Event Browsing App

A sample application built with Next.js for browsing and filtering events.

## Features

*   Displays a list of upcoming events.
*   Highlights featured events on the main page.
*   Allows users to view details for a specific event.
*   Provides filtering capabilities to find events by month and year.
*   Demonstrates core Next.js concepts like page routing, dynamic routes, data fetching (using dummy data in this version), and component-based UI with React.

## Technologies Used

*   Next.js
*   React
*   JavaScript
*   CSS Modules (likely, based on typical Next.js structure)

## Getting Started

### Prerequisites

*   Node.js and npm (or yarn) installed.

### Installation

1.  Clone the repository (if applicable).
2.  Navigate to the project directory: `cd nextevents`
3.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Development Server

Run the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

Build the application for production:
```bash
npm run build
# or
yarn build
```

Start the production server:
```bash
npm run start
# or
yarn start
```

## Project Structure (Key Directories)

*   `pages/`: Contains the application's pages and API routes.
    *   `index.js`: The home page, likely displaying featured events.
    *   `events/index.js`: Page displaying all events.
    *   `events/[eventId].js`: Dynamic route for displaying single event details.
    *   `events/[...slug].js`: Catch-all route used for filtering events by date.
*   `components/`: Reusable React components used across different pages (e.g., event lists, event items, layout).
*   `public/`: Static assets like images.
*   `dummy-data.js`: Contains the sample event data and functions to access it.
