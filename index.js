const express = require('express');

const app = express();
const port = 5000;

// Generate random user data
const generateUser = () => {
  const names = ['John', 'Jane', 'Alice', 'Bob', 'Eve'];
  const randomIndex = Math.floor(Math.random() * names.length);
  const name = names[randomIndex];

  return {
    name,
    email: `${name.toLowerCase()}@example.com`,
    address: '123 Street',
    city: 'City',
    country: 'Country'
  };
};

// Generate random guest user data
const generateGuestUser = () => {
  return {
    token: Math.random().toString(36).substr(2),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24) // 24 hours from now
  };
};

// API endpoint for getting random user data
app.get('/api/users', (req, res) => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push(generateUser());
  }
  res.json(users);
});

// API endpoint for getting random guest user data
app.get('/api/guests', (req, res) => {
  const guests = [];
  for (let i = 0; i < 10; i++) {
    guests.push(generateGuestUser());
  }
  res.json(guests);
});

// Generate random data for the pie chart
const generatePieChartData = () => {
  const items = ["Basic Tees", "Custom Short Pants", "Super Hoodies"];
  const data = [];
  
  for (let i = 0; i < items.length; i++) {
    const count = Math.floor(Math.random() * 100); // Random count between 0 and 99
    data.push({ item: items[i], count });
  }

  return data;
};

// API endpoint for getting random pie chart data
app.get('/api/piechart', (req, res) => {
  const pieChartData = generatePieChartData();
  res.json(pieChartData);
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
