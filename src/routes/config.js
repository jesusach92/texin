import { Router } from "express";
const routes = Router();
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
routes.get("/AdresType", listAType);

//Metodo que devuelve los tipos de negocios
routes.get("/BusinessType", listBusiness);

// Metodo que devuelve las clasificaciones de un proveedor
routes.get("/SClasification", listSClasificacion);

//Metodo para que regresa los tipos de tecnolocia que existen
routes.get("/Tech", listTech);

//Agregar tipo de domicilio
routes.post("/AdresType", addaType);

//Metodo para agregar tipo de negocio
routes.post("/BusinessType", addBusinessType);

// Metodo para agregar clasificacion de proveedor
routes.post("/SClasification", addsClasification);

//Metodo para agregar Tecnologia del producto
routes.post("/Tech", addTechnology);


//Ruta para Actualizar Tipo de Domicilio
routes.put("/AdresType", updateAddType);

// Metodo de Actualizacion de Tipos de Negocio
routes.put("/BusinessType", updateBusinessType);

// Ruta para Actualizar Clasificacion de Proveedor
routes.put("/SClasification", UpdatesClasification);

// Ruta para Actualizar el tipo de Tenologia
routes.put("/Tech", UpdateTechnology);


//Ruta para borrar tipo de domicilio
routes.delete("/AdresType/:id", deleteAddType);

// Metodo para eliminar tipo de negocio
routes.delete("/BusinessType/:id", deleteBusinessType);

// Ruta para borrar clasificacion de proveedor
routes.delete("/SClasification/:id", deleteSclasification);

//Ruta para borrar tecnologia
/* Deleting the technology. */
routes.delete("/Tech/:id", deleteTechnology);

export default routes
