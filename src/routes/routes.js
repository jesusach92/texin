import { Router } from 'express';
import { supplielist, supplieById, suppliPrincipalAdress, 
    supplieFullAdress, adressContact, supplieContacts, 
    supplieProducts, addSupplie } 
from '../controllers/controllers'

const router = Router();

router.get('/proveedores', supplielist);

router.get('/proveedor/:id', supplieById)

router.get('/proveedor/domicilios/principal/:id', suppliPrincipalAdress)

router.get('/proveedor/domicilios/:id', supplieFullAdress)

router.get('/proveedor/domicilio/contactos/:id', adressContact)

router.get('/proveedor/contactos/:id',supplieContacts)

router.get('/proveedor/productos/:id', supplieProducts)

router.post('/agregar/proveedor', addSupplie)

export default router;
