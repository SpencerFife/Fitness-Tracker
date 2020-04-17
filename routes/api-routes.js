"use strict";
const router = require("express").Router();
const Workout = require("../models/workout.js");
//create
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
//update
router.post(`/api/workouts`, ({ body }, res) => {
  Workout.create(body)
    .then(({ _id }) =>
      db.Workout.findOneAndUpdate(
        {},
        { $push: { exercise: _id } },
        {
          new: true,
        }
      )
    )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
//get workout
router.get(`/api/workouts`, (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
//get stats
router.get(`/api/workouts/range`, (req, res) => {
  Workout.find()
    .sort({ day: -1 })
    .limit(10)
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});
//delete
router.delete("/api/workouts", ({ body }, res) => {
  Workout.findOneAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
