import exp from 'express'
import cnt from '../controller/cnt.js';

let rt=exp.Router();

 try {
    rt.get("/test",cnt.test);
    console.log('the route run successfully ');
 } catch (error) {
     console.log('the error is = ',error.message);
 }

 export default rt;