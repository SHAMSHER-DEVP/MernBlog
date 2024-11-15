  import exp from 'express'
import dbConnect from './DB/dbConnect.js';
import rt from './routers/route.js';

  let app=exp();
  let port=process.env.PORT || 6000;
  let url=process.env.Db_url;
  app.use(exp.json());
  app.use('/api',rt);

    //  error handle middleware ::
    app.use((err,req,res,next)=>{
      let statusCode=err.statusCode || 500;
      let message =   err.message || "internal server error ";
      res.status(statusCode).json({  
        success:false,
        statusCode,
        message
      })
    });
  dbConnect(url);
 app.listen(port,()=>{
    console.log('the server is running at the port :: http://localhost:'+port);
 })