// routes.js
import { Router } from 'express';
import { ClassController } from '../controllers/classController.js';
import { isManagerAuthenticated, isTeacherAuthenticated } from '../middlewares/authmiddlewares.js';


const classRouter = Router();

// Corrected routes
classRouter.post('/class', ClassController.addaClass);
classRouter.get('/class', ClassController.getAllClasses);
classRouter.get('/s-class/:handle', isTeacherAuthenticated, ClassController.getSingleClass);

classRouter.put('/class/:id', ClassController.updateClass);
classRouter.delete('/class/:id', ClassController.deleteaClass);

// router.post('/login', UserController.authLogin); // Corrected route path
// router.post('/user', UserController.createUser);
// router.put('/user/:id', UserController.updateUser); // Corrected route path
// router.delete('/user/:id', UserController.deleteUser); // Corrected route path

export default classRouter;
