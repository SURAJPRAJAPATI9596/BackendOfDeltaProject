const Joi = require("joi");

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    prince: Joi.number().required().min(3),
    image: Joi.string().allow("", null),
  }).required(),
});

module.exports = listingSchema;
