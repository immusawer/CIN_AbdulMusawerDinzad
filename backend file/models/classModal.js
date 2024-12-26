import { ObjectId } from "mongodb";
import mongoose from "mongoose";

// course_name: "mozamel",
// class_name: values.subject,
// teacher_name: "masih",
// duration: values.duration,
// start_day: values.start_day,
// finish_day: values.finish_day,
// started_time: values.started_time,
// finish_time: values.finish_time,

const classScheema = new mongoose.Schema({
  course_name: String,
  class_name: String,
  teacher_name: String,
  duartion: String,
  start_day: String,
  finish_day: String,
  started_time: String,
  finish_time: String,
  handle: String,
});

const Class = mongoose.model("Classes", classScheema);

export default Class;
