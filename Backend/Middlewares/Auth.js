const auth=async(req,res,next)=>{
    let token=req.headers.authorization

    if(token){
        try{
            jwt.verify(token, 'shhhhh', function(err, decoded) {
        if(decoded){
            console.log(decoded)
            next()
        }else(
            res.status(400).json({msg:"wrong token"})
        )
              });
        }catch(err){
            res.status(400).json({msg:"something going wrong"})
        }
    }else{
        res.status(400).json({msg:"Please login first"})
    }
}