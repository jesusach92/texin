import { Router } from "express";
import {addContact, adressContact, deleteContact, EditContact, supplieContacts} from "../controllers/contacts"
const contactsRouter = Router();

// Obtiene todos los contactos del domicilio pasando el Id del domicilio
contactsRouter.get("/:id", adressContact);
// Obtiene todos los contactos del proveedor
contactsRouter.get("/supplie/:id", supplieContacts);
//Agrega contacto a Domicilio Devulve el Id del contacto
contactsRouter.post("/", addContact);
// Actualiza el Contancto y la fecha de Actualizacion del Proveedor
contactsRouter.put("/", EditContact);
//Borrar contacto de domicilio
contactsRouter.delete("/:id", deleteContact);

export default contactsRouter