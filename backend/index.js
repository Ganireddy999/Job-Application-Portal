 // importing express pkg.
let express=require('express');

// creating an instance or initializing.
let app=express();        
   
//importing CORS
var cors = require('cors');

let main = require('./utils/sendMails');

//importing db.js
require('./config/db');



let customer=require('./models/customer');
let jobs=require('./models/jobs');
let companies=require('./models/companies');



//Middle wares is to establish a connection b/w res and req.
app.use(cors());  
// to accept data from frontend to backend
app.use(express.json());

// Create a route for the application.


app.get("/", (req, res) => {
    res.send('Hello im express practicee',);    
  });   


  app.post("/SignUp", async(req, res) => {
    let {name,email,confirmPassword,password}=req.body;
    console.log(req.body);        
    let userObj=await customer.findOne({email:email});
    console.log(userObj);  
    
    if(userObj !== null){
      return res.status(400).send("Account exists");
    }
    else if (password!==confirmPassword){
      return res.status(400).send("Password is incorrect");
    }
    else{
      const newUser=await customer.create(req.body);
      res.status(200).send("Account created successfully");
    }
 });  
  

 
  // allows sending data in the request body.
  app.post("/login", async(req, res) => {

    console.log(req.body);
    const {email,password}=req.body;
    let oldUser=await customer.findOne({email:email});
    console.log(oldUser); 
    
    if(oldUser===null)
    return res.status(400).send("account doesnt found")

    else if(oldUser.password!==password)
    return res.status(400).send("password incorrect")

    else
    return res.status(200).send(oldUser)

 });  
  
   app.post("/jobs",async(req,res)=>{
   const newJob =await jobs.create(req.body);
   return res.send("job created") ;
  
   });

   app.get('/jobs', async(req, res) => {
    //  return res.send(req.body)
      let data=  await jobs.find();
      return res.send(data)
    
   })
   
   app.post('/apply',async(req,res)=>{
    console.log(req.body.companyEmail,    req.body.email);
    let result= await main(req.body);
    return res.status(200).send("feedback sent successfully");

   })


   let jobDetails=require('./models/jobDetails');

   app.post("/jobDetails",async(req,res)=>{
    console.log(req.body);
    const addData=await jobDetails.create(req.body);
    return res.send("job details vastunai bro ");

    });


  //start the server
  app.listen(8000, () => {
    console.log('Express application listening on  port 8000');

  });


                            