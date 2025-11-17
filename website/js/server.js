const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..'))); // Serve static files

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Autom@t500!', // default for XAMPP
    database: 'freshveg'
});

db.connect(err => {
    if (err) {
        console.log('Database error:', err);
        return;
    }
    console.log('✅ Connected to MySQL');
});

// User Registration Route (for login)
app.post('/login', (req, res) => {
    const { email, name, password } = req.body;
    const sql = 'INSERT INTO users (email, name, password) VALUES (?, ?, ?)';
    db.query(sql, [email, name, password], (err) => {
        if (err) {
            console.error('Error inserting:', err);
            return res.send('Database error');
        }
        res.redirect('/html/home.html');
    });
});

// Cart Routes

// ✅ Add or Update Cart Item in cart_items
app.post('/add-to-cart', (req, res) => {
    const { name, weight, price, image } = req.body;

    const checkQuery = "SELECT * FROM cart WHERE name = ?";
    db.query(checkQuery, [name], (err, result) => {
        if (err) {
            console.error("Error checking cart:", err);
            return res.json({ success: false });
        }

        if (result.length > 0) {
            // Item already exists, update quantity
            const updateQuery = "UPDATE cart SET quantity = quantity + 1 WHERE name = ?";
            db.query(updateQuery, [name], (err, updateResult) => {
                if (err) {
                    console.error("Error updating cart:", err);
                    return res.json({ success: false });
                }
                return res.json({ success: true, message: "Quantity updated" });
            });
        } else {
            // Item not in cart, insert new row
            const insertQuery = "INSERT INTO cart (name, weight, price, image, quantity) VALUES (?, ?, ?, ?, 1)";
            db.query(insertQuery, [name, weight, price, image], (err, insertResult) => {
                if (err) {
                    console.error("Error adding to cart:", err);
                    return res.json({ success: false });
                }
                return res.json({ success: true, message: "Item added to cart" });
            });
        }
    });
});

// ✅ Get Cart Items
app.get('/cart-items', (req, res) => {
    const sql = "SELECT * FROM cart";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// ✅ Update Quantity
app.put('/update-quantity/:id', (req, res) => {
    const id = req.params.id;
    const { quantity } = req.body;

    const query = "UPDATE cart SET quantity = ? WHERE id = ?";
    db.query(query, [quantity, id], (err, result) => {
        if (err) return res.json({ success: false });
        return res.json({ success: true });
    });
});

// ✅ Remove from Cart
app.delete('/remove-from-cart/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM cart WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ success: false });
        return res.json({ success: true });
    });
});

app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000/html/login.html');
});
