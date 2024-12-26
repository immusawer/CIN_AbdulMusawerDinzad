import Courses from "../models/courseModal.js";
import Teachers from "../models/teacherModal.js";
import session from "express-session";

const sessionMiddlewareForManager = session({
  key: "manager_access",
  secret: "check in now",
  resave: true,
  saveUninitialized: false,
  cookie: { secure: false },
});

const sessionMiddlewareForTeacher = session({
  key: "teacher_access",
  secret: "check in now",
  resave: true,
  saveUninitialized: false,
  cookie: { secure: false },
});

const LoginController = {
  login: async (req, res) => {
    try {
      const { email, password, role } = req.body;

      if (role === "manager") {
        const course = await Courses.findOne({ email, role });

        if (!course || course.password !== password) {
          return res
            .status(404)
            .json({ success: false, message: "Invalid email or password" });
        }

        sessionMiddlewareForManager(req, res, () => {
          req.session.user = { email: course.email, role: "manager" };
          return res.status(200).json({
            success: true,
            message: "Manager logged in successfully",
            data: course,
          });
        });
      } else if (role === "teacher") {
        const teacher = await Teachers.findOne({ teacher_email: email, role });

        if (!teacher) {
          return res
            .status(404)
            .json({ success: false, message: "Teacher not found" });
        }

        if (teacher.password !== password) {
          return res
            .status(401)
            .json({ success: false, message: "Incorrect password" });
        }

        sessionMiddlewareForTeacher(req, res, () => {
          req.session.user = { email: teacher.teacher_email, role: "teacher" };
          return res.status(200).json({
            success: true,
            message: "Teacher logged in successfully",
            data: teacher,
          });
        });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Invalid role specified" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

export default LoginController;
