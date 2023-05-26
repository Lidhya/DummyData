const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Generate random user data
const generateUser = () => {
  const users = [];
  const minUsers = 0;
  const maxUsers = 499;

  for (let week = 1; week <= 4; week++) {
    const numUsers = Math.floor(Math.random() * (maxUsers - minUsers + 1)) + minUsers;
    for (let i = 0; i < numUsers; i++) {
      users.push({ week: week, name: `User ${week}-${i + 1}` });
    }
  }

  return users;
};

// Generate random data for the pie chart
const generatePieChartData = () => {
  const items = ["Basic Tees", "Custom Short Pants", "Super Hoodies"];
  const data = [];
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    const count = Math.floor(Math.random() * 100); // Random count between 0 and 99
    total += count;
    data.push({ item: items[i], count });
  }

  // Calculate the overall percentage for each item
  for (let i = 0; i < data.length; i++) {
    const percentage = (data[i].count / total) * 100;
    data[i].percentage = parseFloat(percentage.toFixed(2));
  }

  return data;
};

// API endpoint for getting random user data
app.get('/', (req, res) => {
  res.send("<h1>Welcome to Dummy Data</h1>")
});

// API endpoint for getting random user data
app.get('/api/users', (req, res) => {
  const users = generateUser()
  res.json(users);
});

// API endpoint for getting random guest user data
app.get('/api/guests', (req, res) => {
  const guests = generateUser()
  res.json(guests);
});

// API endpoint for getting random pie chart data
app.get('/api/piechart', (req, res) => {
  const pieChartData = generatePieChartData();
  res.json(pieChartData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
