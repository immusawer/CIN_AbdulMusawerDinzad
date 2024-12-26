import mongoose from 'mongoose';

const privateCourseSchema = new mongoose.Schema({

    isVisable: { type: Boolean, required: true },
    courseName: {
        type: String,
        required: function () { return this.isVisable; }
    },
    handle: {
        type: String,
        required: function () { return this.isVisable; }
    },
    studentsCount: {
        type: String,
        required: function () { return this.isVisable; }
    },
    teacherCount: {
        type: String,
        required: function () { return this.isVisable; }
    },
    studyFields: {
        type: String,
        required: function () { return this.isVisable; }
    },
    location: {
        type: String,
        required: function () { return this.isVisable; }
    },
    description: {
        type: String,
        required: function () { return this.isVisable; }
    },
    Images: {
        type: Buffer,
        required: function () { return this.isVisable; }
    }
});

privateCourseSchema.pre('save', function (next) {
    if (this.isNew) {
        const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
        this.unique_code = `${this.fullName}_${this.courseName}_${randomNumber}`.split(" ").join("");
    }
    next();
});

const PrivateCourses = mongoose.model('PrivateCourses', privateCourseSchema);

export default PrivateCourses;
