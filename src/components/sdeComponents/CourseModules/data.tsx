import { Module } from './types'

export const modules: Module[] = [
  {
    "id": 1,
    "title": "Module 1",
    "subtitle": "Data Structures and Time Complexity",
    "topics": [
      {
        "id": 2,  
        "title": "Programming Basics (C++ & Python):",
        "content": [
          "Data types, variables, loops, functions, and conditionals.",
          "Input/output handling.",
        ]
          
        },
        {
          "id":3,
          "title":"Introduction to DSA:",
          "content":[
          "Importance and real-world applications of DSA.",
          "Overview of problem-solving with algorithms.",
        ]
        },
        {
         "id":4,
          "title":"Complexity Analysis:",
          "content":[
          "Understanding time complexity: Big O, Big Omega, Big Theta notations.",
          "Space complexity basics.",
          "Common complexities: O(1), O(log n), O(n), O(n log n), O(n²).",
          "Analyzing examples for complexity.",
        ]
      },
    ]
  },

  {
    "id": 2,
    "title": "Module 2",
    "subtitle": "Arrays and Strings",
    "topics": [
      {
        "id": 1,
        "title": "Arrays:",
        "content": [
          "Introduction, declaration, and initialization in C++ and Python.",
          "Traversal, insertion, deletion, and searching in arrays.",
          "Two-dimensional arrays and matrix manipulation.",
         ]
      },
      {
          "id": 2,
        "title":"Strings:",
        "content":[
         "String handling and methods in Python (len, join, split) and C++ (std::string).",
         "Common operations: reverse, palindrome check, anagrams, and substring search.",
        ]
      },
      
     
    ]
  },


  {
    "id": 3,
    "title": "Module 3",
    "subtitle": "Recursion and Errror Handling",
    "topics": [
      {
        "id": 1,
        "title": "Recursion Basics:",
        "content": [
          "Understanding recursion with examples (factorial, Fibonacci).",
          "Stack memory visualization for recursion calls.",
          "Recursive problems and their applications.", 
        ]
      },
      {
          "id": 2,
        "title":"Error Handling:",
         "content":[
          "Try-catch blocks and exceptions.",
          "Debugging techniques and tools.",
        ]
        },
        
    ]
},


{
  "id": 4,
  "title": "Module 4",
  "subtitle": "Searching Algorithms",
  "topics": [
    {
      "id": 1,
      "title": "Searching Algorithms:",
      "content": [
       "Linear Search, Binary Search.",
       "Recursive and iterative implementations.",
       "Analysis of time complexity of searching algorithms.",
      ]
    },
    
  ]
},
{
  "id": 5,
  "title": "Module 5",
  "subtitle": " Sorting Algorithms",
  "topics": [
    {
      "id": 1,
      "title": "Sorting Algorithms:",
      "content": [
        "Bubble Sort, Selection Sort, Insertion Sort.", 
        "Quick Sort, Merge Sort (Divide & Conquer).",
        "Time and Space Complexity Analysis.",
        "Practical Use Cases: When to use which sorting algorithm.",]
    },
  ]
  },
    {
      "id": 6,
      "title": "Module 6",
      "subtitle": "Linked Lists (Singly, Doubly, Circular)",
      "topics": [
        {
          "id": 1,
          "title": "Singly Linked List:",
          "content": [
           "Definition, creation, traversal, insertion, deletion.",
           "Applications of singly linked lists.",
          ]
        },
        {
            "id": 2,
          "title": "Doubly Linked List:",
          "content":[
              "Understanding pointers for next and prev.",
              "Common operations and use cases.",
           ]
        },
        {
            "id": 3,
          "title": "Circular Linked List:",
          "content":[
            "Circular traversal and operations.",
            "Complexity Analysis for common operations in linked lists.",]
        },
        
      ]
  },
  {
    "id": 7,
    "title": "Module 7",
    "subtitle": "Stacks and Queues",
    "topics": [
      {
        "id": 1,
        "title": "Stacks:",
        "content": [
         "Definition and real-life examples (undo operation, expression evaluation).",
         "Stack implementation using arrays and linked lists.",
         "Common stack operations: Push, Pop, Peek, IsEmpty.",
         "Applications of stacks (Balanced Parentheses Problem, Reverse a string using a stack, Evaluate Postfix and Prefix Expressions).",
        ]
      },
      {
        "id": 2,
        "title": "Queues:",
        "content": [
          "Definition and applications in scheduling and buffering.",
          "Queue implementation using arrays and linked lists.",
          "Circular Queue implementation.",
          "Priority Queue and Deque (Double-Ended Queue).",
        ]
      },
    ]
  },

  {
    "id": 8,
    "title": "Module 8",
    "subtitle": "Trees and Binary Search Trees (BST)",
    "topics":[
      {
        "id": 1,
        "title": "Trees Basics:",
        "content":[
          "Binary Tree representation and traversal: Inorder, Preorder, Postorder.",
        ]

      },
      {
        "id": 2,
        "title": "Binary Search Trees:",
        "content":[
          "Insertion, Deletion, and Search.",
        ]

      },
      {
        "id": 2,
        "title":"Advanced Concepts:",
        "content":[
          "Balanced Trees: AVL, Red-Black Trees (overview).",
          "Applications of trees in real-world problems.",
        ]

      },
   ]
  },

  {
    "id": 9,
    "title": "Module 9",
    "subtitle": " Graphs and Their Algorithms",
    "topics":[
      {
        "id": 1,
        "title":"Graph Basics:",
        "content":[
          "Representation: Adjacency List and Matrix.",
          "Traversal Algorithms: BFS and DFS.",
        ]
      },
      {
        "id": 2,
        "title":"Shortest Path Algorithms:",
        "content":[
          "Dijkstra’s Algorithm, Bellman-Ford Algorithm.",
          "Applications of Graph algorithms.",

        ]

      },
      {
        "id": 3,
        "title":"Minimum Spanning Tree",
        "content":[
          "Kruskal’s Algorithm.",
        ]

      }
    ]

  },
  {
    "id": 10,
    "title": "Module 10",
    "subtitle": "Backtracking and Divide & Conquer",
    "topics": [
        {
            "id": 1,
            "title": "Backtracking:",
            "content": [
                "Introduction to Backtracking.",
                "Applications: Maze Problem, N-Queens Problem."
            ]
        },
        {
            "id": 2,
            "title": "Divide and Conquer Approach:",
            "content": [
                "Introduction to Divide & Conquer.",
                "Common Problems: Merge Sort, Quick Sort, Binary Search.",
                "Analyzing Time Complexity for Divide & Conquer Algorithms."
            ]
        }
    ]
},
{
    "id": 11,
    "title": "Module 11",
    "subtitle": "Dynamic Programming",
    "topics": [
        {
            "id": 1,
            "title": "Dynamic Programming Basics:",
            "content": [
                "Overlapping Subproblems and Optimal Substructure.",
                "Common Problems: Knapsack, Longest Common Subsequence, Fibonacci."
            ]
        },
        {
            "id": 2,
            "title": "Advanced Techniques:",
            "content": [
                "Memoization and Tabulation.",
                "State-space Representation."
            ]
        }
    ]
},
{
    "id": 12,
    "title": "Module 12",
    "subtitle": "Object-Oriented Programming (OOP)",
    "topics": [
        {
            "id": 1,
            "title": "OOP Principles:",
            "content": [
                "Encapsulation, Inheritance, Polymorphism, Abstraction.",
                "Real-World Examples of OOP Concepts."
            ]
        },
        {
            "id": 2,
            "title": "Advanced OOP Concepts:",
            "content": [
                "Interfaces and Abstract Classes.",
                "Composition over Inheritance.",
                "Design Patterns: Singleton, Factory, Observer, Decorator."
            ]
        }
    ]
},
{
    "id": 13,
    "title": "Module 13",
    "subtitle": "Operating System",
    "topics": [
        {
            "id": 1,
            "title": "Introduction to Operating Systems:",
            "content": [
                "What is an Operating System? Overview of Types and Functions.",
                "Key Components: Kernel, System Calls, Privileged Instructions.",
                "Introduction to UNIX Systems and Microkernel Concept."
            ]
        },
        {
            "id": 2,
            "title": "Process Scheduling:",
            "content": [
                "Introduction to Process Scheduling.",
                "Process Creation, Deletion, and Process States.",
                "Process Table and Process Control Block (PCB).",
                "CPU Scheduling Algorithms: Preemptive vs Non-Preemptive.",
                "Time Spent in Context Switching.",
                "Starvation and Aging in OS."
            ]
        },
        {
            "id": 3,
            "title": "Process Synchronization:",
            "content": [
                "Introduction to Process Synchronization and Inter-Process Communication (IPC).",
                "Critical Section Problem and Peterson’s Algorithm.",
                "Semaphores, Mutex vs Semaphore, and Monitors.",
                "Classical IPC Problems: Dekker’s and Bakery Algorithms.",
                "Linux Thread Synchronization with Mutex Locks.",
                "Priority Inversion Problem and Solutions."
            ]
        },
        {
            "id": 4,
            "title": "Deadlock:",
            "content": [
                "Introduction to Deadlock and its Concepts: Starvation and Livelock.",
                "Deadlock Prevention, Detection, and Recovery.",
                "Banker’s Algorithm and Resource Allocation Graph (RAG).",
                "Methods of Resource Allocation by OS.",
                "Deadlock Detection in Distributed Systems."
            ]
        },
        {
            "id": 5,
            "title": "Processes & Threads:",
            "content": [
                "Introduction to Threads in Operating Systems.",
                "User-Level vs Kernel-Level Threads.",
                "Process-Based vs Thread-Based Multitasking.",
                "Benefits of Multithreading.",
                "Zombie Processes: Causes and Prevention.",
                "Remote Procedure Call (RPC) in OS."
            ]
        },
        {
            "id": 6,
            "title": "Memory Management:",
            "content": [
                "Introduction to Memory Management and its Types.",
                "Paging, Segmentation, and Virtual Memory.",
                "Memory Interleaving and OS-Based Virtualization.",
                "Swap Space and Page Fault Handling.",
                "Memory Segmentation in 8086 Microprocessor.",
                "Algorithms: Next Fit, Buddy System, and Slab System."
            ]
        },
        {
            "id": 7,
            "title": "Disk Management:",
            "content": [
                "Overview of File Systems and Unix File System.",
                "File Allocation and Access Methods.",
                "Disk Scheduling Algorithms: SSTF.",
                "Free Space Management and Spooling Concepts.",
                "Implementing Directory Management with Shell Script."
            ]
        },
        {
            "id": 8,
            "title": "File Systems:",
            "content": [
                "Advanced File System Topics: NTFS, ext4, FAT32, etc.",
                "File System Mounting and Virtual File System (VFS).",
                "Journaling File Systems."
            ]
        },
        {
            "id": 9,
            "title": "Security in OS:",
            "content": [
                "Security Mechanisms: Access Control, Authentication, Encryption.",
                "File Permissions and User Management.",
                "Role-Based Access Control (RBAC).",
                "OS-Level Security in Multi-User Environments."
            ]
        },
        {
            "id": 10,
            "title": "Networking in OS:",
            "content": [
                "Network Protocols and Networking Stack in OS.",
                "Socket Programming Basics.",
                "Network File System (NFS) and Distributed File Systems.",
                "Communication Between Systems in Distributed Environments."
            ]
        }
    ]
},
{
    "id": 14,
    "title": "Module 14",
    "subtitle": "MongoDB",
    "topics": [
        {
            "id": 1,
            "title": "Introduction to MongoDB:",
            "content": [
                "What is MongoDB? Overview of Collections, Documents, BSON.",
                "Installing MongoDB Locally and Using MongoDB Atlas."
            ]
        },
        {
            "id": 2,
            "title": "CRUD Operations:",
            "content": [
                "Create: Using insertOne() and insertMany().",
                "Read: Using find(), findOne(), Filters, Projections.",
                "Update: Using updateOne(), updateMany().",
                "Delete: Using deleteOne(), deleteMany()."
            ]
        },
        {
            "id": 3,
            "title": "Indexes in MongoDB:",
            "content": [
                "Creating and Using Indexes to Optimize Queries."
            ]
        },
        {
            "id": 4,
            "title": "Data Modeling:",
            "content": [
                "Schema Design.",
                "Embedding vs Referencing Documents."
            ]
        },
        {
            "id": 5,
            "title": "Aggregation Framework:",
            "content": [
                "Basic Aggregation: $match, $group, $sort.",
                "Advanced Aggregation: $lookup, $unwind, $project."
            ]
        },
        {
            "id": 6,
            "title": "MongoDB Security:",
            "content": [
                "Authentication, RBAC (Role-Based Access Control).",
                "Backup and Restore Techniques."
            ]
        }
    ]
},
{
    "id": 15,
    "title": "Module 15",
    "subtitle": "System Design",
    "topics": [
        {
            "id": 1,
            "title": "Introduction to System Design:",
            "content": [
                "What is System Design? Understanding Its Importance and Challenges.",
                "Types of Systems: Distributed, Scalable, Fault-Tolerant Systems.",
                "Key Design Principles: Scalability, Reliability, and Maintainability.",
                "High-Level vs Low-Level Design.",
                "Requirements Gathering: Functional vs Non-Functional Requirements."
            ]
        },
        {
            "id": 2,
            "title": "Designing Scalable Systems:",
            "content": [
                "Vertical vs Horizontal Scaling.",
                "Load Balancing Techniques: Round Robin, Least Connections, IP Hashing.",
                "Sharding: Data Sharding and Application Sharding.",
                "Caching Strategies for Scalability: Memcached, Redis.",
                "Database Scaling: Replication, Partitioning, and Horizontal Scaling."
            ]
        },
        {
            "id": 3,
            "title": "High Availability and Fault Tolerance:",
            "content": [
                "Redundancy Configurations: Active-Active, Active-Passive.",
                "Failover Mechanisms: Automatic and Manual Failover.",
                "Designing for Disaster Recovery.",
                "Ensuring Fault Tolerance Through Replication and Data Redundancy.",
                "Eventual Consistency vs Strong Consistency in Distributed Systems.",
                "Circuit Breaker Pattern and Retry Logic."
            ]
        },
        {
            "id": 4,
            "title": "Microservices and Distributed Systems:",
            "content": [
                "Introduction to Microservices Architecture.",
                "Communication Between Microservices: REST APIs, gRPC, Message Queues.",
                "Service Discovery and Load Balancing in Microservices.",
                "Distributed Databases: CAP Theorem and Its Applications.",
                "Distributed Systems Concepts: Eventual Consistency, Partition Tolerance.",
                "RPC (Remote Procedure Calls) and RMI (Remote Method Invocation) in Distributed Systems."
            ]
        },
        {
            "id": 5,
            "title": "Database Design:",
            "content": [
                "Relational vs Non-Relational Databases.",
                "Choosing the Right Database for Your System.",
                "Designing Scalable and Performant Database Schema.",
                "Indexing and Query Optimization.",
                "Transactions and ACID Properties.",
                "Sharding and Partitioning Strategies.",
                "Caching and Data Consistency Models."
            ]
        },
        {
            "id": 6,
            "title": "System Design Patterns:",
            "content": [
                "Common Design Patterns: Client-Server, Layered (MVC), Master-Slave, Peer-to-Peer.",
                "Proxy, Broker, and Singleton Patterns.",
                "Use of Design Patterns for System Reusability and Maintainability.",
                "Combining Multiple Design Patterns for Complex Systems."
            ]
        },
        {
            "id": 7,
            "title": "Performance Optimization:",
            "content": [
                "Profiling and Identifying Performance Bottlenecks.",
                "Optimizing CPU, Memory, Disk Utilization.",
                "Reducing Latency: Asynchronous Processing, Parallelism, and Concurrency.",
                "Caching Strategies for Performance: Redis, Memcached.",
                "Distributed Caching for Large Systems."
            ]
        },
        {
            "id": 8,
            "title": "Security in System Design:",
            "content": [
                "Securing APIs: Authentication (OAuth, JWT, API Keys).",
                "Authorization: Role-Based Access Control (RBAC).",
                "Data Encryption: At-Rest and In-Transit.",
                "Rate Limiting and Throttling for API Security.",
                "Best Practices: Input Validation, CSRF, XSS.",
                "Logging and Monitoring for Security Auditing."
            ]
        },
        {
            "id": 9,
            "title": "System Design Best Practices:",
            "content": [
                "Designing for Maintainability: Code Structure, Versioning, and Deprecation.",
                "Real-World Design Constraints: Cost, Time, and Complexity.",
                "Documenting and Communicating System Designs.",
                "Preparing for System Design Interviews: Best Practices and Tips."
            ]
        }
    ]
}


 






]
  




  
