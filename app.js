const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const path = require("node:path");


app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// app.set("layout", "layouts/mainLayout");

const controllers = require("./controllers/messageController");





app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("500: Internal Server Error");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Listening for PORT number", PORT);
});