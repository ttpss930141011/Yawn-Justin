const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./server/database/connection');
const app = express();

dotenv.config( { path : 'config.env'} )
connectDB();
app.use(express.static(__dirname + '/public'));
app.set("view engine", "jade")

const PORT = process.env.PORT || 8080

app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});