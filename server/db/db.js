import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const connectDB = async(username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@blog-app.0pezqyz.mongodb.net`;
    const DBNAME = process.env.DB_NAME;
    try{
        await mongoose.connect(URL +'/'+DBNAME);
        console.log("Database Connected Successfully !!!");
    }catch(error){
        console.log("Error while connecting with the Database", error);
    }
}

export default connectDB;