import Student from '../models/studentModal.js';


const StudentsController = {
    getStudentById: async (req, res) => {
        const { _id } = req.body;
        try {
            const getStudent = await Student.findOne({ id: _id });
            if (!getStudent) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.status(200).json(getStudent);
        } catch (error) {
            console.error('Error in getting student:', error);  // Detailed error logging
            res.status(500).json({ error: 'Error in getting student' });
        }
    },
    getStudentOfaClass: async (req, res) => {
        const { name, course_name, class_name, teacher_name } = req.params;
        try {
            const getStudent = await Student.findOne({
                name: name,
                course_name: course_name,
                class_name: class_name,
                teacher_name: teacher_name
            });
            if (!getStudent) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.status(200).json(getStudent);
        } catch (error) {
            console.error('Error in getting student:', error);  // Detailed error logging
            res.status(500).json({ error: 'Error in getting student' });
        }
    },
    getAllStudents: async (req, res) => {
        try {
            const getStudent = await Student.find({

            });
            if (!getStudent) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.status(200).json(getStudent);
        } catch (error) {
            console.error('Error in getting student:', error);  // Detailed error logging
            res.status(500).json({ error: 'Error in getting student' });
        }
    },
    getAllStudentsofCourse: async (req, res) => {
        const { course_name } = req.params
        try {
            const getStudent = await Student.find({ course_name: course_name });
            if (!getStudent) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.status(200).json(getStudent);
        } catch (error) {
            console.error('Error in getting student:', error);  // Detailed error logging
            res.status(500).json({ error: 'Error in getting student' });
        }
    },

    getAllStudentsOfAclass: async (req, res) => {
        const { course_name, class_name, teacher_name } = req.params;
        try {
            const students = await Student.find({
                course_name,
                class_name,
                teacher_name
            });

            if (students.length === 0) {
                return res.status(404).json({ message: 'No students found' });
            }
            res.status(200).json(students);
        } catch (error) {
            console.error('Error in getting students:', error);  // Detailed error logging
            res.status(500).json({ error: 'Error in getting students' });
        }
    },

    addaStudent: async (req, res) => {
        const {
            name,
            father_name,
            course_name,
            class_name,
            teacher_name,
            obsentDays,
            presentDays,
            phone,
            email,
            address,
            started_time,
            finish_time,
            verification_code } = req.body
        try {
            // const student = await User.findOne({ email });
            // if (emailExists) {
            //     res.status(400).json({ message: 'Email already exists' });
            // }
            //  else {
            const newStudent = new Student({
                name,
                father_name,
                course_name,
                class_name,
                teacher_name,
                phone,
                obsentDays: 0,
                presentDays: 0,
                email,
                address,
                started_time,
                finish_time,
                verification_code
            });
            await newStudent.save();
            res.status(201).json(newStudent);
            // }
        } catch (error) {
            console.error('Error in create student:', error);  // Detailed error logging
            res.status(500).json({ error: 'Cannot create student' });
        }
    },

    updateStudent: async (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;

            // Validate the ID
            if (!id) {
                return res.status(400).json({ message: 'Student Id is required' });
            }

            const updatedStudent = await Student.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

            if (!updatedStudent) {
                return res.status(404).json({ message: 'student not found' });
            }

            return res.status(200).json({ success: true, message: 'student updated successfully', data: updatedStudent });
        } catch (error) {
            console.error('Error updating student:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },
    deleteStudent: async (req, res) => {
        try {
            const { id } = req.params;

            // Validate the ID
            if (!id) {
                return res.status(400).json({ message: 'student ID is required' });
            }
            const studentToDelete = await Student.findByIdAndDelete(id);

            if (!studentToDelete) {
                return res.status(404).json({ message: 'Student not found' });
            }

            return res.status(200).json({ message: 'Student deleted successfully' });
        } catch (error) {
            console.error('Error deleting class:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    // getAllStudentOfClass
};

export { StudentsController };
