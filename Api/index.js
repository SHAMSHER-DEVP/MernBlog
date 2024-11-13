  import exp from 'express'
import dbConnect from '../DB/dbConnect.js';

  let app=exp();
  let port=process.env.PORT || 6000;
   
  app.use((req,res)=>{
    res.send("the response from server");
  })
  let url=process.env.Db_url;
  dbConnect(url);
 app.listen(port,()=>{
    console.log('the server is running at the port :: http://localhost:'+port);
 })