let mongoose=require('mongoose');
let jobDetailsSchema=mongoose.Schema({

    completeJobTitle : {
        type:String,
        required:true
    },
 
    AboutTheJob:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    noOfOpening:{
     type:String,
     required:true
 },
      
   aboutCompany:{
     type:String,
     required:true
 },
})
let JobDetails=
mongoose.model("jobDetails",jobDetailsSchema);

module.exports = JobDetails;