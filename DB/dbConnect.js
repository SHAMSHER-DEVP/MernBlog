import { connect } from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
let dbConnect=async(url)=>{
    try {
         let opt={
            dbName:process.env.DB,
           

         }
        //  let uri ="mongodb+srv://shamsheralidev:dxdiag55@mern-blog.4pgjm.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=mern-blog&serverSelectionTimeoutMS=5000";
        await connect(url);
        console.log('the connection successfully...');
    } catch (error) {
        console.log('the error is = ',error.message); 
    }
}
export default dbConnect;