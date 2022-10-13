let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// People Model
let peopleSchema = require("../models/People");

// CREATE People
router.post("/create-people", (req, res, next) => {
  peopleSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Peoples
router.get("/", (req, res, next) => {
  peopleSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// UPDATE people
router
  .route("/update-people/:id")
  // Get Single People
  .get((req, res, next) => {
    peopleSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })

  // Update People Data
  .put((req, res, next) => {
    peopleSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
          console.log("People updated successfully !");
        }
      }
    );
  });

// Delete People
router.delete("/delete-people/:id", (req, res, next) => {
  peopleSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
