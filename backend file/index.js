import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./models/db.js";
import loginRouter from "./routes/loginRouter.js";
import studentRoutes from "./routes/studentRoutes.js";
import classRouter from "./routes/classRoutes.js";
import courseRouter from "./routes/courseRouter.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import privateCourseRoutes from "./routes/privateCourseRoutes.js";
import mailRoute from "./routes/sendMailRoutes.js";
import logoutRouter from "./routes/logoutRoutes.js";
import sessionRoute from "./routes/sessionRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(cookieParser());

// Use routes
app.use("/api", sessionRoute);
app.use("/api", logoutRouter);
app.use("/api/auth", loginRouter);
app.use("/api/students", studentRoutes);
app.use("/api/classes", classRouter);
app.use("/api/courses", courseRouter);
app.use("/api/teachers", teacherRoutes);
app.use("/api/public-courses", privateCourseRoutes); // Assuming these don't need protection
app.use("/api", mailRoute); // Ensure this path is correct

connectDB();

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
