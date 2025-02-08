# Project Documentation


## Project Structure

```
neighbor-for-hire/
├── client/                  # Front end (React)
│   ├── public/              # Static assets (e.g., index.html)
│   ├── src/                 # React source code
│   │   ├── components/      # Reusable components (e.g., Navbar, Footer)
│   │   ├── pages/           # Page components (e.g., Home, Login, Signup)
│   │   ├── App.js           # Main application component
│   │   ├── index.js         # Entry point for React app
│   │   └── styles/          # CSS or styling files
│   ├── package.json         # Front end dependencies
│   └── README.md            # Front end documentation
│
├── server/                  # Back end (Node.js + Express)
│   ├── controllers/         # Logic for handling requests (e.g., authController, jobController)
│   ├── middleware/          # Custom middleware (e.g., authentication, error handling)
│   ├── models/              # MongoDB models (e.g., User.js, Job.js)
│   ├── routes/              # API routes (e.g., authRoutes, jobRoutes)
│   ├── utils/               # Utility functions (e.g., JWT generation, validation)
│   ├── .env                 # Environment variables (e.g., MONGO_URI, JWT_SECRET)
│   ├── index.js             # Entry point for the server
│   ├── package.json         # Back end dependencies
│   └── README.md            # Back end documentation
│
├── .gitignore               # Files and folders to ignore in Git
├── .eslintrc.json           # ESLint configuration for code linting
├── .prettierrc              # Prettier configuration for code formatting
└── README.md                # Project documentation
```

### **1. Client (Front End)**

- **`public/`**: Contains static assets like `index.html` and other files that don’t need processing.
- **`src/`**: Contains the React application code.
    - **`components/`**: Reusable UI components (e.g., Navbar, Footer).
    - **`pages/`**: Page components (e.g., Home, Login, Signup).
    - **`App.js`**: Main application component that handles routing.
    - **`index.js`**: Entry point for the React app.
    - **`styles/`**: CSS or styling files for the front end.
- **`package.json`**: Lists front end dependencies and scripts.
- **`README.md`**: Documentation for the front end.

### **2. Server (Back End)**

- **`controllers/`**: Contains logic for handling API requests (e.g., `authController.js`, `jobController.js`).
- **`middleware/`**: Custom middleware for authentication, error handling, etc.
- **`models/`**: MongoDB models (e.g., `User.js`, `Job.js`).
- **`routes/`**: Defines API routes (e.g., `authRoutes.js`, `jobRoutes.js`).
- **`utils/`**: Utility functions (e.g., JWT generation, input validation).
- **`.env`**: Stores environment variables (e.g., `MONGO_URI`, `JWT_SECRET`).
- **`index.js`**: Entry point for the Node.js server.
- **`package.json`**: Lists back end dependencies and scripts.
- **`README.md`**: Documentation for the back end.

### **3. Root Files**

- **`.gitignore`**: Specifies files and folders to ignore in Git (e.g., `node_modules`, `.env`).
- **`.eslintrc.json`**: Configuration for ESLint to enforce coding standards.
- **`.prettierrc`**: Configuration for Prettier to format code consistently.
- **`README.md`**: Overall project documentation.
