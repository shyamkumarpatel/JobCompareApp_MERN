const Jobs = require("../models/jobs.model");

module.exports.findAll = (req, res) => {
  Jobs.find()
    .then(allPet => res.json(allPet))
    .catch(err => res.json(err));
};

module.exports.findOneItem = (req, res) => {
  Jobs.findOne({ _id: req.params.id })
  .then(oneSinglePet => res.json(oneSinglePet))
  .catch(err => res.json(err));
};

module.exports.createNew = (req, res) => {
  Jobs.create(req.body)
    .then(newlyCreatedPet => res.json(newlyCreatedPet))
    .catch(err => res.status(400).json(err));
};

module.exports.updateExistingItem = (req, res) => {
  Jobs.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators : true })
    .then(updatedPet => res.json(updatedPet))
    .catch(err => res.status(400).json(err));
};

module.exports.deleteAnExistingItem = (req, res) => {
  Jobs.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json(err));
};
