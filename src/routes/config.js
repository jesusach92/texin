import { Router } from "express";
const configRouter = Router();
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
configRouter.get("/AdresType", listAType);

//Metodo que devuelve los tipos de negocios
configRouter.get("/BusinessType", listBusiness);

// Metodo que devuelve las clasificaciones de un proveedor
configRouter.get("/SClasification", listSClasificacion);

//Metodo para que regresa los tipos de tecnolocia que existen
configRouter.get("/Tech", listTech);

//Agregar tipo de domicilio
configRouter.post("/AdresType", addaType);

//Metodo para agregar tipo de negocio
configRouter.post("/BusinessType", addBusinessType);

// Metodo para agregar clasificacion de proveedor
configRouter.post("/SClasification", addsClasification);

//Metodo para agregar Tecnologia del producto
configRouter.post("/Tech", addTechnology);


//Ruta para Actualizar Tipo de Domicilio
configRouter.put("/AdresType", updateAddType);

// Metodo de Actualizacion de Tipos de Negocio
configRouter.put("/BusinessType", updateBusinessType);

// Ruta para Actualizar Clasificacion de Proveedor
configRouter.put("/SClasification", UpdatesClasification);

// Ruta para Actualizar el tipo de Tenologia
configRouter.put("/Tech", UpdateTechnology);


//Ruta para borrar tipo de domicilio
configRouter.delete("/AdresType/:id", deleteAddType);

// Metodo para eliminar tipo de negocio
configRouter.delete("/BusinessType/:id", deleteBusinessType);

// Ruta para borrar clasificacion de proveedor
configRouter.delete("/SClasification/:id", deleteSclasification);

//Ruta para borrar tecnologia
/* Deleting the technology. */
configRouter.delete("/Tech/:id", deleteTechnology);

export default configRouter
