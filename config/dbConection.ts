import "dotenv/config"
import { connect } from "mongoose"


async function connectDB ():Promise<void>{
    const dbUri = <string> process.env.MONGO_URL;
    await connect(dbUri)

}

export default connectDB;