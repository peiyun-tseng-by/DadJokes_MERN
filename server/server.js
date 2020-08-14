const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const jokes = require('./routes/api/jokes');
const app = express();

//BodyParser Middlware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/jokes', jokes);
    const port = process.env.PORT || 5000;

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('../react-test/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'react-test', 'build', 'index.html'))
    });
}

app.listen(port, () => console.log(`Server started on port ${port}`));


