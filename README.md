# Neighbor4Hire

Neighbor4Hire is a MERN-stack application designed to connect Service Seekers with Service Providers for local services. 

## Repository Structure

```
Neighbor4Hire/
│
├── client/                        # React frontend application
│   ├── __tests__/                 # Unit & integration tests (Jest + React Testing Library)
│   │
│   ├── public/                    # Static assets and HTML entry point
│   │   ├── assets/                # Images, fonts, icons
│   │   └── index.html             # Main HTML template
│   │
│   ├── src/                       # Application source code
│   │   ├── components/            # Reusable UI components (Buttons, Cards, Forms)
│   │   ├── pages/                 # Route-based page components
│   │   ├── styles/                # Global CSS/CSS-in-JS styles
│   │   ├── App.jsx                # Root component with router configuration
│   │   └── main.jsx               # React DOM mounting point
│   │
│   ├── package-lock.json          # Client dependency locks
│   └── package.json               # React dependencies
│
├── docker/                        # Containerization setup
│   ├── frontend.Dockerfile        # React app container
│   ├── backend.Dockerfile         # Node.js API container
│   └── compose.yaml               # Multi-container orchestration
│
├── Docs/                          # Project documentation
│   ├── wireframes/                # UI/UX designs (textual + visual)
│   ├── CHANGELOG.md               # Version history
│   ├── CONTRIBUTION.md            # Development guidelines
│   └── SDD.md                     # Software Design Document
│
├── scripts/                       # Development automation
│   ├── deploy.sh                  # Production deployment script
│   └── setup.sh                   # Development environment setup
│
├── server/                        # Node.js/Express backend
│   ├── config/                    # Environment configurations
│   │   └── db.config.js           # Database connection setup
│   │
│   ├── controllers/               # Business logic handlers
│   │   ├── auth.controller.js     # Authentication operations
│   │   └── jobs.controller.js     # Job-related operations
│   │
│   ├── middleware/                # Request processing middleware
│   │   ├── auth.middleware.js     # Authentication/authorization
│   │   └── error.middleware.js    # Error handling
│   │
│   ├── models/                    # MongoDB schema definitions
│   │   ├── Booking.js             # Booking schema
│   │   ├── Job.js                 # Job schema
│   │   ├── Review.js              # Review schema
│   │   ├── Transaction.js         # Transaction schema
│   │   └── User.js                # User account schema
│   │
│   ├── routes/                    # API endpoint definitions
│   │   ├── auth.routes.js         # Authentication endpoints
│   │   └── jobs.routes.js         # Job-related endpoints
│   │
│   ├── tests/                     # Unit and integration tests for the back end
│   │
│   ├── utils/                     # Helper functions
│   │   ├── jwt.util.js            # JWT token management
│   │   └── validation.util.js     # Input validation
│   │
│   ├── .env                       # Environment variables (IGNORE IN VCS)
│   ├── .env.example               # Environment template
│   ├── index.js                   # Server entry point
│   ├── package-lock.json          # Server dependency locks
│   └── package.json               # Node.js dependencies
│
├── shared/                        # Cross-project utilities
│   └── constants.js               # Shared enums and configuration
│
├── .eslintrc.json                 # JavaScript linting rules
├── .gitignore                     # VCS ignore patterns
├── .prettierrc                    # Code formatting rules
├── LICENSE                        # License information
└── README.md                      # Project overview and setup

```


- For more details, see the [Software Design Document](./Docs/Neighbor4Hire_SDD.md).
- For contributing to the project, see the [Contribution Guidelines](./Docs/CONTRIBUTION.md).
- For checking the recent updates, see the [Change Log](./Docs/CHANGELOG.md).