const {mailConfig}= require('../MailerFolder/mailSetup')

const mailSending=async(req,res)=>{
    const {clientName,clientEmail,clientMessage}=req.body
    res.status(200).json({ success: true, message: "Email is being sent" });
    try {
        const sendingMail=await mailConfig(clientName,clientEmail,clientMessage)
        if(sendingMail.success){
            console.log("Mail send Successfully",sendingMail)
            return res.status(200).json({message:'Email Send Successfully'})
        }
        else{
            console.log('Issue in Sending Mail')
            return res.status(204).json({message:"Not Able To Send Email"})
        }

    }
     catch (error) {
            console.log("Issue in Sending Mail , Error: ",error)
            return res.status(400).json({message:"Error in Sending Mail"})
    } 
}

module.exports={mailSending}