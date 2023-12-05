
const validate = (schema) => async (req, res, next) => {

try {
    
    const parseBody= await schema.parseAsync(req.body)
    req.body= parseBody;
    next();

} catch (err) {
    // error handeling code 
    const status=422;
    const message= "Fill the input proparly "
    const extraDetails=err.errors[0].message

    //  eror handeling code 
    const error={
        status,
        message,
        extraDetails,
      };

    console.log(error)
    // res.status(400).json({ msg: message})

    // err  hndeling code 
    next(error)
}

}


module.exports=validate;