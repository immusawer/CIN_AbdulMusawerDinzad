import Teachers from "../models/teacherModal.js";
import Courses from "../models/courseModal.js";

const TeacherController = {
    getAllTeachers: async (req, res) => {
        try {
            const teachers = await Teachers.find({});

            res.send(teachers);
        } catch (error) {
            console.error('Error retrieving teachers:', error);
            res.status(500).send('Error retrieving teachers');
        }
    },
    getSingleTeacher: async (req, res) => {
        try {
            const { handle } = req.params; // Get handle from URL parameters
            const teacher = await Teachers.findOne({ handle }); // Find teacher by handle
            if (!teacher) {
                return res.status(404).send('Teacher not found');
            }

            return res.status(200).json({ message: 'Techer Data Get SuccessFully', data: { teacher }, success: true });

        } catch (error) {
            console.error('Error retrieving teacher:', error);
            res.status(500).json('Error retrieving teacher');
        }
    },

    getTeachersByCourseName: async (req, res) => {
        const { courseName } = req.params;
        try {
            const course = await Teachers.find({ courseName });

            if (!course || course?.length == 0) {
                return res.status(404).send({ message: 'No Teacher found' });
            }
            res.send(course);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    createTeacher: async (req, res) => {
        const { courseName, course_unique_code, teacher_name, teacher_email, handle, password, role } = req.body;
        try {
            // Check if the course exists with the provided courseName and course_unique_code
            const courseExists = await Courses.findOne({ courseName, unique_code: course_unique_code });
            if (!courseExists) {
                return res.status(400).json({ message: 'Invalid course name or unique code' });
            }

            // Check if a teacher with the provided email already exists
            const emailExists = await Teachers.findOne({ teacher_email });
            if (emailExists) {
                return res.status(400).json({ message: 'Email already exists' });
            }

            // Create a new teacher
            const newTeacher = new Teachers({
                courseName,
                course_unique_code,
                teacher_name,
                teacher_email,
                handle,
                password,
                role
            });

            await newTeacher.save();
            res.status(201).json(newTeacher);
        } catch (error) {
            console.error('Error in create teacher:', error);
            res.status(500).json({ error: 'Cannot create teacher' });
        }
    },
    updateTeacher: async (req, res) => {
        // Update teacher logic here
    },
    deleteTeacher: async (req, res) => {
        // Delete teacher logic here
    }
};

export { TeacherController };
