import mongoose from 'mongoose';

const teacherScheema = new mongoose.Schema({
    courseName: { type: String, required: true },
    course_unique_code: { type: String, required: true },
    // phone: { type: String, required: true },
    teacher_name: { type: String, required: true },
    teacher_email: { type: String, required: true },
    handle: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
    // unique_code: { type: String, unique: true }
});

teacherScheema.pre('save', function (next) {
    if (this.isNew) {
        this.handle = `${this.teacher_name}_${this.courseName}`;
    }
    next();
});

const Teachers = mongoose.model('Teachers', teacherScheema);

export default Teachers;
