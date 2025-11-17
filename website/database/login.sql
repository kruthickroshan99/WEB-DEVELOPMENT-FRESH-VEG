CREATE DATABASE IF NOT EXISTS freshveg;
USE freshveg;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100),
  name VARCHAR(100),
  password VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    weight VARCHAR(50),
    price INT,
    quantity INT DEFAULT 1,
    category VARCHAR(100),
    UNIQUE(name)
);

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    weight VARCHAR(50),
    price INT,
    image VARCHAR(255),
    category VARCHAR(100),
    details TEXT,
    unit VARCHAR(50),
    type VARCHAR(100),
    serve_size VARCHAR(100),
    pieces VARCHAR(100),
    shelf_life VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS products1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    weight VARCHAR(50),
    price INT,
    image VARCHAR(255),
    category VARCHAR(100),
    details TEXT,
    unit VARCHAR(50),
    type VARCHAR(100),
    serve_size VARCHAR(100),
    pieces VARCHAR(100),
    shelf_life VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS products2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    weight VARCHAR(50),
    price INT,
    image VARCHAR(255),
    category VARCHAR(100),
    details TEXT,
    unit VARCHAR(50),
    type VARCHAR(100),
    serve_size VARCHAR(100),
    pieces VARCHAR(100),
    shelf_life VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS products3 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    weight VARCHAR(50),
    price INT,
    image VARCHAR(255),
    category VARCHAR(100),
    details TEXT,
    unit VARCHAR(50),
    type VARCHAR(100),
    serve_size VARCHAR(100),
    pieces VARCHAR(100),
    shelf_life VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS products4 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    weight VARCHAR(50),
    price INT,
    image VARCHAR(255),
    category VARCHAR(100),
    details TEXT,
    unit VARCHAR(50),
    type VARCHAR(100),
    serve_size VARCHAR(100),
    pieces VARCHAR(100),
    shelf_life VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS products5 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    weight VARCHAR(50),
    price INT,
    image VARCHAR(255),
    category VARCHAR(100),
    details TEXT,
    unit VARCHAR(50),
    type VARCHAR(100),
    serve_size VARCHAR(100),
    pieces VARCHAR(100),
    shelf_life VARCHAR(100)
);