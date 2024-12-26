import Courses from "../models/courseModal.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import emailVerifier from "email-verify";

const maxAge = 3 * 60 * 60 * 24;



const createToken = (id) => {
    return jwt.sign({ id }, 'check in final project', {
        expiresIn: maxAge
    })
}
const CourseController = {
    getSingleCourseByUniqueId: async (req, res) => {
        const { unique_code } = req.params;
        try {
            const course = await Courses.findOne({ unique_code });
            if (!course) {
                return res.status(404).send({ message: 'Course not found' });
            }
            res.send(course);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    getCourseByHandle: async (req, res) => {
        const { handle } = req.params;
        try {
            const course = await Courses.findOne({ handle });
            console.log(handle, course, 'hhhhhhhhhhhhhh')
            if (!course) {
                console.log(course, 'cccc')
                return res.status(404).send({ message: 'Course not found' });
            }
            console.log(course, 'ccccccccccccccc')
            res.send(course);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getAllCourses: async (req, res) => {
        // res.cookie("session", "hyacinth")
        try {
            const course = await Courses.find({}); // Retrieve all users
            res.send(course); // Send the users array as the response
        } catch (error) {
            console.error('Error retrieving course:', error);
            res.status(500).send('Error retrieving users');
        }
    },
    createCourse: async (req, res, next) => {
        const { fullName, email, courseName, phone, handle, password, role } = req.body;

        emailVerifier.verify("masihmuhammadi202@gmail.com", async (err, info) => {
            if (err) {
                console.log("email is real", info)
            }
            if (!info.success) {
                return res.send("The it is fake");
            }
        })
        try {
            const emailExists = await Courses.findOne({ email });
            const couresExist = await Courses.findOne({ courseName });

            if (emailExists) {
                return res.status(400).json({ success: false, message: 'Email already exists', data: {} });
            }
            if (couresExist) {
                return res.status(400).json({ success: false, message: 'a course with these name already exist', data: {} });
            }
            // const hashedPassword = await bcrypt.hash(password, 10);
            const newCourse = new Courses({
                fullName,
                email,
                courseName,
                phone,
                handle,
                // password: hashedPassword,
                password,
                role
            });

            await newCourse.save();
            res.status(201).json({ success: true, message: "course created successfully", data: newCourse });
        } catch (error) {
            console.error('Error in createCourse:', error);
            res.status(500).json({ error: error.message });
        }
    },
    updateCourse: (req, res) => {

    },
    deleteCourse: async (req, res) => {
        try {
            const { id } = req.params;

            // Validate the ID
            if (!id) {
                return res.status(400).json({ message: 'course ID is required' });
            }
            const courseToDelete = await Courses.findByIdAndDelete(id);

            if (!courseToDelete) {
                return res.status(404).json({ message: 'course not found' });
            }

            return res.status(200).json({ message: 'course deleted successfully' });
        } catch (error) {
            console.error('Error deleting course:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
};

export { CourseController };
