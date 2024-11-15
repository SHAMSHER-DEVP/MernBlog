import {Schema, model} from "mongoose";



  
    let userSchema= new Schema({
        userName:{type:String,required:true,unique:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true,unique:true}
    },
    {timestamps:true}
    //  here the timstemp is for to save 2 things , time of creation and time of Update;
    );
     let userMd= model("user",userSchema);
     
     console.log('created ....',userMd);
  
    
  
   
export  {userMd};