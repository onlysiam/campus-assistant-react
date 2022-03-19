const Joi = require("joi");

const validateUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(2).max(50).required(),
  });

  return Joi.validate(user, schema);
};

exports.validate = validateUser;
