// privateCourseController.js
import PrivateCourses from "../models/privateCourseModal.js";

const PrivateCourseController = {
    addPrivateCourse: async (req, res) => {
        const { isVisable,
            courseName,
            location,
            description,
            handle,
            studentsCount,
            teacherCount,
            studyFields,
        } = req.body;
        const image = req.file; // multer middleware will populate this

        if (!image) {
            return res.status(400).send({ message: 'Image file is required' });
        }

        try {
            const newCourse = new PrivateCourses({
                isVisable,
                courseName,
                handle,
                studentsCount,
                teacherCount,
                studyFields,
                location,
                description,
                Images: image.buffer
            });

            await newCourse.save();
            res.status(201).send(newCourse);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    },

    getCourse: async (req, res) => {
        // const { courseName} = req.params;
        try {
            const course = await PrivateCourses.find({});
            if (!course) {
                return res.status(404).send({ message: 'Course not found' });
            }
            res.send(course);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    getSingleCourse: async (req, res) => {
        const { handle } = req.params;
        console.log(handle, '.........')
        // const coursemm = await PrivateCourseController
        // console.log(coursemm, 'ccc')
        try {
            const course = await PrivateCourses.findOne({ handle });
            console.log("it is done,'......")
            if (!course) {
                return res.status(404).send({ message: 'Course not found' });
            }
            else {
                console.log("sss done,'......")
                res.send(course);
            }
        } catch (err) {
            console.log("not done,'......")
            res.status(500).send(err);
        }
    },
    updateCourse: async (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;

            if (req.file) {
                console.log('File:', req.file);    // Log file data
                updateData.image = req.file.path; // Update the image path if a new image is uploaded
            }
            // Validate the ID
            if (!id) {
                return res.status(400).json({ message: 'Student Id is required' });
            }

            const updatedStudent = await PrivateCourses.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

            if (!updatedStudent) {
                return res.status(404).json({ message: 'student not found' });
            }

            return res.status(200).json({ success: true, message: 'student updated successfully', data: updatedStudent });
        } catch (error) {
            console.error('Error updating student:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    deletePrivateCours: async (req, res) => {
        try {
            const { id } = req.params;

            // Validate the ID
            console.log(id, 'iddddddddddddddd   ')
            if (!id) {
                return res.status(400).json({ message: 'course ID is required' });
            }
            const courseToDelete = await PrivateCourses.findByIdAndDelete(id);

            if (!courseToDelete) {
                return res.status(404).json({ message: 'Course not found' });
            }

            return res.status(200).json({ message: 'Course deleted successfully' });
        } catch (error) {
            console.error('Error deleting class:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
};

export { PrivateCourseController };
