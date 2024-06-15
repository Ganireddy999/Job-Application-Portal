const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "jaganganireddy@gmail.com",
    pass: "czau gjmt zauz pqoz",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(details) {
 let {name,companyEmail,email}=details;
 console.log(companyEmail);
 console.log(name);
 console.log(email);
 
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'jaganganireddy@gmail.com', // sender address
    to: companyEmail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "hi ra ", // plain text body
    html:  `<div>
           
              <b> ${name} </b>  <br/>
              <b> ${email} </b>  

            </div>`, 
  });

  console.log("delivered");
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = main;