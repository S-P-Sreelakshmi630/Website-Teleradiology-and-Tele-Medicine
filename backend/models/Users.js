const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  username: { type: String, unique: true, required: true },
});

const EmployeeModel = mongoose.model("users", EmployeeSchema);
module.exports = EmployeeModel;
