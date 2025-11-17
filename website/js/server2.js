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
        res.redirect('/html/sample.html');
    });
});


// home-Admin: Add new product
app.post('/add-product', (req, res) => {
    const {
        name, weight, price, image,
        details, unit, type, serve_size,
        pieces, shelf_life
    } = req.body;

    const sql = `INSERT INTO products
                (name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.json({ success: false });
            }
            res.json({ success: true });
        }
    );
});

// fruits-&-vegetables-Admin: Add new product1
app.post('/add-product1', (req, res) => {
    const {
        name, weight, price, image,
        details, unit, type, serve_size,
        pieces, shelf_life
    } = req.body;

    const sql = `INSERT INTO products1
                (name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.json({ success: false });
            }
            res.json({ success: true });
        }
    );
});

// meat-&-seafood-Admin: Add new product2
app.post('/add-product2', (req, res) => {
    const {
        name, weight, price, image,
        details, unit, type, serve_size,
        pieces, shelf_life
    } = req.body;

    const sql = `INSERT INTO products2
                (name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.json({ success: false });
            }
            res.json({ success: true });
        }
    );
});

// daily-staple-Admin: Add new product3
app.post('/add-product3', (req, res) => {
    const {
        name, weight, price, image,
        details, unit, type, serve_size,
        pieces, shelf_life
    } = req.body;

    const sql = `INSERT INTO products3
                (name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.json({ success: false });
            }
            res.json({ success: true });
        }
    );
});

// snacks-&-beverages-Admin: Add new product4
app.post('/add-product4', (req, res) => {
    const {
        name, weight, price, image,
        details, unit, type, serve_size,
        pieces, shelf_life
    } = req.body;

    const sql = `INSERT INTO products4
                (name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.json({ success: false });
            }
            res.json({ success: true });
        }
    );
});


// eggs-&-dairy products-Admin: Add new product5
app.post('/add-product5', (req, res) => {
    const {
        name, weight, price, image,
        details, unit, type, serve_size,
        pieces, shelf_life
    } = req.body;

    const sql = `INSERT INTO products5
                (name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [name, weight, price, image, details, unit, type, serve_size, pieces, shelf_life],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.json({ success: false });
            }
            res.json({ success: true });
        }
    );
});


// GET route to fetch a product by id
app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    const sql = 'SELECT * FROM products WHERE id = ?';
    db.query(sql, [productId], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(result[0]);
    });
});

// fruits an vegetables to fetch the product id

app.get('/product1/:id', (req, res) => {
    const productId = req.params.id;
    const sql = 'SELECT * FROM products1 WHERE id = ?';
    db.query(sql, [productId], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(result[0]);
    });
});

// meat and seafood to fetch the product id

app.get('/product2/:id', (req, res) => {
    const productId = req.params.id;
    const sql = 'SELECT * FROM products2 WHERE id = ?';
    db.query(sql, [productId], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(result[0]);
    });
});

// daily staples to fetch the product id

app.get('/product3/:id', (req, res) => {
    const productId = req.params.id;
    const sql = 'SELECT * FROM products3 WHERE id = ?';
    db.query(sql, [productId], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(result[0]);
    });
});

// snacks and beverages to fetch the product id

app.get('/product4/:id', (req, res) => {
    const productId = req.params.id;
    const sql = 'SELECT * FROM products4 WHERE id = ?';
    db.query(sql, [productId], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(result[0]);
    });
});

// eggs and dairy products to fetch the product id

app.get('/product5/:id', (req, res) => {
    const productId = req.params.id;
    const sql = 'SELECT * FROM products5 WHERE id = ?';
    db.query(sql, [productId], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(result[0]);
    });
});
// home products

app.get('/products', (req, res) => {
    const sql = `
        SELECT p.*, IFNULL(c.quantity, 0) as quantity
        FROM products p
        LEFT JOIN cart c ON p.name = c.name
    `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching products:", err);
            return res.status(500).json({ success: false });
        }
        res.json(results);
    });
});

// fruits-&-vegetables products

app.get('/products1', (req, res) => {
    const sql = `
        SELECT p.*, IFNULL(c.quantity, 0) as quantity
        FROM products1 p
        LEFT JOIN cart c ON p.name = c.name
    `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching products1:", err);
            return res.status(500).json({ success: false });
        }
        res.json(results);
    });
});

// meat-&-seafoods products

app.get('/products2', (req, res) => {
    const sql = `
        SELECT p.*, IFNULL(c.quantity, 0) as quantity
        FROM products2 p
        LEFT JOIN cart c ON p.name = c.name
    `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching products2:", err);
            return res.status(500).json({ success: false });
        }
        res.json(results);
    });
});

// daily staples products

app.get('/products3', (req, res) => {
    const sql = `
        SELECT p.*, IFNULL(c.quantity, 0) as quantity
        FROM products3 p
        LEFT JOIN cart c ON p.name = c.name
    `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching products2:", err);
            return res.status(500).json({ success: false });
        }
        res.json(results);
    });
});


// snacks-&-beverages products

app.get('/products4', (req, res) => {
    const sql = `
        SELECT p.*, IFNULL(c.quantity, 0) as quantity
        FROM products4 p
        LEFT JOIN cart c ON p.name = c.name
    `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching products2:", err);
            return res.status(500).json({ success: false });
        }
        res.json(results);
    });
});


// eggs-&-dairy products products

app.get('/products5', (req, res) => {
    const sql = `
        SELECT p.*, IFNULL(c.quantity, 0) as quantity
        FROM products5 p
        LEFT JOIN cart c ON p.name = c.name
    `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching products2:", err);
            return res.status(500).json({ success: false });
        }
        res.json(results);
    });
});


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


// Route to fetch product by ID



app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000/html/login.html');
});
