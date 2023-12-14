import Joi from "joi";

export const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" must be exist`,
  }),
  email: Joi.string().required().messages({
    "any.required": `"email" must be exist"`,
  }),
  phone: Joi.number().required().messages({
    "any.required": `"number" must be exist`,
  }),
});

export const contactUpdateSchema = Joi.object({
  title: Joi.string(),
  director: Joi.string(),
});
