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
    const { contactId } = req.params;
    const result = await contactsService.getContactById(contactId);
    res.json(result);
    if (!result) {
      res.status(404).json({
        message: "Not found 404",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default {
  getAll,
  getById,
};
