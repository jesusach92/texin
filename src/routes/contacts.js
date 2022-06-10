import { Router } from "express";
import {addContact, adressContact, deleteContact, EditContact, supplieContacts} from "../controllers/contacts"
const router = Router();

// Obtiene todos los contactos del domicilio pasando el Id del domicilio
router.get("/:id", adressContact);
// Obtiene todos los contactos del proveedor
router.get("/supplie/:id", supplieContacts);
//Agrega contacto a Domicilio Devulve el Id del contacto
router.post("/", addContact);
// Actualiza el Contancto y la fecha de Actualizacion del Proveedor
router.put("/", EditContact);
//Borrar contacto de domicilio
router.delete("/:id", deleteContact);

module.exports = router