const nodemailer= require('nodemailer')

let transporter= nodemailer.createTransport({
    service:"gmail",
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
    user:process.env.ADMIN_EMAIL,
    pass:process.env.ADMIN_PASSWORD      
    },
    debug:true,
    logger:true,
    tls:{
        rejectUnauthorized:false
    }
})

const sendEmail=async(mailOption)=>{
    try {
        console.log('Email Sending is Running')
        let information= await transporter.sendMail(mailOption)
        console.log('Email Send Successfully',information)
        return({
            success:true,information
        })
    } catch (error) {
        console.log('Issue in Sending Mail',error)
        return ({success:false,error})
    }
}

const mailConfig=async(clientName,clientEmail,clientMessage)=>{
try {
    let mailOptions={
        from:process.env.ADMIN_EMAIL,
        to:process.env.ADMIN_EMAIL,
        subject:'Client Message From Portflio',
        html: `<div style="text-align: center;">
        <h1 style="font-size: 24px; color: #333;">Message From PortFolio</h1>
        <p style="margin-top: 20px 0;">Client Name : ${clientName}</p>
        <p style="margin-top: 20px 0;">Client Email : ${clientEmail}</p>
        <p style="margin-top: 20px 0;">Client Message : ${clientMessage}</p> </div>    `
        
    }

    await sendEmail(mailOptions)
    return{success:true}
} catch (error) {
        console.log('Issue in sending mail',error)
        return{success:false,error}
}
}

module.exports={mailConfig}