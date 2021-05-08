const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// array of table objects
tables = [
    {

    }, 
    {

    }, 
    {

    }, 
    {

    }, 

    {

    }
];


// waitlist array
waitlist = [
    {

    }
];

// regular html get requests
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')))
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')))


// return json 
app.get('/api/tables', (req, res) => res.json(tables));
app.get('/api/waitlist', (req, res) => res.json(waitlist));



app.listen(PORT, ()=> console.log(`App is listening on ${PORT}`))
































app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
