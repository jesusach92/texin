import { Router } from "express";
import {
  supplielist,
  supplieById,
  supplieFullAdress,
  adressContact,
  supplieContacts,
  supplieProducts,
  addSupplie,
  addAdress,
  addContact,
  addProduct,
  AsingProductSupplie,
  EditAdress,
  EditContact,
  EditSupplie,
  EditSupply,
  deleteContact,
  deleteAdress,
  deleteSupply,
  deleteSupplie,
  editProduct,
  deleteProduct,
  addBusinessType,
  addTechnology,
  addsClasification,
  addaType,
  listAType,
  productlist,
  productId,
  productSupplies,
  listTech,
  listBusiness,
  listSClasificacion,
  GetSupply,
  updateBusinessType,
  UpdateTechnology,
  UpdatesClasification,
  updateAddType,
  getDataAdmin,
  deleteBusinessType,
  deleteSclasification,
  deleteTechnology,
  deleteAddType,
} from "../controllers/controllers";
import { addUser, deleteUSer, getListUsers, getRoleUser, serchUser, updateUser, userRegister } from "../controllers/users";

const router = Router();

// Lista a todos los proveedores con tipo de negocio y clasificacion
router.get("/proveedores", supplielist);

//obtiene los datos del proveedor que corresponde al ID
router.get("/proveedor/:id", supplieById);

//Obtiene todos los domicilios del proveedor
router.get("/proveedor/domicilios/:id", supplieFullAdress);

// Obtiene todos los contactos del domicilio pasando el Id del domicilio
router.get("/proveedor/domicilio/contactos/:id", adressContact);

// Obtiene todos los contactos del proveedor
router.get("/proveedor/contactos/:id", supplieContacts);

// Obtiene todos los productos del Proveedor
router.get("/proveedor/productos/:id", supplieProducts);

//Obtiene la relacion entre proveedor y producto
router.get("/Proveedor/Producto/:id", GetSupply);

// Metodos de Entrada de Proveedores//

// Agrega Proveedor devuelve el ID del proveedor nuevo
router.post("/Agregar/proveedor", addSupplie);

//Agrega domicilio a Proveedore devuelve el ID del nuevo domicilio
router.post("/Agregar/domicilio", addAdress);

//Agrega contacto a Domicilio Devulve el Id del contacto
router.post("/Agregar/contacto", addContact);

//Asigna un producto que ya existe a un proveedor
router.post("/Asignar/Producto", AsingProductSupplie);

// Metodos de Actualizacion de Proveedores
//Actualiza el Domicilio y la fecha de Actualizacion del proveedor
router.put("/Actualizar/Domicilio", EditAdress);

// Actualiza el Contancto y la fecha de Actualizacion del Proveedor
router.put("/Actualizar/Contacto", EditContact);

// Actualiza los datos del proveedor y Fecha de Modificacion

router.put("/Actualizar/Proveedor", EditSupplie);

// Actualiza la relacion entre proveedor y Producto

router.put("/Actualizar/Relacion", EditSupply);

//Metodos de borrado

//Borrar contacto de domicilio
router.delete("/Borrar/contacto/:id", deleteContact);

// Borrar Domicilios
router.delete("/Borrar/Domicilio/:id", deleteAdress);

// Borrar Relacion Proveedor-Producto

router.delete("/Borrar/Relacion/:id", deleteSupply);

// Borrar Proveedor
router.delete("/Borrar/proveedor/:id", deleteSupplie);

// Metodos de Productos

// Listar productos con Nombre del producto, tecnologia, descripcion
router.get("/productos", productlist);

// Mostrar datos de producto por Id
router.get("/Producto/:id", productId);

router.get("/Producto/Proveedores/:id", productSupplies);

//Agregar producto sin relacion
router.post("/agregar/producto", addProduct);

// Actualizar campos del producto
router.put("/Actualizar/Producto", editProduct);

// Borrar producto y su relacion con los proveedores
router.delete("/Borrar/Producto/:id", deleteProduct);

// Metodos de Configuracion

//Metodo para agregar tipo de negocio
router.post("/Agregar/Negocio", addBusinessType);

// Metodo para eliminar tipo de negocio
router.delete("/Borrar/TNegocio/:id",deleteBusinessType)
//Metodo para agregar Tecnologia del producto
router.post("/Agregar/Tecnologia", addTechnology);

//Ruta para borrar tecnologia 
router.delete("/Borrar/Tecnologia/:id",deleteTechnology)

//Metodo para que regresa los tipos de tecnolocia que existen
router.get("/Tecnologias", listTech);

// Metodo para agregar clasificacion de proveedor
router.post("/Agregar/Clasificacion", addsClasification);

// Ruta para borrar clasificacion de proveedor
router.delete("/Borrar/Clasificacion/:id", deleteSclasification)

//Agregar tipo de domicilio
router.post("/Agregar/TipoDomicilio", addaType);

//Ruta para borrar tipo de domicilio
router.delete("/Borrar/TipoDom/:id",deleteAddType)

//Metodo que devuelve los tipos de domicilio
router.get("/TiposDom", listAType);

//Metodo que devuelve los tipos de negocios
router.get("/Negocios", listBusiness);

// Metodo que devuelve las clasificaciones de un proveedor
router.get("/Clasificacion", listSClasificacion);

// Metodo de Actualizacion de Tipos de Negocio
router.put("/Actualizar/Negocio", updateBusinessType);

// Ruta para Actualizar el tipo de Tenologia
router.put("/Actualizar/Tecnologia", UpdateTechnology);

// Ruta para Actualizar Clasificacion de Proveedor
router.put("/Actualizar/Clasificacion", UpdatesClasification);

//Ruta para Actualizar Tipo de Domicilio
router.put("/Actualizar/TipoDomicilio", updateAddType);

// Registrar Usuario
router.post("/Registrar/usuario", userRegister);

//Autenticar Usuario
router.post("/Autenticar", serchUser);

//Obtener Data para el Usuario
router.get("/DataAdmin", getDataAdmin);

//Obtener Lista de Usuarios para Admin
router.get("/UsuariosAdmin", getListUsers);

//Borrar Usuario
router.delete("/Borrar/Usuario/:id", deleteUSer);

// Obtener los Roles a Asignar
router.get("/Roles",getRoleUser)

//Registrar Usuario
router.post("/Agregar/Usuario", addUser)

//Actualizar Usuario
router.put("/Actualizar/Usuario",updateUser)
export default router;
