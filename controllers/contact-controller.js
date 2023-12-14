import * as contactsService from "../models/contacts.js";

const getAll = async (req, res, next) => {
  try {
    const result = await contactsService.listContacts();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getById = async (req, res, next) => {
  try {
    console.log(req.params);
    const result = await contactsService.getContactById(id);
    res.json(result);
  } catch (err) {
    res.status(500);
    json({
      message: err.message,
    });
  }
};

export default {
  getAll,
  getById,
};
