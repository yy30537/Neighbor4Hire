# Neighbor4Hire

Neighbor4Hire is a MERN-stack application designed to connect Service Seekers with Service Providers for local services such as plumbing, babysitting, and more. **Please note that we are still in the design phase—no production code has been written yet.**

## Current Status

- **Design Stage**: We are finalizing our software design document and overall project structure.  
- **No Code Implemented**: Implementation will begin after the design and data modeling are complete.

## Repository Structure

```
Neighbor4Hire/
│
├── client/                        # React front end
│   ├── __tests__/                 # React component tests (e.g., Jest, React Testing Library)
│   ├── public/                    # Static assets (index.html, icons, etc.)
│   ├── src/                       # Main React source code
│   │   ├── components/            # Reusable UI components (e.g., Navbar, Footer)
│   │   ├── pages/                 # Page components (e.g., Home, Login, Signup)
│   │   ├── styles/                # CSS or styling files
│   │   ├── App.js                 # Main application component (handles routing)
│   │   └── index.js               # Entry point for the React app
│   └── package.json               # Front end dependencies and scripts
│
├── Docs/                          # Architectural diagrams, project specs, or additional documentation
│
├── server/                        # Node.js + Express back end
│   ├── controllers/               # Request handlers (e.g., authController, jobController)
│   ├── middleware/                # Express middleware (authentication, error handling, etc.)
│   ├── models/                    # Mongoose models (e.g., User.js, Job.js)
│   ├── routes/                    # Express routes (e.g., authRoutes, jobRoutes)
│   ├── tests/                     # Unit and integration tests
│   ├── utils/                     # Utility functions (JWT generation, validation, etc.)
│   ├── .env                       # Environment variables (e.g., MONGO_URI, JWT_SECRET)
│   ├── index.js                   # Entry point for the server
│   ├── package-lock.json          # Automatically generated for locking dependencies
│   └── package.json               # Back end dependencies and scripts
│
├── .eslintrc.json                 # ESLint configuration for consistent code style
├── .gitignore                     # Files and folders to ignore in Git
├── .prettierrc                    # Prettier configuration for formatting
└── README.md                      # Main project documentation
```


- For more details, see the [Software Design Document](./Docs/Neighbor4Hire_Software_Design_Document.md) in the `Docs/` folder.

## Next Steps

1. **Finalize Data Modeling**: Define Mongoose schemas for `User`, `Job`, `Review`, etc.
2. **API Endpoints**: Outline REST endpoints (`/auth`, `/jobs`, `/payments`, `/reviews`).
3. **UI/UX Wireframes**: Sketch key pages (registration flow, job listings, chat, etc.).

