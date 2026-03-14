import { Module } from './types'

export const modules: Module[] = [
  {
    "id": 1,
    "title": "Module 1",
    "subtitle": "UI Design with Figma",
    "topics": [
      {
        "id": 1,
        "title": "UI/UX Principles and Figma Introduction",
        "content": [
          "Introduction to UI/UX design principles",
          "Setting up and navigating Figma"
        ]
      },
      {
        "id": 2,
        "title": "Designing with Figma",
        "content": [
          "Designing web layouts and components",
          "Wireframing: low-fidelity vs high-fidelity",
          "Building prototypes and clickable flows"
        ]
      },
      {
        "id": 3,
        "title": "Figma for Handoff and Productivity",
        "content": [
          "Exporting assets for development (SVG, PNG)",
          "Design handoff to developers using Figma Inspect",
          "Figma Plugins for productivity (Icons, Colors, Unsplash, etc.)"
        ]
      }
    ]

  },

  {
    "id": 2,
    "title": "Module 2",
    "subtitle": "HTML5, CSS3 and Responsive Design",
    "topics": [
      {
        "id": 1,
        "title": "HTML5 Essentials",
        "content": [
          "Understanding the Web and HTTP/HTTPS",
          "HTML5 Document structure, semantic tags",
          "header, nav, section, article, aside, footer",
          "Forms: inputs, validation, labels, accessibility"
        ]
      },
      {
        "id": 2,
        "title": "CSS3 Fundamentals",
        "content": [
          "Box model, display types (block, inline, flex, grid)",
          "Positioning: static, relative, absolute, fixed, sticky",
          "Pseudoclasses and pseudoelements",
          "Styling forms, buttons, tables, and navbars"
        ]
      },
      {
        "id": 3,
        "title": "Responsive Web Design",
        "content": [
          "Media queries",
          "Mobile-first design principles",
          "Units: %, em, rem, vw, vh",
          "Viewport meta tag"
        ]
      }
    ]
  },
  

 {
    "id": 3,
    "title": "Module 3",
    "subtitle": "Tailwind CSS and Bootstrap",
    "topics": [
      {
        "id": 1,
        "title": "Tailwind CSS (Utility-first Framework)",
        "content": [
          "Installation via CDN and PostCSS",
          "Responsive utilities (sm, md, lg, xl, 2xl)",
          "Hover, focus, active, disabled states",
          "Flexbox and Grid layout using Tailwind",
          "Custom configuration with tailwind.config.js",
          "Dark mode support"
        ]
      },
      {
        "id": 2,
        "title": "Bootstrap 5 Essentials",
        "content": [
          "Container, rows, columns, responsive breakpoints",
          "Components: navbar, card, alert, modal, form",
          "Grid system and layout techniques",
          "Extending Bootstrap with custom styles"
        ]
      },
    ]
},

{
  "id": 4,
  "title": "Module 4",
  "subtitle": "Git and GitHub Essentials",
  "topics": [
    {
      "id": 1,
      "title": "Git Basics",
      "content": [
        "git init, clone, status, add, commit, log, reset",
        "Branching: git branch, checkout, merge, rebase"
      ]
    },
    {
      "id": 2,
      "title": "Working with GitHub",
      "content": [
        "Forking, Pull requests, Issues",
        "Collaborating with teams using GitHub",
        "GitHub Actions",
        "Markdown for README files"
      ]
    },
  ]
},
{
  "id": 5,
  "title": "Module 5",
  "subtitle": "JavaScript (ES6+) Programming",
  "topics": [
    {
      "id": 1,
      "title": "JavaScript Essentials",
      "content": [
        "Variables (var, let, const), types, operators",
        "Conditional statements, loops, functions",
        "Arrays and objects, array methods"
      ]
    },
    {
      "id": 2,
      "title": "Modern ES6+ Features",
      "content": [
        "Destructuring, template literals, spread/rest",
        "Arrow functions, default parameters",
        "Optional chaining, nullish coalescing",
        "Object shorthand, enhanced object literals"
      ]
    },
    {
      "id": 3,
      "title": "Error Handling",
      "content": [
        "try, catch, finally, throw"
      ]
    },
    {
      "id": 4,
      "title": "JavaScript in the Browser",
      "content": [
        "window, document, events, listeners",
        "DOM manipulation: getElementById, querySelector, etc."
      ]
    }
  ]
}
,
   {
  "id": 6,
  "title": "Module 6",
  "subtitle": "Async JavaScript and Browser APIs",
  "topics": [
    {
      "id": 1,
      "title": "Asynchronous Programming",
      "content": [
        "Callbacks, callback hell",
        "Promises and .then(), .catch()",
        "async/await with try-catch"
      ]
    },
    {
      "id": 2,
      "title": "Fetch API and HTTP",
      "content": [
        "Making GET, POST, PUT, and DELETE requests",
        "Handling JSON and errors"
      ]
    },
    {
      "id": 3,
      "title": "Working with Browser APIs",
      "content": [
        "localStorage, sessionStorage",
        "Location, Geolocation, Clipboard, Timers"
      ]
    }

      ]
  },
  {
  "id": 7,
  "title": "Module 7",
  "subtitle": "Node.js Fundamentals",
  "topics": [
    {
      "id": 1,
      "title": "Node.js Basics",
      "content": [
        "Introduction to Node.js and NPM",
        "Modules: builtin, third-party, and custom",
        "File System (fs) module"
      ]
    },
    {
      "id": 2,
      "title": "Server and Configuration",
      "content": [
        "Creating a web server with the HTTP module",
        "Environment variables and the dotenv file",
        "Logging and Debugging in Node.js"
      ]
    }
  ]
}
,
{
  "id": 8,
  "title": "Module 8",
  "subtitle": "Express.js for RESTful APIs",
  "topics": [
    {
      "id": 1,
      "title": "Introduction to Express.js",
      "content": [
        "Creating server, routes, and middleware",
        "Route params, query strings, URL structure"
      ]
    },
    {
      "id": 2,
      "title": "Middleware in Express",
      "content": [
        "Built-in: express.json(), express.urlencoded()",
        "Custom logging and error-handling middleware"
      ]
    },
    {
      "id": 3,
      "title": "REST API Design",
      "content": [
        "CRUD Operations",
        "REST conventions and naming"
      ]
    },
    {
      "id": 4,
      "title": "Authentication and Authorization",
      "content": [
        "JWT (jsonwebtoken), Bcrypt hashing",
        "Login, Register, Logout routes",
        "Protecting routes with middleware"
      ]
    },
    {
      "id": 5,
      "title": "Input Validation",
      "content": [
        "express-validator, Joi"
      ]
    }
  ]
}
,
{
  "id": 9,
  "title": "Module 9",
  "subtitle": "MongoDB and Mongoose",
  "topics": [
    {
      "id": 1,
      "title": "MongoDB Basics",
      "content": [
        "NoSQL concepts, Documents, Collections",
        "Mongo Shell and Compass GUI",
        "CRUD operations, indexes, and aggregation basics"
      ]
    },
    {
      "id": 2,
      "title": "Mongoose ODM",
      "content": [
        "Defining schemas and models",
        "Data types, validation, pre/post hooks",
        "Relationships: referencing and embedding",
        "Populating references"
      ]
    },
    {
      "id": 3,
      "title": "MongoDB Atlas",
      "content": [
        "Creating a cloud DB, securing it with IP, and users",
        "Cluster and Database management",
        "Metrics, backup, and monitoring tools"
      ]
    },
    {
      "id": 4,
      "title": "Aggregation Pipeline",
      "content": [
        "$match, $group, $project, $sort, $lookup"
      ]
    }
  ]
}
,
{
  "id": 10,
  "title": "Module 10",
  "subtitle": "React.js Fundamentals",
  "topics": [
    {
      "id": 1,
      "title": "React Basics",
      "content": [
        "Introduction to React and JSX",
        "Functional Components and Props",
        "State Management with useState",
        "Side Effects with useEffect",
        "Conditional Rendering and Lists",
        "Handling Events",
        "Component Folder Structure"
      ]
    }
  ]
}
,
{
  "id": 11,
  "title": "Module 11",
  "subtitle": "React Router and Form Handling",
  "topics": [
    {
      "id": 1,
      "title": "React Router v6",
      "content": [
        "Routes, BrowserRouter, useNavigate",
        "Nested routes and dynamic routing"
      ]
    },
    {
      "id": 2,
      "title": "Forms",
      "content": [
        "Controlled vs uncontrolled components",
        "Validation using Formik and Yup",
        "File uploads using input[type=file]"
      ]
    },
    {
      "id": 3,
      "title": "Toast Notifications",
      "content": [
        "Using react-toastify for feedback"
      ]
    }
  ]
}
,
{
  "id": 12,
  "title": "Module 12",
  "subtitle": "Global State Management",
  "topics": [
    {
      "id": 1,
      "title": "Context API",
      "content": [
        "Creating context, provider, consumer",
        "useContext for access"
      ]
    },
    {
      "id": 2,
      "title": "Redux Toolkit",
      "content": [
        "Creating slices, actions, reducers",
        "Dispatching actions from components",
        "Managing async calls with Redux Thunk"
      ]
    }
  ]
}
,
{
  "id": 13,
  "title": "Module 13",
  "subtitle": "Fullstack Integration",
  "topics": [
    {
      "id": 1,
      "title": "Connecting React and Express",
      "content": [
        "Connecting React to Express backend",
        "Using Axios to send requests",
        "Handling cookies, tokens (localStorage, sessionStorage)",
        "Managing protected frontend routes",
        "Handling CORS in Express"
      ]
    }
  ]
},
{
  "id": 14,
  "title": "Module 14",
  "subtitle": "Fullstack App Architecture",
  "topics": [
    {
      "id": 1,
      "title": "Project Structure and Configuration",
      "content": [
        "Folder structure for mono repo",
        "Using .env files in both frontend and backend",
        "Production vs development configurations",
        "Build scripts and process"
      ]
    }
  ]
},
  
  {
  "id": 15,
  "title": "Module 15",
  "subtitle": "Testing, CI/CD and Deployment",
  "topics": [
    {
      "id": 1,
      "title": "Backend Testing",
      "content": [
        "Jest",
        "Supertest",
        "Testing route handlers and middleware"
      ]
    },
    {
      "id": 2,
      "title": "Frontend Testing",
      "content": [
        "React Testing Library",
        "Jest"
      ]
    },
    {
      "id": 3,
      "title": "API Testing",
      "content": [
        "Postman",
        "Swagger UI"
      ]
    },
    {
      "id": 4,
      "title": "CI/CD with GitHub Actions",
      "content": [
        "Linting",
        "Build checks",
        "Testing"
      ]
    },
    {
      "id": 5,
      "title": "Deployment",
      "content": [
        "Frontend: Netlify, Vercel",
        "Backend: Render, Railway, Heroku",
        "MongoDB Atlas setup",
        "Domain setup",
        "HTTPS configuration",
        "Custom domains"
      ]
    }
  ]
}

]