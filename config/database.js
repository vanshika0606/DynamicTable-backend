const mongoose = require("mongoose");


const connectDatabase = ()=>{


    mongoose.connect("mongodb+srv://vanshika:Vanshika66@mern.4iuapb3.mongodb.net/?retryWrites=true&w=majority" , {useNewUrlParser:true}).then((data)=>{
    console.log(`Mongodb connect with server 4000`)
}).catch(()=>{
    console.log(err)
})


}

module.exports = connectDatabase;