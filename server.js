const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

function generateItinerary(destination, days) {
  const activities = [
    'Visit a local museum',
    'Explore downtown',
    'Check out popular restaurants',
    'Enjoy a city tour',
    'Take a day trip to nearby attractions'
  ];
  let plan = `Trip to ${destination}\n`;
  for (let i = 1; i <= days; i++) {
    const activity = activities[i % activities.length];
    plan += `Day ${i}: ${activity}\n`;
  }
  return plan;
}

app.post('/api/itinerary', (req, res) => {
  const { destination, days } = req.body;
  const plan = generateItinerary(destination, Number(days));
  res.json({ plan });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
