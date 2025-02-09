# Neighbor4Hire

Neighbor4Hire is a MERN-stack application designed to connect Service Seekers with Service Providers for local services such as plumbing, babysitting, and more. **Please note that we are still in the design phase—no production code has been written yet.**

## Current Status

- **Design Stage**: We are finalizing our software design document and overall project structure.  
- **No Code Implemented**: Implementation will begin after the design and data modeling are complete.

## Repository Structure

```
Neighbor4Hire/
│
├── client/                        # React front end code
│   ├── __tests__/                 # React component tests (e.g., Jest, React Testing Library)
│   ├── public/                    # Static assets (e.g., index.html, icons)
│   ├── src/                       # Main React source code
│   │   ├── components/            # Reusable UI components (e.g., Navbar, Footer)
│   │   ├── pages/                 # Page components (e.g., Home, Login, Signup)
│   │   ├── styles/                # CSS or styling files
│   │   ├── App.js                 # Main application component (handles routing)
│   │   └── index.js               # Entry point for the React app
│   └── package.json               # Front end dependencies and scripts
│
├── Docs/                          # Documentation and design materials
│   ├── wireframes/                # UI/UX mockups, wireframes, and flow diagrams
│   └── Neighbor4Hire_Software_Design_Document.md  # Main software design document
│
├── server/                        # Node.js + Express back end code
│   ├── config/                    # Configuration files (e.g., payment gateways, environment settings)
│   ├── controllers/               # Request handlers (e.g., authController, jobController)
│   ├── middleware/                # Custom middleware (authentication, error handling, etc.)
│   ├── models/                    # Mongoose models (e.g., User.js, Job.js)
│   ├── routes/                    # Express routes (e.g., authRoutes, jobRoutes)
│   ├── tests/                     # Unit and integration tests for the back end
│   ├── utils/                     # Utility functions (e.g., JWT generation, validation)
│   ├── .env                       # Environment variables (e.g., MONGO_URI, JWT_SECRET)
│   ├── index.js                   # Entry point for the Node.js server
│   ├── package-lock.json          # Auto-generated lock file for dependencies
│   └── package.json               # Back end dependencies and scripts
│
├── shared/                        # Shared utilities, types, or constants used across client and server
│
├── scripts/                       # Deployment and automation scripts (build, test, deploy, etc.)
│
├── docker/                        # Docker configuration files (e.g., Dockerfile, docker-compose.yml)
│
├── .eslintrc.json                 # ESLint configuration for code linting and style consistency
├── .gitignore                     # Files and folders to ignore in Git
├── .prettierrc                    # Prettier configuration for consistent code formatting
└── README.md                      # Main project README documentation

```


- For more details, see the [Software Design Document](./Docs/Neighbor4Hire_Software_Design_Document.md) in the `Docs/` folder.

## Next Steps

1. **Finalize Data Modeling**: Define Mongoose schemas for `User`, `Job`, `Review`, etc.
2. **API Endpoints**: Outline REST endpoints (`/auth`, `/jobs`, `/payments`, `/reviews`).
3. **UI/UX Wireframes**: Sketch key pages (registration flow, job listings, chat, etc.).

