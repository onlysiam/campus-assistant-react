const Joi = require("joi");
const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Model = mongoose.model("Model", modelSchema);

const validateModel = (model) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
  });

  return Joi.validate(model, schema);
};

exports.modelSchema = modelSchema;
exports.Model = Model;
exports.validate = validateModel;
