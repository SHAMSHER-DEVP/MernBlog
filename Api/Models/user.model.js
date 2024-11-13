import {Schema, model} from "mongoose";



  try {
    let userSchema= new Schema({
        userName:{type:String,required:true,unique:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true,unique:true}
    },
    {timestamps:true}
    //  here the timstemp is for to save 2 things , time of creation and time of Update;
    );
     let user=new model("user",userSchema);
     console.log('created ....');
  } catch (error) {
    
  }
   
// export default user;