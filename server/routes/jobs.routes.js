const JobsController = require("../controllers/jobs.controller");

module.exports = app => {
  app.get("/api/jobs/", JobsController.findAll);
  app.get("/api/jobs/:id", JobsController.findOneItem);
  app.post("/api/jobs/new", JobsController.createNew);
  app.put("/api/jobs/update/:id", JobsController.updateExistingItem);
  app.delete("/api/jobs/delete/:id", JobsController.deleteAnExistingItem);
};