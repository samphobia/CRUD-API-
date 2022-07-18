require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.send('Hello World!');
})

const userRoutes = require('./src/routes/users.route');

app.use('/api/v1/user', userRoutes);

app.listen(port, () => 
   console.log(`Listening on port ${port}`)
);