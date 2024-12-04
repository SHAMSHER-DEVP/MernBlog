  import exp from 'express'
import dbConnect from './DB/dbConnect.js';
import rt from './routers/route.js';
import { erMd } from './middleware/errorMiddleware.js';
import cros from 'cros'

  let app=exp();
  let port=process.env.PORT || 6000;
  let url=process.env.Db_url;
  app.use(exp.json());
  app.use(cros());
  app.use('/api',rt);

    //  error handle middleware ::
    app.use(erMd);
  dbConnect(url);
 app.listen(port,()=>{
    console.log('the server is running at the port :: http://localhost:'+port);
 })
//  "client": "cd client && npm run start",
//     "dev": "concurrently \"npm run server \" \"npm run  client\""