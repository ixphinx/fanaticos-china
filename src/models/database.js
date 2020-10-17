const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
   /* Usuarios */
    user: String,
    password: String,
    username: String,
    userlastname: String,
    usercountry: String,
    userteam: String,
    useralias: String,
    userscore: Number,
    userexp: Number,
    
    /* Trivia */
    main: String,
    type: String,
    code: Number,
    quest: String,
    ranswer: String,
    wanswer1: String,
    wanswer2: String,
    wanswer3: String,
    rate: Number,
    
    
});

module.exports= mongoose.model('Data', Data);
