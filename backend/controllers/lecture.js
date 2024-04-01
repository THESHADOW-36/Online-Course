import asyncHandler from "../middlewares/async.js";
import Course from "./../models/course.js"
import User from "./../models/auth.js"

export const addLecture = asyncHandler(async (req, res, next) => {
   const { courseName, level, description, date, duration, batch, instructor, image } = req.body;

   const assignedDate = new Date(date)
   const startDate = new Date(assignedDate.getFullYear(), assignedDate.getMonth(), assignedDate.getDate());
   const endDate = new Date(assignedDate.getFullYear(), assignedDate.getMonth(), assignedDate.getDate() + 1);
   console.log("startDate:", startDate)
   console.log("endDate:", endDate)

   const isDuplicate = await Course.findOne({
      date: {
         $gte: startDate,
         $lte: endDate,
      }
   })

   console.log("isDuplicate:", isDuplicate)

   if (isDuplicate) return res.status(401).json({ success: false, message: `Instructor is already assigned on ${date}` });

   const lecture = await Course.create({ courseName, level, description, date, duration, batch, instructor, image })

   res.status(200).json({ success: true, lecture })
})

export const getLectures = asyncHandler(async (req, res, next) => {

   if (req.user.role === 'Admin') {

      const lecture = await Course.find({}).populate('instructor', 'name');

      res.status(200).json({ success: true, lecture })

   } else if (req.user.role !== 'Admin') {

      const lecture = await Course.find({instructor: req.user._id}).populate('instructor', 'name');

      res.status(200).json({ success: true, lecture })

   } else {
      return res.status(401).json({ success: false, message: "Lecture data list is not found" });
   }

})

export const getSingleLecture = asyncHandler(async (req, res, next) => {
   const { id } = req.params;

   const lecture = await Course.findById(id)

   if (!lecture) return res.status(401).json({ success: false, message: "Lecture data list is not found" });

   res.status(200).json({ success: true, lecture })
})

export const editLecture = asyncHandler(async (req, res, next) => {

   const { courseName, level, description, date, duration, batch, instructor, image } = req.body;

   const { id } = req.params;

   const lecture = await Course.findByIdAndUpdate(
      id,
      { courseName, level, description, date, duration, batch, instructor, image },
      { new: true }
   );

   res.status(200).json({ success: true, lecture })
})

export const deleteLecture = asyncHandler(async (req, res, next) => {
   const { id } = req.params;

   const lecture = await Course.findByIdAndDelete(id)

   if (!lecture) return res.status(401).json({ success: false, message: "Lecture data is not found" });

   res.status(200).json({ success: true, message: 'Lecture is deleted.', lecture })
})
