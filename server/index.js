import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import cors from 'cors';
import Router from "./routes/route.js";

dotenv.config();

const app = express();
let PORT = process.env.PORT || 3000;

// Attach Middlewires 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({ origin: true }));

// app.use(bodyParser.json({extended: true})); // to assess the post rquest here we will parse the json format
// app.use(bodyParser.urlencoded({extended: true})); // parse the url because if url contain spaces it will parse without counting space


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}\nhttp://localhost:${PORT}`))

// Here we will be providing routes 

app.get('/', (req, res) =>{
    res.send("Welcome to my API");
});

app.use('/', Router); // It will give us the startpoints

// -----------------------------

// connectDB(process.env.DB_USERNAME, process.env.DB_PASSWORD);