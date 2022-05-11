const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeSchema = new Schema(
  {
    employeeno: {
      type: Number,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    collection: "employees",
  }
);

module.exports = mongoose.model("employee", employeeSchema);
