import { Router } from 'express';
import { productlist, supplielist, addproduct, addsupplie, getsuppliebyid, 
    getproductbyid, getproductsbysupplie, getsuppliebyproduct } from '../controllers/controllers'

const router = Router();

router.get('/proveedores', supplielist);

router.get('/productos', productlist);

router.get('/proveedores/:id', getsuppliebyid);

router.get('/proveedores/productos/:id',getproductsbysupplie);

router.get('/productos/:id',getproductbyid);

router.get('/productos/proveedores/:id', getsuppliebyproduct);

router.post('/agregar/producto', addproduct);

router.post('/agregar/proveedor',addsupplie);

export default router;
