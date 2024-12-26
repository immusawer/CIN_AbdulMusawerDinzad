
import SessionController from "../controllers/sessionController.js";
import { Router } from "express";

const sessionRoute = Router()


sessionRoute.get("/get-session", SessionController.getSession)

export default sessionRoute