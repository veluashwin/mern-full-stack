// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'bodyParser';
// import dotenv from 'dotenv';

// const app = express();

// app.use(bodyParser.json());
// dotenv.config();

// const PORT = process.env.PORT ||8000;
// const MONGOURL = process.env.MONGO_URL;

// mongoose
//     .connect(MONGOURL)
//     .then(()=>{
//         console.log("Datebase connected");
//         app.listen(PORT,()=>{
//             console.log("Server is running on port ${PORT}");
//         });
//     })



import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();

//bodyParser - middleware for passing json value from backend to database  
app.use(bodyParser.json());
dotenv.config();

const port=process.env.PORT ||3500;
const M_URL=process.env.MONGO_URL;

mongoose.connect(M_URL).then(()=>{
    console.log('Database connected');
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
})