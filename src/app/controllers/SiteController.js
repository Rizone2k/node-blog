const Course = require("../../models/Courses");

class SiteController {
  // [GET] /
  async index(req, res, next) {
    try {
      let courses = await Course.find({}).lean();
      res.render("home", {
        courses,
      });
    } catch (error) {
      next(error);
    }
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
