class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.send("Show news details...");
  }
  showPost(req, res) {
    res.send("Show POST method...");
  }
}

module.exports = new NewsController();
