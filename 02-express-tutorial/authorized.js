const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "admin") {
    req.user = { name: "admin", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

export default authorize;
