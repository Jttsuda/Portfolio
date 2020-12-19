const express = require('express');

// Initializing Express and View Engine (EJS)
const app = express();
app.set('view engine', 'ejs');


// Listening for Requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, 'localhost', () => {
    console.log(`Server running on port ${PORT}`)
})


// Middleware/Static Files
app.use(express.static('public'));//Setting up Static Files
app.use(express.json());//Auth for req.body
app.use(express.urlencoded({ extended: true }));//Accepting Form Data


// Routes
app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/projects', (req, res) => res.render('projects'));
app.get('/contact', (req, res) => res.render('contact'));


// 404 Page
app.use((req, res) => res.status(404).render('404'));
