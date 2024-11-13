class cnt{
      
        static test=(req,res)=>{
            try {
                res.send("the response from server");
            } catch (error) {
               console.log('the error in cnt-test = ',error.message);  
            }
        }
};

export default cnt;