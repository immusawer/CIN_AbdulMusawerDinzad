import { Router } from 'express';
import LoginController from '../controllers/loginController.js';

const loginRouter = Router();

loginRouter.post('/login', LoginController.login);
// loginRouter.get('/session', LoginController.getSession);

export default loginRouter;
