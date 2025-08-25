import express from "express";
import cors from "cors";

//app config
const app = express();
const port = 4000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Api working")
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})