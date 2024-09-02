const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String},
  password:{type:String},
  dateOfBirth: { type: Date},
  email: { type: String, unique: true },
   phone: { type: String },
  address: { type: String },
  empId: { type: String,unique: true },
   department: { type: String},
   dateOfJoining: { type: Date},
  walletAddress: { type: String}
});

const companySchema=new mongoose.Schema({
    empId:{type:String,unique:true},
    fullname:String
})

const User = mongoose.model('User', userSchema);
const Company=mongoose.model("employee",companySchema);

module.exports ={ User ,
    Company
};
