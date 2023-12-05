

const Contact= require('../models/contact_model')


const ContactForm=  async (req,res)=>{



    try {
        const response =req.body;
        await Contact.create(response)
        return res.status(200).json({message:"messeage send successfull"})

    } catch (error) {
        return res.status(500).json({message:"messeage not send "})
    }
}


module.exports = ContactForm;
