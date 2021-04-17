const express = require('express');
const path = require('path')


const logger = require('./src/middleware/logger')

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// custom middleware
app.use(logger)



app.use(express.static(path.join(__dirname, 'public'))) // static

app.use('/api/members', require('./src/routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
