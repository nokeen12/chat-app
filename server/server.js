const express = require("express");
const cors = require("cors");
require("dotenv/config");
require("./db");

const app = express();
const PORT = process.env.PORT || 5005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) =>{
  res.send("Api Home");
})

const authRoutes = require('./routes/auth.routes');
app.use("/auth", authRoutes)

app.listen(PORT, () => console.log("Server is listening to port " + PORT));
module.exports = app;
