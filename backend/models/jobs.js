const mongoose=require('mongoose');
 const jobSchema=mongoose.Schema({
    jobTitle : {
        type:String,
        required:true
    },

    companyName:{
        type:String,
        required:true
    },
    companyEmail:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    
    CTC:{
        type:String,
        required:true
    },
    
    location:{
        type:String,
        required:true
    },
    
    skills:{
        type:Array,
        required:true
    },
    completeJobTitle : {
        type:String,
        required:true
    },
    
    aboutTheJob:{
        type:String,
        required:true
    },
         
   aboutCompany:{
    type:String,
    required:true
    },
    role:{
        type:String,
        required:true
        },
    applicants:{
        type:Number,
        required:true
    },  
    startDate:{
        type:String,
        required:true
    },
    logo:{
        type:String
    },
    
 })
 let jobs=
 mongoose.model("jobs",jobSchema);
 
 module.exports = jobs;