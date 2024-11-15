import { Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {

    let [formData,setFormData]=useState({});

    let handleChange=(e)=>{
      let {id,value}=e.target;
      setFormData({...formData,[id]:value});

      console.log('changes = ',formData);
    }

    let handleSubmit=async(e)=>{
      e.preventDefault();
           let res=await fetch("/api/signup",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
           });

           let data= await  res.json();
          //  console.log(data);


        console.log(formData);
    }
  return (
    <>
     <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl sm:mx-auto flex-col sm:flex-row md:items-center  md:flex-row gap-5 ">
        {/* left */}
        <div className="left flex-1">
          {/* here thew flex-1 is used to give the equal space for 2 box left and right  */}

        <Link to={''} className=' text-4xl   font-bold '>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white'>Shamsher's </span> 
                 Blog
        </Link>
        <p className='text-sm mt-5 '>
          this is demo project. you can sigup with email and 
          password
          or google 
        </p>

        </div>
        {/* right */}
        <div className="right  flex-1">
          <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div> 
              <Label value='Your username' />
              <TextInput type='text' placeholder='username' id='username'  onChange={handleChange} />
               </div>
            <div> 
              <Label value='Your user-email' />
              <TextInput type='email' placeholder='user-email' id='email'  onChange={handleChange} />
               </div>
            <div> 
              <Label value='Your user-password' />
              <TextInput type='password' placeholder='password' id='password'  onChange={handleChange} />
               </div>
               
               <Button gradientDuoTone='purpleToPink' type='submit'  >Sign Up </Button>

          </form>
          <div className="flex  text-sm gap-2 mt-5   ">
            <span>Have an account ?</span>
            <span> <Link to={'/sign-in'} className='text-blue-500 '> Sign In</Link> </span>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default SignUp;