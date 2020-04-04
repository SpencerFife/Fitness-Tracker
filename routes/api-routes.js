"use strict";

const db = require("../models");

module.exports = app => {
  //get - stats
  app.get(`/api/workouts`, (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get(`/api/workouts/range`, (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  //post - workout

  app.post(`/api/workouts`, ({ body }, res) => {
    db.Workout.create(body)
      .then(({ _id }) =>
        db.Workout.findOneAndUpdate(
          {},
          { $push: { exercise: _id } },
          {
            new: true
          }
        )
      )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  //app.post();
  //put - get workouts

  //app.put();
};

//start new workout (app.post)
