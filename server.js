const express = require('express');
const { getFoodItems } = require('./database'); // Path to your database file

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// Sample API endpoint to get food items
app.get('/api/food-items', (req, res) => {
    getFoodItems((err, foodItems) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(foodItems);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});