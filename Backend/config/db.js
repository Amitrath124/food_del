import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://amitrath344_db:Ratnaka1@cluster0.d0m6mdp.mongodb.net/food_del').then(() => console.log("MongoDB connected"));
}