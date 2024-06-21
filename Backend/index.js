import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/bookRoute.js'
import userRoute from './route/userRoute.js'
import cors from 'cors'

const app = express(); // creating express app

app.use(cors());
app.use(express.json())

dotenv.config();// Load environment variables



// Get the MongoDB URI from environment variables
const URI = process.env.MONGO_URI;

const PORT = process.env.PORT || 4000;

console.log('Loaded MongoDB URI:', URI); // Debug log

if (!URI) {
    console.error('MongoDB URI is not defined in the environment variables');
    process.exit(1); // Exit the process with failure
}

async function connectToDatabase() {
    try {
        await mongoose.connect(URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log("Error: ", error);
    }
}

connectToDatabase();


//definining route 

app.use("/book", bookRoute);
app.use('/user', userRoute);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
