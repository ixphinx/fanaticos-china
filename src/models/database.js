const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
   /* Usuarios */
    user: String,
    password: String,
    username: String,
    userlastname: String,
    usercountry: String,
    usercity: String,
    useralias: String,
    userscore: Number,
    userexp: Number,
    
    /* Trivia */
    main: String,
    type: String,
    code: Number,
    quest: String,
   answer: String,
   rate: Number,
    
    
});

module.exports= mongoose.model('Data', Data);
