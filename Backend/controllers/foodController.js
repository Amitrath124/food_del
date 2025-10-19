import foodModel from "../models/foodModel.js";
import fs from "fs";


// add food item
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    });

    try {
        await food.save();
        res.status(201).json({ success: true, message: "Food item added successfully" });
    } catch (error) {
        // Delete the uploaded file if there's an error saving to the database
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to add food item" });
    }
}

export { addFood };