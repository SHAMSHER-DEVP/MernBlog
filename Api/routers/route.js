import exp from 'express'
import cnt from '../controller/cnt.js';

let rt=exp.Router();

 
    rt.get("/test",cnt.test);

    rt.post("/signup",cnt.signup); // auth route 
 

 export default rt;