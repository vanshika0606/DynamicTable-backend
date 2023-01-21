const mongoose = require("mongoose");


const connectDatabase = ()=>{


    mongoose.connect("mongodb+srv://vanshika:V%40nshika66@cluster0.aabycfe.mongodb.net/DynamicTable?retryWrites=true&w=majority" , {useNewUrlParser:true}).then((data)=>{
    console.log(`Mongodb connect with server 4000`)
}).catch((err)=>{
    console.log(err)
})


}

module.exports = connectDatabase;