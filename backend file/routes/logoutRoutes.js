
import { Router } from 'express';
import LogoutController from '../controllers/logoutController.js';


const logoutRouter = Router();

logoutRouter.post('/logout', LogoutController.logout);
// loginRouter.get('/session', LoginController.getSession);

export default logoutRouter;
