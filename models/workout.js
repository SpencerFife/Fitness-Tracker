"use strict";

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercise: [
    {
      type: String,
      name: String,
      duration: Number,
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]
});

module.exports = mongoose.model("Workout", workoutSchema);
