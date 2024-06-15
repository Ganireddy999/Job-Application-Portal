// establishing MongoDB connection b/w express and MongoDB

let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017').then(
    ()=>{
       console.log("connectedd"); 
    }
).catch((err)=>{
    console.log(err);
})

