import { Module } from './types'

export const modules: Module[] = [
  {
    "id": 1,
    "title": "Module 1",
    "subtitle": "Advanced Version Control with Git and GitHub",
    "topics": [
      {
        "id": 2,  
        "title": "Git Essentials :",
        "content": [
          "Introduction to Version Control:",
          "Understand the significance of version control and the problems it solves in collaborative development.",
        ]
          
        },
        {
          "id":3,
          "title":"Git Basics Refresher:",
          "content":[
          "Installing and configuring Git.",
          "Initializing a Git repository and understanding .git directory structure.",
          "Basic commands: git add, git commit, git status, git log.",
          "Configuring user information: username, email, and aliases for command-line efficiency.",
          ]
        },
        {
         "id":4,
          "title":"File Lifecycle in Git:",
          "content":[
          "From untracked to committed.",
          "Staging area and working directory concepts."
        ]
      },
      {
        "id": 5,
        "title": " Advanced Git Concepts:",
        "content": [
          "Deep Dive into Git Internals:",
          "How Git tracks changes using commit objects, blobs, and trees.",
          "SHA-1 hashes and their role in versioning.",
        ]
      },
      {
        "id": 6,
        "title": "Branching Strategies:",
        "content": [
          "Creating, merging, and deleting branches (git branch, git merge, git branch -d).",
          "GitFlow Workflow: Release, hotfix, and feature branches.",
          "Trunk-Based Development: When and why to use it.",
        ]
      },
      {
        "id": 7,
        "title": "Merge and Rebase Strategies:",
        "content": [
          
          "Handling fast-forward and recursive merges.",
          "Resolving conflicts effectively with git merge and git mergetool.",
          "Interactive Rebase: Cleaning up commit history (git rebase -i) and resolving rebase conflicts.",
        ]
      },
      {
          "id": 8,
        "title": "Git Stash:",
        "content":[
          "Temporary storage of changes (git stash save, git stash apply, git stash pop).",
          "Managing multiple stashes and resolving conflicts from stashed changes.",
        ]
      },
      {
          "id": 9,
        "title": "Git Submodules:",
        "content" : [
          "Adding submodules to a repository (git submodule add).",
          "Updating and cloning repositories with submodules.",
        ]
      },
      {
          "id": 10,
        "title": "Git Hooks:",
        "content" : [
          "Automating workflows with pre-commit, post-merge, and pre-push hooks.",
          "Example: Using a pre-commit hook to enforce code formatting."
        ]
      },
      {
        "id": 11,
        "title": " GitHub for Collaboration:",
        "content": [
          "Repository Management:",
          "Creating repositories: Private, public, and internal visibility.",
          "Managing access controls with teams and collaborators.",
          "Forking, cloning, and synchronizing repositories.",
        ]
      },
      {
        "id": 12,
        "title":"Pull Requests and Code Reviews:",
        "content":[
          "Creating pull requests and adding reviewers.",
          "Handling review comments and suggested changes.",
          "Enabling branch protection rules to enforce quality standards.",
        ]
      },
      {
         "id": 13,
        "title":"GitHub Actions:",
         "content":[
           "Introduction to GitHub Actions: Benefits and use cases.",
          "Writing workflows using YAML for automating CI/CD.",
          "Prebuilt actions from GitHub Marketplace for testing, building, and deploying.",
         ]
        },
        {

          "id": 14,
        "title": "Issue Tracking and Project Boards:",
        "content" : [
          "Creating, assigning, and labeling issues.",
          "Using GitHub Project Boards to organize tasks (Kanban-style).",
          "Automating issue tracking with workflows.",
        ]
      },
      {
          "id": 15,
        "title":"Publishing Documentation:",
        "content": [
          "Using GitHub Pages for static site hosting.",
          "Creating and publishing project documentation (README, Wiki, and Pages)."
        ]
      },
    ]
  },

  {
    "id": 2,
    "title": "Module 2",
    "subtitle": "Continuous Integration and Continuous Delivery (CI/CD)",
    "topics": [
      {
        "id": 1,
        "title": "Jenkins: Automating CI/CD with Advanced Pipelines",
        "content": [
          "Jenkins Setup:",
          "Installing Jenkins on various platforms (Linux, Docker).",
          "Configuring Jenkins Master-Slave architecture for distributed builds.",
          "Setting up agents for load balancing and scalability in build processes.",
        ]
      },
      {
          "id": 1,
        "title":"Pipeline as Code:",
        "content":[
          "Writing and managing Declarative Pipelines using Jenkinsfile.",
          "Multi-branch pipelines for handling complex workflows in Git repositories.",
          "Configuring stages for build, test, and deploy with parallel executions.",
        ]
      },
      {
         "id": 2,
        "title": "Integration with DevOps Tools:",
        "content":[
          "Connecting Jenkins with Git for version control.",
          "Automating builds with Maven and managing dependencies efficiently.",
          "Building and publishing Docker images directly from Jenkins.",
        ]
      },
      {
          "id": 3,
        "title":"Automating Tests and Deployments:",
        "content":[

          "Integrating with testing frameworks like JUnit and Selenium for automated test execution.",
          "Deploying applications to Kubernetes, AWS, or other platforms from Jenkins pipelines.",
        ]
      },
      {
          "id": 4,
        "title":"Advanced Jenkins Plugins:",
        "content" :[
          "Artifactory Plugin: Managing and publishing artifacts to repositories.",
          "SonarQube Integration: Performing static code analysis for quality assurance.",
          "Kubernetes Plugin: Deploying and scaling workloads on Kubernetes clusters.",
          "Blue Ocean: Simplified visualization and management of Jenkins pipelines."
        ]
      },
      {
        "id": 5,
        "title": "GitLab CI/CD: Simplifying and Automating Workflows",
        "content": [
          "Introduction to GitLab CI/CD:",
          "Understanding GitLab runners and their role in executing jobs.",
          "Setting up a .gitlab-ci.yml file for defining CI/CD pipelines.",
        ]
      },
      {   
         "id": 6,
        "title":"Building Multi-Stage Pipelines:",
           "content":[
            "Writing multi-stage pipelines for building, testing, and deploying applications.",
          "Managing parallel and sequential jobs to optimize build times.",
           ]
          },
          {
            "id": 7,
        "title":"Containerized Application Builds:",
        "content":[
          "Using Docker in GitLab runners to build containerized applications.",
          "Publishing Docker images to GitLab Container Registry or Docker Hub.",
        ]
      },
      {
          "id": 8,
        "title":"GitLab Auto DevOps:",
          "content":[
            "Leveraging Auto DevOps for automatic build, test, and deploy workflows.",
          "Customizing Auto DevOps templates for specific project requirements.",
          ]
        },
        {
          "id": 9,
        "title":"Secrets and Variables Management:",
        "content":[
          "Storing and using sensitive data (API keys, passwords) securely within pipelines.",
          "Configuring environment-specific variables for staging and production environments."
        ]
      },
      {
        "id": 10,
        "title": "CircleCI: Optimizing Build and Delivery Processes",
        "content": [
          "Introduction to CircleCI:",
          "Setting up a CircleCI account and integrating with GitHub or GitLab repositories.",
          "Using config.yml for defining workflows, jobs, and steps.",
        ]
      },
        {  
          "id": 11,
        "title":"Efficient Workflow Management:",
        "content":[
          "Configuring pipelines with multiple workflows for build, test, and deploy stages.",
          "Utilizing caching mechanisms to speed up repetitive tasks (e.g., dependency installation).",
        ]
      },
      {
          "id": 12,
        "title":"Parallelism and Resource Optimization:",
        "content":[
          "Running tests and builds in parallel to reduce pipeline execution times.",
          "Optimizing resource allocation using CircleCI’s resource classes.",
        ]
      },
      {
          "id": 13,
        "title":"Reusable CircleCI Orbs:",
        "content":[
          "Understanding and utilizing Orbs for prebuilt tasks (e.g., Docker, Kubernetes, AWS).",
          "Writing custom Orbs for specific project needs."
        ]
      }
    ]
  },


  {
    "id": 3,
    "title": "Module 3",
    "subtitle": "Containerization and Orchestration",
    "topics": [
      {
        "id": 1,
        "title": "Docker: Building and Managing Containers",
        "content": [
          "Introduction to Docker:",
          "Core concepts of containers, images, and the Docker Engine.",
          "Differences between containers and virtual machines.",
        ]
      },
      {
          "id": 2,
        "title":"Writing Efficient Dockerfiles:",
         "content":[
           "Creating lightweight and optimized Docker images.",
          "Multi-stage builds to reduce image size and improve security.",
          "Best practices for layer caching and minimizing build times.",
         ]
        },
        {
         "id": 3,
        "title": "Docker Compose:",
        "content":[
          "Defining multi-container applications using docker-compose.yml.",
          "Managing services, networks, and volumes for multi-container setups.",
          "Common use cases: Microservices, LAMP/LEMP stacks, and local development environments.",
        ]
      },
      {
          "id": 4,
        "title":"Docker Networking:",
        "content":[
          "Understanding default networks: Bridge, host, and none.",
          "Configuring custom networks for container communication.",
          "Overlay networks for multi-host communication.",
        ]
      },
        {
          "id": 5,
        "title": "Docker Security:",
        "content":[
          "Scanning images for vulnerabilities using tools like Snyk and Docker Scan.",
          "Managing secrets and sensitive data in Docker containers.",
          "Restricting container capabilities for enhanced security."
        ]
      },
      {
        "id": 6,
        "title": "Podman: Rootless Container Management",
        "content": [
          "Introduction to Podman:",
          "Understanding the differences between Podman and Docker.",
          "Benefits of rootless architecture for enhanced security.",
        ]
      },
      {
          "id": 7,
        "title":"Managing Containers and Pods:",
        "content":[
          "Creating and managing containers without a central daemon.",
          "Working with pods to group containers and share resources.",
        ]
      },
      {
        "id": 8,
        "title" :  "Migrating from Docker to Podman:",
         "content":[ 
        "Using Docker-compatible commands for a seamless transition.",
          "Converting docker-compose.yml to Podman-supported configurations."
        ]
      },
      {
        "id": 9,
        "title": "Kubernetes: Advanced Orchestration",
        "content": [
          "Core Kubernetes Concepts:",
          "Brief overview of Pods, Deployments, and Services.",
        ]
      },
      {
        "id": 10,
        "title": "Advanced Pod Scheduling:",
        "content":[
          "Node Affinity and Anti-Affinity for controlling pod placement.",
          "Using Taints and Tolerations to schedule pods on specific nodes.",
        ]
      },
      {
          "id": 11,
        "title": "Workload Scaling:",
        "content":[
          "Configuring Horizontal Pod Autoscaler (HPA) to scale pods based on CPU and memory usage.",
          "Using Vertical Pod Autoscaler (VPA) to adjust pod resource requests and limits.",
        ]
      },
      {
           "id": 12,
        "title":"Kubernetes Networking:",
        "content":[
          "Setting up Ingress Controllers for HTTP/HTTPS routing.",
          "Defining Network Policies to control communication between pods.",
        ]
      },
      {
        "id": 13,
        "title": "Persistent Storage:",
        "content":[
          "Creating Persistent Volumes (PVs) and Persistent Volume Claims (PVCs).",
          "Using StorageClasses for dynamic volume provisioning.",
        ]
      },
      {                
       "id": 14,
        "title":"Kubernetes Observability:",
        "content":[
          "Setting up metrics-server for resource monitoring.",
          "Integrating Prometheus and Grafana for advanced observability.",
        ]
      },
      {
           "id": 15,
        "title":"Kubernetes Security:",
        "content":[
          "Implementing Role-Based Access Control (RBAC) for fine-grained access control.",
          "Configuring PodSecurityPolicy to enforce security constraints.",
          "Managing secrets for storing sensitive information securely."
        ]
      },
      {
        "id": 16,
        "title": "Docker Swarm: Lightweight Container Orchestration",
        "content": [
          "Setting Up a Swarm Cluster:",
          "Initializing a Docker Swarm manager and adding worker nodes.",
          "Deploying services to a Swarm cluster.",
        ]
      },
      {
          "id": 17,
        "title":"Secrets and Config Management:",
        "content": [
          "Storing and managing sensitive information using Swarm secrets.",
          "Deploying services with environment-specific configurations.",
        ]
      },
      {
          "id": 18,
        "title":"Scaling and Load Balancing:",
          "content":[
          "Scaling services horizontally to handle increased traffic.",
          "Configuring built-in load balancing for Swarm services."
        ]
      },
      {
        "id": 19,
        "title": "OpenShift: Enterprise-Grade Container Orchestration",
        "content": [
          "Introduction to OpenShift:",
          "Understanding OpenShift architecture and its enterprise features.",
          "Differences between Kubernetes and OpenShift.",
        ]
      },
      {
          "id": 20,
        "title":"Application Deployment in OpenShift:",
        "content":[
          "Using OpenShift templates and Operators for automated deployments.",
          "Setting up CI/CD pipelines with OpenShift Pipelines.",
        ]
      },
      {
          "id": 21,
        "title":"OpenShift Security:",
        "content":[
          "Managing authentication and authorization using OpenShift RBAC.",
          "Securely handling secrets and configuration data in OpenShift."
        ]
      },
    ]
},


{
  "id": 4,
  "title": "Module 4",
  "subtitle": "Infrastructure as Code (IaC)",
  "topics": [
    {
      "id": 1,
      "title": "Terraform: Infrastructure Provisioning Made Easy",
      "content": [
        "Introduction to Terraform:",
        "Overview of Infrastructure as Code (IaC) and the role of Terraform.",
        "Setting up Terraform CLI and understanding the execution workflow: plan, apply, and destroy.",
        "Understanding the provider ecosystem (e.g., AWS, Azure, GCP).",
      ]
    },
    {
        "id": 2,
        "title":"Writing Reusable Modules:",
        "content":[
          "Creating modules for frequently used infrastructure components (e.g., VPC, EC2, RDS).",
        "Utilizing variables, outputs, and locals for dynamic and parameterized modules.",
        "Best practices for module versioning and module registries.",
        ]
      },
        {
          "id": 3,
        "title":"State Management:",
        "content":[
          "Understanding the Terraform state file and its role in resource tracking.",
        "Remote state management using backends like S3, Azure Blob Storage, and GCS.",
        "Locking strategies to avoid state file conflicts in team environments.",
        "Secure storage of sensitive information in state files.",
        ]
        },
        {
          "id": 4,
        "title":"Multi-Cloud Provisioning:",
        "content":[
          "Provisioning infrastructure on multiple cloud platforms simultaneously.",
        "Managing cloud-specific configurations with provider blocks.",
        "Implementing environment-specific configurations using workspaces.",
        ]
        },
        {
        "id": 5,
        "title":"Advanced Terraform Features:",
        "content": [
          "Dynamic blocks for repetitive resource definitions.",
        "Using Terraform Cloud/Enterprise for team collaboration and automated workflows.",
        "Terraform with CI/CD pipelines for automated infrastructure changes."
      ]
    },
    {
      "id": 6,
      "title": "Ansible: Configuration Management and Automation",
      "content": [
        "Introduction to Ansible:",
        "Understanding agentless architecture and push-based automation.",
        "Setting up Ansible inventory (static and dynamic) for managing hosts.",
        "Core components: Playbooks, roles, and modules.",
      ]
    },
    {
       "id": 7,
        "title": "Writing Modular Playbooks and Roles:",
        "content":[
        "Structuring playbooks for readability and reusability.",
        "Writing roles with default variables, tasks, handlers, and templates.",
        "Organizing roles with dependencies and Ansible Galaxy integration.",
        ]
      },
        {
          "id": 8,
        "title":"Ansible Vault:",
        "content": [
          "Encrypting sensitive information like API keys and passwords using Ansible Vault.",
        "Managing decryption in CI/CD pipelines for secure automation.",
        ]
      },
      {
        "id": 9,
        "title":"Automating Patch Management:",
        "content":[
        "Creating playbooks for automated Linux server patching with package managers (e.g., yum, apt).",
        "Scheduling periodic patching using tools like cron or Ansible AWX.",
        ]
      },
      {
        "id": 10,
        "title":"Optimizing Ansible Performance:",
        "content":[
          "Using fact caching for faster execution.",
        "Implementing asynchronous tasks and parallel execution.",
        "Leveraging ansible-pull for pull-based configurations.",
        ]
      },
      {
       "id": 11,
        "title": "Integrating Ansible with Other Tools:",
        "content": [
          "Configuring cloud resources (e.g., AWS, Azure, GCP) using Ansible modules.",
        "Managing Kubernetes configurations with Ansible.",
        "Integrating with Terraform for post-provisioning tasks (e.g., application deployment)."
      ]
    },
  ]
},
{
  "id": 5,
  "title": "Module 5",
  "subtitle": "Monitoring & Observability",
  "topics": [
    {
      "id": 1,
      "title": "Prometheus & Grafana",
      "content": [
        "Prometheus:",
        "Introduction to Prometheus and its role in observability.",
        "Setting up Prometheus with custom configuration for scraping targets.",
      ]
    },
    {
        "id": 2,
          "title": "Writing PromQL queries for real-time metrics analysis, including:",
          "content":[
        "Aggregations (e.g., rate(), sum()).",
        "Functions for anomaly detection.",
        "Building multi-dimensional metrics.",
        "Managing Prometheus exporters for system and application metrics (e.g., Node Exporter, Blackbox Exporter).",
        "Alerting with Alertmanager: Setting up alerts for threshold breaches and downtimes.",
          ]
        },
        {
        
        "id": 3,
          "title":   "Grafana:",
          "content":[
        "Installing and configuring Grafana for visualizing Prometheus metrics.",
        "Advanced dashboard creation:",
        "Custom panels with thresholds, trends, and correlation metrics.",
        "Templates and variables for dynamic visualizations.",
        "Integrating Grafana with multiple data sources (e.g., Prometheus, Loki, and cloud services).",
        "Exporting dashboards and automating their deployment with Grafana APIs."
      ]
    },
    {
      "id": 4,
      "title": "ELK Stack (Elasticsearch, Logstash, Kibana)",
      "content": [
        "Elasticsearch:",
        "Setting up Elasticsearch clusters for scalability and redundancy.",
        "Managing indices, shards, and replicas for efficient data querying.",
        "Querying logs using the Elasticsearch Query DSL (e.g., match queries, aggregations).",
      ]
    },
    {
       "id": 5,
      "title":  "Logstash:",
      "content":[

        "Configuring Logstash pipelines for ingesting and transforming log data.",
        "Applying filters to parse logs (e.g., Grok, mutate, and date filters).",
        "Using Logstash plugins for enrichment (e.g., GeoIP and DNS).",
      ]
    },
     {
      "id": 6,
      "title": "Kibana:",
      "content":[
        "Creating detailed and actionable dashboards in Kibana.",
        "Configuring visualizations for log trends, errors, and user activity.",
        "Setting up Kibana alerts for operational insights."
      ]
    },
    {
      "id": 7,
      "title": "Splunk",
      "content": [
        "Introduction to Splunk:",
        "Overview of Splunk architecture: Forwarders, indexers, and search heads.",
        "Configuring Splunk forwarders for log ingestion from applications and systems.",
      ]
    },
    {
        "id": 8,
          "title": "Real-Time Log Aggregation:",
          "content":[
        "Setting up data inputs for various sources (e.g., HTTP Event Collector, syslog).",
          ]
        },
        {
          "id": 9,
          "title": "Creating Splunk queries using the Splunk Processing Language (SPL) for:",
          "content":[
        "Log filtering.",
        "Anomaly detection with statistical models.",
        "Trend analysis.",
          ]
        },
        {
          "id": 10,
          "title": "Monitoring and Alerting:",
          "content":[
        "Configuring alerts for log anomalies and system performance.",
        "Setting up dashboards for infrastructure health and application metrics."
      ]
    }
  ]
  },
    {
      "id": 6,
      "title": "Module 6",
      "subtitle": "DevSecOps and Build Tools",
      "topics": [
        {
          "id": 1,
          "title": "SonarQube for Static Code Analysis",
          "content": [
            "Introduction to Static Code Analysis:",
            "What is static code analysis, and why is it critical in modern DevSecOps pipelines?",
            "Overview of SonarQube and its integration with DevOps workflows.",
          ]
        },
        {
            "id": 2,
          "title": "SonarQube Setup:",
          "content":[

            "Installing and configuring SonarQube server and scanner.",
            "Configuring quality profiles and quality gates to enforce coding standards.",
            "Analyzing code coverage, technical debt, and code smells.",
          ]
        },
        {
            "id": 3,
          "title": "SonarQube Integration:",
          "content":[
            "Integrating SonarQube with build tools (Maven, Gradle) for automated code analysis.",
            "Using SonarQube plugins for CI/CD tools like Jenkins, GitLab CI/CD, and GitHub Actions.",
            "Generating reports and actionable insights to improve code quality."
          ]
        },
        {
          "id": 4,
          "title": "Snyk for Vulnerability Scanning",
          "content": [
            "Introduction to Snyk:",
            "Overview of software vulnerabilities and their impact on application security.",
            "Features of Snyk for scanning code, dependencies, containers, and IaC files.",
          ]
        },
        
        {
          "id": 5,
          "title":"Using Snyk for Code and Dependency Scanning:",
          "content":[
            "Setting up Snyk CLI and dashboard for project scanning.",
            "Scanning open-source dependencies for known vulnerabilities.",
            "Monitoring vulnerabilities over time and creating remediation workflows.",
          ]
        },
        {
          "id": 6,
          "title":"Container and IaC Scanning with Snyk:",
          "content":[
            "Analyzing container images for vulnerabilities in base images and application layers.",
            "Scanning Terraform and Kubernetes configuration files for security risks.",
          ]
        },
            
        {
          "id": 7,
          "title":"Snyk Integration with DevOps Pipelines:",
          "content":[
            "Automating vulnerability scans in CI/CD workflows using Jenkins, GitHub Actions, and GitLab CI/CD.",
            "Generating real-time alerts and vulnerability reports for proactive issue resolution."
          ]
        },
        {
          "id": 8,
          "title": "Maven and Gradle for Dependency and Build Management",
          "content": [
            "Introduction to Build Tools:",
            "Overview of Maven and Gradle as essential tools for Java-based application development.",
            "Key differences between Maven and Gradle.",
          ]
        },
            
        {
          "id": 9,
          "title":"Maven:",
          "content":[
            "Understanding Maven’s project structure and POM (Project Object Model).",
            "Managing dependencies using Maven Central Repository.",
            "Writing custom goals and plugins for extended functionality.",
            "Automating tests and packaging applications into deployable artifacts.",
          ]
        },
            
        {
          "id": 10,
          "title":"Gradle:",
          "content":[
            "Introduction to Gradle’s Groovy-based DSL.",
            "Managing dependencies and resolving version conflicts.",
            "Configuring multi-project builds for complex applications.",
            "Optimizing builds with caching and parallel execution.",
          ]
        },
            
        {
          "id": 11,
          "title":"Advanced Build Automation:",
          "content":[
            "Using Maven and Gradle in conjunction with Jenkins, GitLab CI/CD, and CircleCI for automated builds and testing.",
            "Managing and versioning artifacts with repositories like Nexus or Artifactory."
          ]
        }
      ]
  },
  {
    "id": 7,
    "title": "Module 7",
    "subtitle": "Linux",
    "topics": [
      {
        "id": 1,
        "title": "Introduction to Linux for DevOps",
        "content": [
          "Why Linux for DevOps?",
          "Importance of Linux in cloud computing, automation, and containerized environments.",
          "Key Linux features enabling DevOps practices: security, stability, and scalability.",
          "Industry Use Cases:",
          "Overview of popular distributions like Ubuntu, CentOS, RHEL, and Alpine Linux for specific DevOps workflows."
        ]
      },
      {
        "id": 2,
        "title": "Linux Architecture and Command-Line Basics",
        "content": [
          "Linux Architecture:",
          "Deep dive into the Linux kernel and its interaction with hardware.",
          "The role of shell and its variants (bash, zsh).",
          "File system hierarchy and key directories (/etc, /var, /home, /proc).",
        ]
      },
      {
          "id": 1,
          "title":"Command-Line Basics:",
          "content":[
          "Navigation and file management commands: ls, cd, mv, cp, rm.",
          "Searching files with find, locate, and grep.",
          "Viewing and editing files with cat, less, nano, and vim."
        ]
      },
      {
        "id": 3,
        "title": "User and Permission Management",
        "content": [
          "User and Group Management:",
          "Creating, modifying, and deleting users and groups using useradd, usermod, and groupadd.",
          "Understanding user-related configuration files: /etc/passwd, /etc/group, /etc/shadow.",
        ]
      },
      {
        "id": 1,
        "title":"Permissions and Ownership:",
        "content":[
          "File and directory permissions (read, write, execute).",
          "Changing ownership with chown and managing permissions with chmod.",
        ]
      },
          
      {
        "id": 1,
        "title":"Advanced Permissions:",
        "content":[
          "Using Access Control Lists (ACLs) for fine-grained permission management.",
          "Managing default permissions with umask."
        ]
      },
      {
        "id": 4,
        "title": "Process and Service Management",
        "content": [
          "Managing Processes:",
          "Monitoring and controlling processes with ps, top, htop, kill, and nice.",
          "Identifying zombie and orphan processes.",
        ]
      },
          
      {
        "id": 1,
        "title":"Systemd and Service Management:",
        "content":[
          "Understanding systemd, unit files, and their types (service, timer, target).",
          "Managing services using systemctl for start, stop, enable, and disable operations.",
          "Writing and deploying custom systemd services."
        ]
      },
      {
        "id": 5,
        "title": "Networking and Security Essentials",
        "content": [
          "Network Configuration:",
          "Viewing and configuring network interfaces with ifconfig and ip.",
          "Network troubleshooting tools: ping, netstat, ss, traceroute, and curl.",
        ]
      },
         
      {
        "id": 1,
        "title":"Firewall Management:",
        "content":[
          "Configuring and managing firewall rules using iptables and firewalld.",
          "Setting up NAT and port forwarding rules.",
        ]
      },
          
      {
        "id": 1,
        "title":"SSH Configuration:",
        "content":[
          "Securing SSH by disabling root login and modifying default ports.",
          "Configuring SSH keys for passwordless authentication."
        ]
      },
      {
        "id": 6,
        "title": "File Systems and Storage Management",
        "content": [
          "File System Basics:",
          "Partitioning and formatting disks with fdisk, parted, and mkfs.",
          "Mounting and unmounting file systems with mount and umount.",
        ]
      },
         
      {
        "id": 1,
        "title":"LVM and RAID:",
        "content":[
          "Configuring logical volumes with lvcreate, vgcreate, and pvcreate.",
          "Setting up RAID arrays with mdadm for redundancy and performance.",
        ]
      },
         
      {
        "id": 1,
        "title": "File System Troubleshooting:",
        "content":[
          "Diagnosing issues with fsck, df, and du.",
          "Resolving disk space issues and managing inodes."
        ]
      },
      {
        "id": 7,
        "title": "Automation and Scripting",
        "content": [
          "Shell Scripting Basics:",
          "Writing scripts to automate repetitive tasks.",
          "Working with variables, loops (for, while), and conditionals (if, case).",
        ]
      },
        
      {
        "id": 1,
        "title":"Automating Tasks with Cron and At:",
        "content":[
          "Scheduling periodic tasks using cron.",
          "Managing one-time jobs with at and batch.",
        ]
      },
      {
        "id": 1,
        "title":"Industry Use Cases:",
        "content":[
          "Writing scripts for system backups and updates.",
          "Automating system monitoring and alerting processes."
        ]
      },
      {
        "id": 8,
        "title": "Package Management and Software Installation",
        "content": [
          "Package Management:",
          "Installing, upgrading, and removing software using apt, yum, and dnf.",
          "Querying and troubleshooting packages.",
        ]
      },
         
      {
        "id": 1,
        "title":"Source-Based Installation:",
        "content":[
          "Compiling software from source using make and gcc.",
          "Resolving dependencies with tools like pkg-config."
        ]
      },
      {
        "id": 9,
        "title": "Monitoring and Performance Tuning",
        "content": [
          "Monitoring Tools:",
          "System performance monitoring using vmstat, iostat, and sar.",
          "Log management with journalctl, rsyslog, and logrotate.",
        ]
      },
      {
        "id": 1,
        "title": "Performance Optimization:",
        "content":[
          "Kernel parameter tuning using sysctl.",
          "Optimizing memory usage, disk I/O, and CPU performance."
        ]
      },
      {
        "id": 10,
        "title": "Security and Compliance",
        "content": [
          "System Hardening:",
          "Disabling unnecessary services and ports.",
          "Keeping systems secure with regular updates and patches.",
        ]
      },
         
      {
        "id": 1,
        "title":"Auditing and Compliance:",
        "content":[
          "Using auditd for tracking system changes and events.",
          "Ensuring compliance with security policies using log auditing."
        ]
      }
    ]
  }
  
  
  
]