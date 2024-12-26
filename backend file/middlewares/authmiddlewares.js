const isManagerAuthenticated = (req, res, next) => {
  console.log(
    req.cookies == "manager_access",
    Object.keys(req.cookies)[0],
    "..."
  );
  if (Object.keys(req.cookies)[0] == "manager_access") {
    next();
  } else {
    console.log(
      `Unauthorized access attempt by manager: ${
        req.session ? req.session.user.email : "Unknown"
      }`
    );
    res
      .status(401)
      .json({ success: false, message: "Unauthorized access: Manager only" });
  }
};

const isTeacherAuthenticated = (req, res, next) => {
  if (Object.keys(req.cookies)[0] == "teacher_access") {
    next();
  } else {
    console.log(
      `Unauthorized access attempt by teacher: ${
        req.session ? req.session.user.email : "Unknown"
      }`
    );
    res
      .status(401)
      .json({ success: false, message: "Unauthorized access: Teacher only" });
  }
};

export { isManagerAuthenticated, isTeacherAuthenticated };
