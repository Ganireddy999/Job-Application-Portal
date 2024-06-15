const mongoose=require("mongoose")

const  companySchema = mongoose.Schema({
   companyName:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   }
  
})
let companies=
mongoose.model("companies",companySchema);

module.exports = companies;