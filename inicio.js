require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));


// Configuración de los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => res.render('home'));
app.get('/pastor_aleman', (req, res) => res.render('pastor_aleman'));
app.get('/golden', (req, res) => res.render('golden'));
app.get('/pequines', (req, res) => res.render('pequines'));

// Iniciar el servidor en el puerto especificado en el archivo .env o 8080 por defecto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
