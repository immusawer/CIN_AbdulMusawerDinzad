// privateCourseRoutes.js
import { Router } from 'express';
import { PrivateCourseController } from '../controllers/privateCourseController.js';
import multer from 'multer';
import { isManagerAuthenticated } from '../middlewares/authmiddlewares.js';

// Configure multer for file upload
const upload = multer();

const privateCourseRouter = Router();

privateCourseRouter.get('/p-courses', PrivateCourseController.getCourse);
privateCourseRouter.post('/p-courses', upload.single('image'), isManagerAuthenticated, PrivateCourseController.addPrivateCourse);
privateCourseRouter.get('/p-courses/:handle', PrivateCourseController.getSingleCourse);
privateCourseRouter.put('/p-courses/:id', isManagerAuthenticated, PrivateCourseController.updateCourse);
privateCourseRouter.delete('/p-courses/:id', isManagerAuthenticated, PrivateCourseController.deletePrivateCours);


export default privateCourseRouter;
