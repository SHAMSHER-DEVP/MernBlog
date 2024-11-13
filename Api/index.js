  import exp from 'express'
import dbConnect from './DB/dbConnect.js';
import rt from './routers/userRoute.js';

  let app=exp();
  let port=process.env.PORT || 6000;
   
  let url=process.env.Db_url;
  app.use('/',rt);
  dbConnect(url);
 app.listen(port,()=>{
    console.log('the server is running at the port :: http://localhost:'+port);
 })