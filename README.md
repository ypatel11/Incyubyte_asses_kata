# Kata Library Management System

This project is a **Library Management System** developed as part of a Kata exercise. The system is implemented in TypeScript and includes classes for managing books, users, and library operations. The project follows Test-Driven Development (TDD) principles, ensuring robust and reliable code.

## Project Structure

- **`src/`**: Contains the TypeScript source files for the project.
  - **`Book.ts`**: Defines the `Book` class, which includes properties and methods related to books.
  - **`User.ts`**: Defines the `User` class, which handles user information and borrowing logic.
  - **`Library.ts`**: Defines the `Library` class, which manages books and users and coordinates borrowing and returning books.
- **`tests/`**: Contains the test files for the project, ensuring all functionalities are thoroughly tested.

## Installation

To set up the project locally, follow these steps:

1. **Requirements:**
  - ts-jest: 29.2.5,
  - typescript: 5.5.4

2. **Installing Dependencies:**
   
- Make sure you have Node.js installed.
   ```bash
   npm i

4. **Run Project:**
   
- To compile TypeScript files
   ```bash
    npm run build

- To execute the tests and ensure everything is working correctly
   ```bash
   npm run test

## Usage
- Book Class: Handles the creation and validation of book objects.
- User Class: Manages user data and the borrowing/returning of books.
- Library Class: Oversees the collection of books and users, providing methods for adding books and users, as well as borrowing and returning books.

## Tests
  - The project follows TDD principles, and all core functionalities are thoroughly tested. Test cases include:
  
      - Adding and validating books and users.
      
      - Borrowing and returning books.
      
      - Handling invalid data and duplicate entries.
      
      - Checking available books and borrowed books for each user.

  ## Author

[Yash Patel](https://github.com/ypatel11)

  
