export const products = [
    {
      "name": "John Doe",
      "address": "123 Main St, Cityville",
      "subject": "Mathematics",
      "age": 25
    },
    {
      "name": "Jane Smith",
      "address": "456 Oak Ave, Townsville",
      "subject": "English",
      "age": 30
    },
    {
      "name": "Bob Johnson",
      "address": "789 Pine Blvd, Villagetown",
      "subject": "Science",
      "age": 22
    },
    {
      "name": "Alice Brown",
      "address": "321 Cedar Ln, Hamlet City",
      "subject": "History",
      "age": 28
    },
    {
      "name": "Sam Wilson",
      "address": "555 Elm St, Riverside",
      "subject": "Computer Science",
      "age": 26
    },
    {
      "name": "Sam Wilson",
      "address": "555 Elm St, Riverside",
      "subject": "Computer Science",
      "age": 26
    },
    {
      "name": "Sam Wilson",
      "address": "555 Elm St, Riverside",
      "subject": "Computer Science",
      "age": 26
    },
    {
      "name": "Sam Wilson",
      "address": "555 Elm St, Riverside",
      "subject": "Computer Science",
      "age": 26
    },
    {
      "name": "Sam Wilson",
      "address": "555 Elm St, Riverside",
      "subject": "Computer Science",
      "age": 26
    },
    {
      "name": "Sam Wilson",
      "address": "555 Elm St, Riverside",
      "subject": "Computer Science",
      "age": 26
    },
    {
      "name": "Sam Wilson",
      "address": "555 Elm St, Riverside",
      "subject": "Computer Science",
      "age": 26
    },
    {
      "name": "Sam Wilson",
      "address": "555 Elm St, Riverside",
      "subject": "Computer Science",
      "age": 26
    },
    {
      "name": "Sam Wilson",
      "address": "555 Elm St, Riverside",
      "subject": "Computer Science",
      "age": 26
    },
    {
      "name": "Eva Martinez",
      "address": "888 Birch Ave, Mountainview",
      "subject": "Art",
      "age": 35
    }
  ];
  

  // Here is the API Call's
  
  export const getInventory = () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  };
  
  export const getCustomers = () => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
  };
  export const getComments = () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
  };