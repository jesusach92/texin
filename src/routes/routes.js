import { Router } from 'express';
import { supplielist, supplieById, 
    supplieFullAdress, adressContact, supplieContacts, 
    supplieProducts, addSupplie, addAdress, addContact, addProduct, AsingProductSupplie, EditAdress, EditContact, EditSupplie, EditSupply } 
from '../controllers/controllers'

const router = Router();

// Lista a todos los proveedores con domilicio y contacto principal
router.get('/proveedores', supplielist);

//obtiene los datos del proveedor que corresponde al ID
router.get('/proveedor/:id', supplieById)

//Obtiene todos los domicilios del proveedor
router.get('/proveedor/domicilios/:id', supplieFullAdress)

// Obtiene tiene los contactos del domicilio
router.get('/proveedor/domicilio/contactos/:id', adressContact)

// Obtiene todos los contactos del proveedor
router.get('/proveedor/contactos/:id',supplieContacts)

// Obtiene todos los productos del Proveedor
router.get('/proveedor/productos/:id', supplieProducts)

// Metodos de Entrada de Proveedores//

// Agrega Proveedor devuelve el ID del proveedor nuevo
router.post('/agregar/proveedor', addSupplie)

//Agrega domicilio a Proveedore devuelve el ID del nuevo domicilio
router.post('/agregar/domicilio',addAdress)

//Agrega contacto a Domicilio Devulve el Id del contacto
router.post('/agregar/contacto',addContact)

//Asigna un producto que ya existe a un proveedor 

router.post('/Asignar/Producto', AsingProductSupplie)


// Metodos de Actualizacion de Proveedores
//Actualiza el Domicilio y la fecha de Actualizacion del proveedor
router.put('/Actualizar/Domicilio',EditAdress)

// Actualiza el Contancto y la fecha de Actualizacion del Proveedor
router.put('/Actualizar/Contacto',EditContact)

// Actualiza los datos del proveedor y Fecha de Modificacion

router.put('/Actualizar/Proveedor',EditSupplie)

// Actualiza la relacion entre proveedor y Producto

router.put('/Actualizar/Relacion',EditSupply)

// Metodos de Productos

router.post('/agregar/producto',addProduct)

export default router;
