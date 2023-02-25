const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")));

app.set('puerto', process.env.PORT || 3000);

const port = process.env.PORT || 3000;
app.listen(port,() =>
    console.log("Servidor corriendo en el puerto http://localhost:" + port)
);

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})