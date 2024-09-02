const { User, Company } = require("../models/userData");

async function findEmpIdOnDatabase(empId_temp) {
  try {
    let obj = await Company.find({ empId: empId_temp });
    if (obj.length > 0) {
      return { status: 400, msg: "Emp exists" };
    } else {
      return { status: 404, msg: "Emp not found" };
    }
  } catch (err) {
    return { status: 500, msg: "Error on fetching ID" };
  }
}

async function SignUp(req, res) {
  try {
    console.log(req.body)
    let obj = await User.find({ empId: req.body.empId });

    if (obj.length > 0) {
      return res.status(400).json({ msg: "Employee exists" });
    } else {
      let msg1 = await findEmpIdOnDatabase(req.body.empId);
      if (msg1.status === 400) {
        // console.log(req.body);
        await User.create(req.body);
        res.status(200).json({ msg: "User created successfully" });
      } else if (msg1.status === 404) {
        res.status(403).json({ msg: "Not allowed" });
      } else {
        res.json({ msg: msg1.msg });
      }
    }
  } catch (err) {
    res.status(500).json({ msg: "Registration Failed" });
  }
}
async function Login(req, res) {
  try {
    let obj = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (obj) {
      res.status(200).json({ status: true, user:obj ,  msg: "Successfully Logged In" });
    } else {
      res.status(404).json({status:false ,  msg: "User not found" });
    }
  } catch (error) {
    res.status(500).json({status:false , msg:error})
  }
}

module.exports = { SignUp, Login };
