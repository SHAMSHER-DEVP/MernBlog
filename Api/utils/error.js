
// this is for that when we have not error from system , so we can create custom error message ;
export let errorHandler=(statusCode,message)=>{
   let error = new Error();

   error.statusCode=statusCode;
   error.message=message;
   return error;
}