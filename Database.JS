const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Keeps the database in memory

db.serialize(() => {
    db.run('CREATE TABLE food_items (name TEXT, price REAL)'); // Example table

    const stmt = db.prepare('INSERT INTO food_items VALUES (?, ?)');
    stmt.run('Cooked Salmon Sushi', 12.99);
    stmt.run('Shrimp Sushi', 10.99);
    stmt.run('Low-Calorie Burger', 8.99);
    stmt.finalize();
});

// Function to query food items
function getFoodItems(callback) {
    db.all('SELECT * FROM food_items', [], (err, rows) => {
        callback(err, rows);
    });
}

// Export the function
module.exports = { getFoodItems };

// Closing the database connection when done
process.on('SIGINT', () => {
    db.close();
    process.exit(0);
});