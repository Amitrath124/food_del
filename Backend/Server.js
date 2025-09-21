import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRoute from "./routes/foodRoute.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(cors());
app.use(express.json());

//DB connection
connectDB();

//api endpoints
app.use("/api/food", foodRoute);


app.get("/", (req, res) => {
    res.send("Api working")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

