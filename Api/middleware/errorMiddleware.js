export let erMd=(err,req,res,next)=>{
    let statusCode=err.statusCode || 500;
    let message =   err.message || "internal server error ";
    res.status(statusCode).json({  
      success:false,
      statusCode,
      message
    })
  }