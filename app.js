const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "./public")));

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

app.get("/detalle-producto", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/detalle-producto.html"));
});


app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home-page.html"));
});
