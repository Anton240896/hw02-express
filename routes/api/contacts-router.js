import express from "express";
import contactController from "../../controllers/contact-controller.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactController.getAll);

contactsRouter.get("/:contactId", contactController.getById);

contactsRouter.post("/", contactController.addById);

contactsRouter.delete("/:contactId", contactController.deleteById);

contactsRouter.put("/:contactId", contactController.updateById);

export default contactsRouter;
