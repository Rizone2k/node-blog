const Course = require("../../models/Courses");
const { mongooseToObject, toSlug } = require("../../util/mongoose");

class CourseController {
  create(req, res, next) {
    res.render("courses/create");
  }
  async storage(req, res, next) {
    try {
      const data = req.body;
      data.slug = toSlug(data.name);
      await Course.create([data]);
      console.log("Created!!!");
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  }

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
