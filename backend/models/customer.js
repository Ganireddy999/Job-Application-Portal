const mongoose=require("mongoose")

const userSchema = mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   confirmPassword:{
    
    type:String,
    required:true
   }

})
let customer=
mongoose.model("customer",userSchema);

module.exports = customer;