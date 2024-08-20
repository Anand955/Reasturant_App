const mongoose = require('mongoose')

//schema
const userSchema = new mongoose.Schema({
  userName :{
    type: String,
    required: [true, 'user name is required']
  },
  email :{
    type: String,
    required: [true , 'email is required'],
    unique : true
  },
  password: {
    type: String,
    required: [true, 'password is reuired']
  },
  address: {
    type: Array,
  },
  phone:{
    type: String,
    required: [true, 'phone number is required']
  },
  usertype:{
    type:String,
    required: [true, 'user type is required'],
    default: 'clienet',
    enum: ['clinet', 'admin', 'vendor', 'driver' ]
  },
  profile:{
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukleU1059SFH-flP36qRWECpm9pQfQ7f50Q&s'
  }

}, {timestamps:true})

//export
module.export = mongoose.model('User', userSchema)