const express = require("express");
const cors = require("cors");
require('dotenv').config();


const app = express();

const  Routes  = require("./routes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", Routes)


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => 
  console.log("Edify server listening  on port"+ " " + PORT + "....")
);