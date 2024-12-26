import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const courseSchema = new mongoose.Schema({
    fullName: { type: String, required: true, lowercase: true },
    email: { type: String, required: true, unique: true },
    courseName: { type: String, required: true, unique: [true, "a course already exist with this name"], lowercase: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    handle: { type: String, required: true },
    unique_code: { type: String, unique: true },
    role: { type: String, required: true }
});

courseSchema.pre('save', function (next) {
    if (this.isNew) {
        const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
        this.unique_code = `${this.fullName}_${this.courseName}_${randomNumber}`.split(" ").join("");
    }
    next();
});

// courseSchema.pre('save', async function (next) {
//     try {
//         if (this.isModified('password')) {
//             const salt = await bcrypt.genSalt();
//             this.password = await bcrypt.hash(this.password, salt);
//         }
//         next();
//     } catch (err) {
//         next(err);
//     }
// });

const Courses = mongoose.model('Courses', courseSchema);

export default Courses;
