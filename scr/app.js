const express = require('express');
const docenteRoutes = require('./routes/docente.routes');

const app = express();

app.use(express.json());
app.use(docenteRoutes);

module.exports = app;
