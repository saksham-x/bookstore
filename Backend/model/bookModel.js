import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    title: String,
})

const Book = mongoose.model("Book", bookSchema); //bracket bhitra ko Book bhaneko connect garna use hune Name matra ho Database ko. sabbai kura tei Bracket bhitra ko Book ma store hunxa


export default Book