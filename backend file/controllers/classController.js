import Class from '../models/classModal.js';


const ClassController = {

    getAllClasses: async (req, res) => {

        try {
            const clasess = await Class.find({});
            return res.status(201).json({ success: true, message: "Class Created Successfully", data: clasess });
        } catch (error) {
            console.error('Error in create Class:', error);  // Detailed error logging
            return res.status(404).json({ success: false, message: "class creating faild", data: {} });

        }
    },
    getSingleClass: async (req, res) => {
        const { handle } = req.params;
        try {
            const singleClass = await Class.find({
                handle
            });
            if (singleClass.length === 0) {
                return res.status(404).json({ message: 'No students found' });
            }
            res.status(200).json(singleClass);
        } catch (error) {
            console.error('Error in getting students:', error);  // Detailed error logging
            res.status(500).json({ error: 'Error in getting students' });
        }
    },
    addaClass: async (req, res) => {
        const {

            course_name,
            class_name,
            teacher_name,
            duration,
            start_day,
            finish_day,
            started_time,
            finish_time,
            handle,

        } = req.body
        try {

            const newClass = new Class({
                course_name,
                class_name,
                teacher_name,
                duration,
                start_day,
                finish_day,
                started_time,
                finish_time,
                handle,
            });
            await newClass.save();
            return res.status(201).json({ success: true, message: "Class Created Successfully", data: newClass });
        } catch (error) {
            console.error('Error in create Class:', error);  // Detailed error logging
            return res.status(404).json({ success: false, message: "class creating faild", data: {} });

        }
    },

    updateClass: async (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;

            // Validate the ID
            if (!id) {
                return res.status(400).json({ message: 'Class ID is required' });
            }

            const updatedClass = await Class.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

            if (!updatedClass) {
                return res.status(404).json({ message: 'Class not found' });
            }

            return res.status(200).json({ success: true, message: 'Class updated successfully', data: updatedClass });
        } catch (error) {
            console.error('Error updating class:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    deleteaClass: async (req, res) => {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ message: 'Class ID is required' });
            }
            const classToDelete = await Class.findByIdAndDelete(id);

            if (!classToDelete) {
                return res.status(404).json({ message: 'Class not found' });
            }

            return res.status(200).json({ message: 'Class deleted successfully' });
        } catch (error) {
            console.error('Error deleting class:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
};

export { ClassController };
