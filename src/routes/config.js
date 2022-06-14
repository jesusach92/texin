import { Router } from "express";
const router = Router();
import {
  addaType,
  addBusinessType,
  addsClasification,
  addTechnology,
  deleteAddType,
  deleteBusinessType,
  deleteSclasification,
  deleteTechnology,
  listAType,
  listBusiness,
  listSClasificacion,
  listTech,
  updateAddType,
  updateBusinessType,
  UpdatesClasification,
  UpdateTechnology,
} from "../controllers/config";

// Metodos de Configuracion

//Metodo que devuelve los tipos de domicilio
router.get("/AdresType", listAType);

//Metodo que devuelve los tipos de negocios
router.get("/BusinessType", listBusiness);

// Metodo que devuelve las clasificaciones de un proveedor
router.get("/SClasification", listSClasificacion);

//Metodo para que regresa los tipos de tecnolocia que existen
router.get("/Tech", listTech);

//Agregar tipo de domicilio
router.post("/AdresType", addaType);

//Metodo para agregar tipo de negocio
router.post("/BusinessType", addBusinessType);

// Metodo para agregar clasificacion de proveedor
router.post("/SClasification", addsClasification);

//Metodo para agregar Tecnologia del producto
router.post("/Tech", addTechnology);


//Ruta para Actualizar Tipo de Domicilio
router.put("/AdresType", updateAddType);

// Metodo de Actualizacion de Tipos de Negocio
router.put("/BusinessType", updateBusinessType);

// Ruta para Actualizar Clasificacion de Proveedor
router.put("/SClasification", UpdatesClasification);

// Ruta para Actualizar el tipo de Tenologia
router.put("/Tech", UpdateTechnology);


//Ruta para borrar tipo de domicilio
router.delete("/AdresType/:id", deleteAddType);

// Metodo para eliminar tipo de negocio
router.delete("/BusinessType/:id", deleteBusinessType);

// Ruta para borrar clasificacion de proveedor
router.delete("/SClasification/:id", deleteSclasification);

//Ruta para borrar tecnologia
/* Deleting the technology. */
router.delete("/Tech/:id", deleteTechnology);

export  {router}
