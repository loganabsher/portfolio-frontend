'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/*', ((req, res) => res.redirect('/')));

app.listen(PORT, () => console.log('running on port:', PORT));
