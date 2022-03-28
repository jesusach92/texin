import { Router } from 'express';
import { supplielist, supplieById, 
    supplieFullAdress, adressContact, supplieContacts, 
    supplieProducts, addSupplie, addAdress, addContact, addProduct, AsingProductSupplie, EditAdress, EditContact, EditSupplie, EditSupply, deleteContact, deleteAdress, deleteSupply, deleteSupplie, editProduct, deleteProduct, addBusinessType, addTechnology, addsClasification, addaType } 
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

//Metodos de borrado

//Borrar contacto de domicilio
router.delete('/Borrar/contacto/:id', deleteContact)

// Borrar Domicilios
router.delete('/Borrar/Domicilio/:id',deleteAdress)

// Borrar Relacion Proveedor-Producto

router.delete('/Borrar/Relacion/:id', deleteSupply)

// Borrar Proveedor
router.delete('/Borrar/proveedor/:id',deleteSupplie)

// Metodos de Productos

//Agregar producto sin relacion
router.post('/agregar/producto',addProduct)

// Actualizar campos del producto
router.put('/Actualizar/Producto',editProduct)

// Borrar producto y su relacion con los proveedores
router.delete('/Borrar/Producto/:id',deleteProduct)

// Metodos de Configuracion 

//Metodo par agregar tipo de negocio
router.post('/Agregar/negocio',addBusinessType)

//Metodo para agregar Tecnologia del producto
router.post('/Agregar/Tecnologia',addTechnology)

// Metodo para agregar clasificacion de proveedor
router.post('/Agregar/Clasificacion',addsClasification)

//Agregar tipo de domicilio
router.post('/Agregar/TipoDomicilio',addaType)

export default router;