const express = require('express');
const app = express();
const { WeatherApp } = require('./middleware/WeatherApp');

// Your WeatherApp route
app.post('/weather', WeatherApp);

// Start the server
const port = 2000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
