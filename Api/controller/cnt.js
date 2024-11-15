import {userMd} from "../Models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
//  note here the bcryptjs wrriten must , because if you not do like it , later in deploment it give you error ;
class cnt{
      
        static test=(req,res)=>{
            //   let data=user({
            //     userName:""
            //   })
                res.send("the response from server");
             
        }
        static signup=async (req,res,next)=>{
              let {userName,email,password}=req.body;
            if(!userName | !email | !password |userName=="" | email=="" | password==""){
                //  custom error message ;
                next(errorHandler(400,'all fields are required'));
            } else{
                  let hashPassowrd =   bcryptjs.hashSync(password,10); 
                var newUser=new userMd({userName,email,password:hashPassowrd});
             
                   
            }

             try {
                  await newUser.save();
                  res.send("ok signUp successfully....");
             } catch (error) {
                  next(error); 
             }
            
        }
};
export default cnt;