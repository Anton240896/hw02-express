import * as contactsService from "../models/contacts.js";
import { HttpError } from "../helpers/index.js";

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
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    // console.log(req.body);
    const result = await contactsService.addContact(req, body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  getAll,
  getById,
  add,
};
