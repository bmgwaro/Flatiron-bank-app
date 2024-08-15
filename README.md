# Flatiron Bank Application

## Description
This is a simple web application made with react. The main features of this application include displaying transactions from a remote server, enabling the user to add transactions and allowing the user to search and filter some of the transactions. 

## Prerequisites
- Operating system
- Browser with console
- Node 
- 2GB free disk space
- JSON server

## Getting Started
1. Click on this link in order to access the github repository containing this project;
[https://github.com/bmgwaro/Flatiron-bank-app]

2. Click on fork and create a fork of the repository. 

3. Open your terminal and navigate into the directory where you would like to save the work using the `cd` command.

4. Feel free to copy and paste the following command in order to clone the repository into your local storage; 
`git clone git@github.com:bmgwaro/Flatiron-bank-app.git`

5. Navigate into the newly cloned folder and type in the `code .` command in order to open it on your text editor.

# How to Use The Application
1. Load the application using `npm start` command in your terminal. Make sure that you are in the correct directory.

2. Once the application is loaded, you will be able to see a search bar at the top, an input form and a table containing data on all recent transactions.

3. You can search for any of the transactions on the search bar and the application will filter and display all matching items on another table below the first table.

4. As a user, you can also add a new transaction by filling out the form right below the search bar. Once the form is submitted, you will be able to see your new transaction on the table.

## Components

- **App.js**: The main component that holds the application state and renders the child components like `Search`, `InputForm`, and `FilteredTable`.

- **InputForm.js**: Handles the form where users can input and submit new transactions. It also displays the `TransactionsTable` component to show all transactions.

- **Search.js**: A simple search bar component that captures the search input from the user and triggers the search functionality.

- **TransactionsTable.js**: Displays all the transactions in a table format.

- **FilteredTable.js**: Displays the filtered transactions based on the user's search input.

## API Integration

The application interacts with a backend API hosted on Vercel to fetch and post transaction data.

- **GET Transactions**: The application fetches transactions from `https://bank-backed.vercel.app/transactions`.

- **POST Transaction**: New transactions are posted to the same endpoint with a JSON payload.