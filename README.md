# NewFrontend-Purelane

## Overview

This is the basic front end setup for the website for client handling and support. The interface is designed to be good and easy to use for clients, enabling business expansion to a large scale.

This project was developed as an assignment given by the company.

## Project Structure

```
frontend/
├── public/
│   ├── Media/
│   │   └── Images/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Landing_Page/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Reviw_rail.js
│   │   ├── ActualReviwslide.js
│   │   ├── Shop.js
│   │   ├── Bundle.js
│   │   ├── Best_Selling_combo.js
│   │   └── Footer.js
│   ├── index.js
│   └── index.css
├── package.json
└── package-lock.json
```

## Features

- Responsive navigation bar
- Hero section for landing page
- Review carousel with customer testimonials
- Product shop section
- Bundle and combo product displays
- Footer with company information

## Installation

1. Clone the repository
```bash
git clone https://github.com/ShobhitChandra/NewFrontend-Purelane.git
```

2. Navigate to the frontend directory
```bash
cd NewFrontend-Purelane/frontend
```

3. Install dependencies
```bash
npm install
```

4. Create a .env file in the frontend directory and add required environment variables

5. Start the development server
```bash
npm start
```

## Technologies Used

- React
- CSS3
- JavaScript ES6+

## Environment Variables

Create a .env file in the frontend directory with the following variables:

```
REACT_APP_API_URL=your_api_url_here
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App

## License

This project is proprietary and confidential.
