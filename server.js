const express = require('express');

// Initializing Express and View Engine (EJS)
const app = express();
app.set('view engine', 'ejs');


// Listening for Requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));


// Middleware/Static Files
app.use(express.static('./public'));//Setting up Static Files
app.use(express.json());//Auth for req.body
app.use(express.urlencoded({ extended: true }));//Accepting Form Data


// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/projects', (req, res) => res.render('projects'));
app.get('/tetris', (req, res) => res.render('tetris'));
app.get('/snake', (req, res) => res.render('snake'));


// 404 Page
app.use((req, res) => res.status(404).render('404'));
