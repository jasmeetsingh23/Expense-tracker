const mongoose = require('mongoose')
const colors = require('colors')

const connectDb = async () => {
    try{
        await mongoose.connect('mongodb+srv://jasmeet_22:jassi%402201@cluster0.1rey2fg.mongodb.net/chat-gpt


',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`server running on ${mongoose.connection.host}`.bgCyan.white);
    }
    catch(error){
        console.log(`error ${error}`.bgRed);
    }
}


module.exports = connectDb
