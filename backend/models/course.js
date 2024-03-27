import mongoose, { Schema } from "mongoose";

const Course = new Schema({
   courseName: {
      type: String,
      required: [true, 'Please enter the course name'],
      trim: true
   },
   level: {
      type: String,
      required: [true, 'Please select the level of course'],
      enum: ["Beginner", "Intermediate", "Advanced"]
   },
   description: {
      type: String,
      required: [true, 'Provide Short explaination of course'],
   },
   date: {
      type: Date,
      required: [true, 'Please enter the date for the course'],
   },
   duration: {
      type: String,
      required: [true, 'Please enter the duration of course'],
   },
   batch: {
      type: String,
      required: [true, 'Please select the batchd'],
      enum: ['Morning', 'Afternoon', 'Evening']
   },
   instructor: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please enter the name of the instructor'],
      ref: "User"
   },
   image: {
      type: String,
      required: false
   }
})

export default mongoose.model('Course', Course)