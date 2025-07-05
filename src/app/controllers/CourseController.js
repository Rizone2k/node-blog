const Course = require("../../models/Courses");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /course
  async index(req, res, next) {
    try {
      let course = await Course.findOne({ slug: req.params.slug }).exec();
      res.render("courses/show", { course: mongooseToObject(course) });
    } catch (error) {
      next(error);
    }
  }
  show(req, res) {
    res.render("home");
  }
}

module.exports = new CourseController();
