  import exp from 'express'

  let app=exp();
  let port=process.env.PORT || 6000;
   
  app.use((req,res)=>{
    res.send("the response from server !");
  })
 app.listen(port,()=>{
    console.log('the server is running at the port :: http://localhost:'+port);
 })