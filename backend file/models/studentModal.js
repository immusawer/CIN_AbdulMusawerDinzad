import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';



const studentScheema = new mongoose.Schema({
    name: String,
    father_name: String,
    course_name: String,
    class_name: String,
    teacher_name: String,
    obsentDays: Number,
    presentDays: Number,
    phone: String,
    email: String,
    address: String,
    started_time: String,
    finish_time: String,
    verification_code: String
});

const Student = mongoose.model('Students', studentScheema);

export default Student;
