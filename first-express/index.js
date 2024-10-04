const express = require('express');
const app = express(); 


app.get('/about', (req, res) => {
    res.send({ message: 'Ini adalah halaman about' });
}); // ini router di express


app.get('/blog/:category/:author/:title', (req, res) => {
    const { category, author, title } = req.params;
    res.send(`Category: " + ${category} + ", Author: " + ${author} + ", Title: " + ${title}`);
}); // ini router di express dengan parameter

app.get('*', (req, res) => {
    res.send({ message: 'Halaman tidak ditemukan' });
 }); // ini router di express untuk halaman yang tidak ditemukan (ditaruk di paling bawah)

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
}); // untuk menjalankan server