import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import { router } from "./routes";
import connectDB from "./config/dbConection";



const PORT = process.env.PORT || 30001;
const app = express();


app.use(cors())
app.use(json())

app.use(router)

connectDB().then(() => console.log("Conexion a la db exitosa"));

app.listen(PORT, () => {
    console.log(`Api is listening on port ${PORT}`)
})


