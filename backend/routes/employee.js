let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Employee Model
let employeeSchema = require("../Models/Employee");

// CREATE Employee
router.route("/create").post((req, res, next) => {
  employeeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Employees
router.route("/").get((req, res) => {
  employeeSchema
    .find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    })
    .sort({ name: "ASC" });
});

// Get Single Employee
router.route("/:id").get((req, res) => {
  employeeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Employee
router.route("/edit/:id").put((req, res, next) => {
  employeeSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Employee updated successfully !");
      }
    }
  );
});

// Delete Employee
router.route("/delete/:id").delete((req, res, next) => {
  employeeSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
