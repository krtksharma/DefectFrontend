# Defect Management System

This is a Defect Management System built with Angular for managing defects in software projects.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Defect Management System is a web application designed to streamline the process of defect tracking and resolution in software development projects. It provides a user-friendly interface for testers, developers, and product owners to manage defects efficiently.

## Features

- **User Authentication**: Secure user authentication system allows users to log in with their credentials.
- **Role-Based Access Control**: Role-based access control ensures that users can only access features relevant to their role (Tester, Developer, Product Owner).
- **Defect Creation**: Users can create new defects with detailed information including title, description, steps to reproduce, priority, severity, etc.
- **Defect Listing**: Display a list of all defects along with their status, severity, priority, etc.
- **Defect Details**: View detailed information about a specific defect, including resolution history.
- **Defect Assignment**: Developers can view defects assigned to them and update their status and resolution.
- **Defect Reporting**: Product owners can generate reports on defects for better project management.
- **Responsive Design**: The application is responsive and works seamlessly across different devices.

## Installation

### Navigate to the Project Directory

Navigate to the project directory:

cd defect-management

### Install Dependencies

Install dependencies:

npm install

### Run the Application

Run the application:

ng serve

## Open your browser and visit http://localhost:4200 to access the application.

## Usage

**Login** : Log in with your credentials as a Tester, Developer, or Product Owner.
            Credentials for tester -> userName : tester and password : tester123
                            developer -> userName : developer and password : developer123
                            product owner -> userName : product and password : product123
**Dashboard** : Upon successful login, you will be redirected to the dashboard based on your role.
**Create Defect** : Testers can create new defects with detailed information.
**Defect Listing** : View a list of all defects along with their status and other details.
**Defect Details** : Click on a defect to view detailed information including resolution history.
**Defect Assignment** : Developers can view defects assigned to them and update their status and resolution.
**Defect Reporting** : Product Owners can generate reports on defects for better project management.


## Contributing

   Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
   
**Fork the repository.**

**Create your feature branch (git checkout -b feature/your-feature-name).**

**Commit your changes (git commit -am 'Add some feature').**

**Push to the branch (git push origin feature/your-feature-name).**

**Create a new Pull Request.**

## Backend

The backend of the Defect Management System is hosted on [Railway](https://defectmanagement-production.up.railway.app/). It provides APIs for handling user authentication, defect management, and other functionalities.

## Frontend

The frontend of the Defect Management System is hosted on [Vercel](https://defect-frontend.vercel.app/). It provides a user interface for interacting with the system, allowing users to log in, create defects, view defect lists, and perform other actions.



