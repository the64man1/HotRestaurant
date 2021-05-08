const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// {customerID: '', customerName: '', customerEmail: '', phoneNumber: ''}
const reservations = [];
const waitlist = [];

// Routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/tables", (req, res) => res.sendFile(path.join(__dirname, "tables.html")));
app.get("/reserve", (req, res) => res.sendFile(path.join(__dirname, "reserve.html")));

app.get("/api/tables", (req, res) => res.json(reservations));
app.get("/api/waitlist", (req, res) => res.json(waitlist));

app.post("/api/tables", (req, res) => {
    const newTable = req.body;

    reservations.push(newTable);
    res.json(newTable);
});

app.post("/api/waitlist", (req, res) => {
    const newWait = req.body;

    waitlist.push(newWait);
    res.json(newWait);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));