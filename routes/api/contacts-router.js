import express from "express";
import contactController from "../../controllers/contact-controller.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactController.getAll);

contactsRouter.get("/:contactId", contactController.getById);

// contactsRouter.post("/", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

// contactsRouter.delete("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

// contactsRouter.put("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

export default contactsRouter;
