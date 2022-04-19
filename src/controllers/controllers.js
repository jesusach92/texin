import { connect } from "../database/database";

async function UpdateSup(Id, db) {
  try {
    await db.query(
      "UPDATE supplie SET  supplie.sDateUpdate=? WHERE idSupplie=?;",
      [date(), Id]
    );
  } catch (e) {
    console.log(e);
  }
}

// Fecha de ultima actualizacion
const date = () => {
  let fulldate = new Date();
  let date = `${fulldate.getFullYear()}-${
    fulldate.getMonth() + 1
  }-${fulldate.getDate()}`;
  return date;
};
/* Metodos de los Proveedores*/

// 1.- Listar proveedores con el tipo de negocio y el tipo de proveedor que son
export const supplielist = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query(
    "SELECT * FROM supplie t1 JOIN businesstype t2 JOIN sclasification t3 ON t1.FkBusinessType=t2.idBusinessType AND t1.FkClasification=t3.idClasification ORDER BY sDateUpdate DESC;"
  );
  if (!rows) {
    res.json([]);
  } else {
    res.json(rows);
  }
  db.end();
};

// 2.-Obtener Proveedor por Id

export const supplieById = async (req, res) => {
  const db = await connect();
  try {
    const [rows] = await db.query(
      "SELECT * FROM supplie t1 JOIN businesstype t2 JOIN sclasification t3 ON t1.FkBusinessType = t2.idBusinessType AND t1.FkClasification = t3.idClasification WHERE t1.idSupplie= ?;",
      [req.params.id]
    );
    if (!rows.length) res.json([]);
    else res.json(rows);
  } catch (e) {
    console.log(e);
  }
  db.end();
};

//3.-Obtener los domicilios del proveedor

export const supplieFullAdress = async (req, res) => {
  const db = await connect();
  try {
    const [rows] = await db.query(
      "SELECT * FROM adresssupplie t1 JOIN adresstype t2 ON t1.FkadressType = t2.idadressType WHERE t1.FkSupplieAd =? ORDER BY adressPrincipal DESC;",
      [req.params.id]
    );
    if (!rows.length) {
      res.json([]);
    } else {
      res.json(rows);
    }
  } catch (e) {
    console.log(e);
  }
  db.end();
};

//4.-Obtener los contactos del domicilio

export const adressContact = async (req, res) => {
  const db = await connect();
  try {
    const [rows] = await db.query(
      "SELECT * FROM contactsupplies WHERE FkAdressCont =? ORDER BY contactPrincipal DESC;",
      [req.params.id]
    );
    if (!rows.length) {
      res.json([]);
    } else {
      res.json(rows);
    }
  } catch (e) {
    console.log(e);
  }
  db.end();
};

//5.-Obtener todos los contactos del proveedor

export const supplieContacts = async (req, res) => {
  const db = await connect();
  try {
    const [rows] = await db.query(
      "SELECT * FROM supplie t1 JOIN adresssupplie t2 JOIN adresstype t3 JOIN contactsupplies t4 ON t1.idSupplie = t2.FkSupplieAd AND t2.FkadressType = t3.idadressType AND t2.idAdress = t4.FkAdressCont WHERE idSupplie =? ORDER BY t4.contactPrincipal DESC;",
      [req.params.id]
    );
    if (!rows.length) {
      res.json([]);
    } else {
      res.json(rows);
    }
  } catch (e) {
    console.log(e);
  }
  db.end();
};

//6.-Obtener todos los productos que el proveedor tiene registrados

export const supplieProducts = async (req, res) => {
  const db = await connect();
  try {
    const [rows] = await db.query(
      "SELECT * FROM supply t1 JOIN products t2 JOIN technologies t3 ON t1.FkProductSpy = t2.idProduct AND t2.FkTechnologyPro = t3.idTechnology WHERE t1.FkSupplieSpy=?;",
      [req.params.id]
    );
    if (!rows.length) {
      res.json([]);
    } else {
      res.json(rows);
    }
  } catch (e) {
    console.log(e);
  }
  db.end();
};

//7.-Agregar Proveedor

export const addSupplie = async (req, res) => {
  const db = await connect();
  try {
    const [rows] = await db.query(
      "INSERT INTO supplie (nameSupplie, FkBusinessType, FkClasification, sDateInitial, sDateUpdate) VALUES (?, ?, ?, ?, ?); ",
      [
        req.body.nameSupplie,
        req.body.FkBusinessType,
        req.body.FkClasification,
        date(),
        date(),
      ]
    );
    res.json({ insertId: rows.insertId, value: 1 });
  } catch (e) {
    res.json({ value: 0 });
  }
  db.end();
};

//8.-Agregar Domicilio a proveedor

export const addAdress = async (req, res) => {
  const db = await connect();
  let principalAdress = 0;
  try {
    const [principal] = await db.query(
      "SELECT * FROM adresssupplie WHERE FkSupplieAd=? AND adressPrincipal=1;",
      [req.body.FkSupplieAd]
    );
    if (!principal.length) {
      principalAdress = 1;
    } else {
      principalAdress = 0;
    }
    UpdateSup(req.body.FkSupplieAd, db);
    const [rows] = await db.query(
      "INSERT INTO adresssupplie (FkSupplieAd, FkadressType, adressPrincipal, adressCountry, adressState, adressDescription, aComments) VALUES (?,?,?,?,?,?,?);",
      [
        req.body.FkSupplieAd,
        req.body.FkadressType,
        principalAdress,
        req.body.adressCountry,
        req.body.adressState,
        req.body.adressDescription,
        req.body.aComments,
      ]
    );
    res.json({ insertId: rows.insertId, value: 1 });
  } catch (e) {
    console.log(e);
  }
  db.end();
};

//9.-Agregar Contacto a Domicilio de Proveedor
export const addContact = async (req, res) => {
  const db = await connect();
  let principalContact = 0;
  try {
    const [principal] = await db.query(
      "SELECT * FROM contactsupplies WHERE FkAdressCont = ? AND contactPrincipal=1;",
      [req.body.FkAdressCont]
    );
    if (!principal.length) {
      principalContact = 1;
    } else {
      principalContact = 0;
    }
    const [[{ FkSupplieAd }]] = await db.query(
      "SELECT FkSupplieAd FROM adresssupplie WHERE idAdress = ?;",
      [req.body.FkAdressCont]
    );
    UpdateSup(FkSupplieAd, db);
    const [rows] = await db.query(
      "INSERT INTO contactsupplies (FkAdressCont, nameContact, contactPrincipal, workposition, officeNumber, cellphoneNumber, comments) VALUES (?,?,?,?,?,?,?);",
      [
        req.body.FkAdressCont,
        req.body.nameContact,
        principalContact,
        req.body.workposition,
        req.body.officeNumber,
        req.body.cellphoneNumber,
        req.body.comments,
      ]
    );
    res.json({ insertId: rows.insertId, value: 1 });
  } catch (e) {
    console.log(e);
  }
  db.end();
};

//10.-Asignar Producto a Proveedor: siempre y cuando el producto ya exista

export const AsingProductSupplie = async (req, res) => {
  try {
    const db = await connect();
    let [rows] = [];
    const [Asing] = await db.query(
      "SELECT * FROM supply WHERE FkSupplieSpy=? AND FkProductSpy =?;",
      [req.body.FkSupplieSpy, req.body.FkProductSpy]
    );
    if (!Asing.length) {
      [rows] = await db.query(
        "INSERT INTO supply (FkSupplieSpy, FkProductSpy, price, divisa , deliveryTime, productLine, comments, pDateInitial, pDateUpdate, pSampleF, pSampleLocation) VALUES (?,?,?,?,?,?,?,?,?,?,?);",
        [
          req.body.FkSupplieSpy,
          req.body.FkProductSpy,
          req.body.price,
          req.body.divisa,
          req.body.deliveryTime,
          req.body.productLine,
          req.body.comments,
          date(),
          date(),
          req.body.pSampleF,
          req.body.pSampleLocation,
        ]
      );
      res.json({ insertId: rows.insertId, value: 1 });
    } else {
      res.json({ value: 0 });
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};

//11.-Editar Domicilio

export const EditAdress = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "UPDATE adresssupplie  INNER JOIN supplie ON FkSupplieAd = idSupplie SET adressPrincipal = ?, adressDescription = ?, aComments=?, sDateUpdate=? WHERE idAdress= ?;",
      [
        req.body.adressPrincipal,
        req.body.adressDescription,
        req.body.aComments,
        date(),
        req.body.idAdress,
      ]
    );
    if (rows.affectedRows > 0) {
      res.send("La actualizacion fue realizada correctamente");
    } else {
      res.send("No se realizo la actualizacion");
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};

//12.-Editar Contacto
export const EditContact = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "UPDATE contactsupplies INNER JOIN adresssupplie INNER JOIN supplie ON FkAdressCont = idAdress AND FkSupplieAd = idSupplie SET contactPrincipal =?, workposition =?, officeNumber=?, cellphoneNumber=?, comments=?, sDateUpdate=? WHERE idContact=?;",
      [
        req.body.contactPrincipal,
        req.body.workposition,
        req.body.officeNumber,
        req.body.cellphoneNumber,
        req.body.comments,
        date(),
        req.body.idContact
      ]
    );
    if (rows.affectedRows > 0) {
      res.json({value:1});
    } else {
      res.json({value:0});
    }
    db.end();
  } catch (E) {
    console.log(E);
  }
};

//13.-Editar Proveedor

export const EditSupplie = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "UPDATE supplie SET nameSupplie =?, FKBusinessType =?, FkClasification=?,sDateUpdate =?WHERE idSupplie =?;",
      [
        req.body.nameSupplie,
        req.body.FKBusinessType,
        req.body.FkClasification,
        date(),
        req.body.idSupplie,
      ]
    );
    if (rows.affectedRows > 0) {
      res.send("La actualizacion fue realizada correctamente");
    } else {
      res.send("No se realizo la actualizacion");
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};

//14.-Editar Relacion Proveedor Producto

export const EditSupply = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "UPDATE supply SET price = ?, divisa = ?,deliveryTime =?,productLine =?, comments =?,pDateUpdate =?,pSampleF=?,pSampleLocation=? WHERE idSupply=?;",
      [
        req.body.price,
        req.body.divisa,
        req.body.deliveryTime,
        req.body.productLine,
        req.body.comments,
        date(),
        req.body.pSampleF,
        req.body.pSampleLocation,
        req.body.idSupply,
      ]
    );
    if (rows.affectedRows > 0) {
      res.json({ value: 1 });
    } else {
      res.json({ value: 0 });
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};
/*15.-Eliminar Contacto de acuerdo a su Id contact*/

export const deleteContact = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "DELETE FROM contactsupplies WHERE idContact=?;",
      [req.params.id]
    );
    if (rows.affectedRows > 0) {
      res.send("Contacto eliminado con exito");
    } else {
      res.send("No se puede eliminar el contacto");
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};

/*16.-Eliminar Domicilio de acuerdo con su Id de domicilio
 */
export const deleteAdress = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "DELETE FROM adresssupplie WHERE idAdress=?;",
      [req.params.id]
    );
    if (rows.affectedRows > 0) {
      res.send("Domicilio eliminado con exito");
    } else {
      res.send("No se puede eliminar el contacto");
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};
/*17.-Eliminar Producto asignado al proveedor
 */
export const deleteSupply = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query("DELETE FROM supply WHERE idSupply=?;", [
      req.params.id,
    ]);
    if (rows.affectedRows > 0) {
      res.send("Producto eliminado con exito del proveedor");
    } else {
      res.send("No se pudo eliminar el producto del proveedor");
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};

//18.-Eliminar Proveedor, eliminar por completo todos los datos relacionados con el proveedor, domicilios, contactos, productos que tenga asignados.
export const deleteSupplie = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query("DELETE FROM supplie WHERE idSupplie=?;", [
      req.params.id,
    ]);
    if (rows.affectedRows > 0) {
      res.send("Proveedor Eliminado con Exito");
    } else {
      res.send("No se pudo eliminar el proveedor");
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};
//Metodos de Productos
// 1.- Listar productos con tecnologia, despripcion y nombre
export const productlist = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "SELECT idProduct,productName,descriptionProduct,nameTechnology FROM products INNER JOIN technologies ON FkTechnologyPro= idTechnology;"
    );
    if (!rows.length) {
      res.json([]);
    } else {
      res.json(rows);
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};
// 2.-Devolver producto por id
export const productId = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "SELECT * FROM products INNER JOIN technologies ON FkTechnologyPro= idTechnology WHERE idProduct=?;",
      [req.params.id]
    );
    if (!rows.length) {
      res.json([]);
    } else {
      res.json(rows);
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};

//3.- Devolver todos los proveedores que tienen en venta 1 producto
export const productSupplies = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "SELECT * FROM supply  INNER JOIN supplie ON FkSupplieSpy = idSupplie WHERE FkProductSpy=? ORDER BY pDateUpdate;",
      [req.params.id]
    );
    if (!rows.length) {
      res.json([]);
    } else {
      res.json(rows);
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};
// 2.-Agregar Producto
export const addProduct = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "INSERT INTO products (FkTechnologyPro, productName, descriptionProduct) VALUES (?, ?, ?);",
      [
        req.body.FkTechnologyPro,
        req.body.productName,
        req.body.descriptionProduct,
      ]
    );
    res.json({ insertId: rows.insertId, value: 1 });
    db.end();
  } catch (e) {
    console.log(e);
  }
};
//2.-Editar Producto
export const editProduct = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "UPDATE products SET FkTechnologyPro = ?, productName=?, descriptionProduct=? WHERE idProduct=?;",
      [
        req.body.FkTechnologyPro,
        req.body.productName,
        req.body.descriptionProduct,
        req.body.idProduct,
      ]
    );
    if (rows.affectedRows > 0) {
      res.send("La actualizacion fue realizada correctamente");
    } else {
      res.send("No se realizo la actualizacion");
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};
//3.- Eliminar Producto
export const deleteProduct = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query("DELETE FROM products WHERE idProduct=?;", [
      req.params.id,
    ]);
    if (rows.affectedRows > 0) {
      res.send("Producto Eliminado con Exito");
    } else {
      res.send("No se pudo eliminar el producto");
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};

// Metodo que devuelve la relacion de un proveedor con un producto, pidiendo el Id de la relacion
export const GetSupply = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM supply WHERE idSupply=?;", [
      req.params.id,
    ]);
    rows.length > 0 ? res.json(rows) : res.json({ value: 0 });
    db.end();
  } catch (e) {
    console.log(e);
  }
};
/*Metodos Generales de configuracion*/
// Agregar Tipo de Negocio para clasificar
export const addBusinessType = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "INSERT INTO businesstype (bName, bDescription) VALUES (?,?);",
      [req.body.bName, req.body.bDescription]
    );
    res.json({ value: 1 });
    db.end();
  } catch (e) {
    console.log(e);
  }
};

// Metodo para actualizar tipo de negocio

export const updateBusinessType = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "UPDATE businesstype SET bName = ?, bDescription=? WHERE idBusinessType =?;",
      [req.body.bName, req.body.bDescription, req.body.idBusinessType]
    );
    if (rows.affectedRows > 0) {
      res.json({ value: 1 });
    } else {
      res.json({ value: 0 });
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};

// Metodo para agregar Clasificacion de Productos
export const addTechnology = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "INSERT INTO technologies (nameTechnology) VALUES (?);",
      [req.body.nameTechnology]
    );
    res.json({ value: 1 });
    db.end();
  } catch (e) {
    console.log(e);
  }
};
//Metodo para actualizar Tecnologia de Productos
export const UpdateTechnology = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "UPDATE technologies SET nameTechnology = ? WHERE idTechnology = ?;",
      [req.body.nameTechnology, req.body.idTechnology]
    );
    if (rows.affectedRows > 0) {
      res.json({ value: 1 });
    } else {
      res.json({ value: 0 });
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};

// Metodo para agregar Clasificacion de Proveedores

export const addsClasification = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "INSERT INTO sclasification (clasificationName) VALUES (?);",
      [req.body.clasificationName]
    );
    res.json({ value: 1 });
    db.end();
  } catch (e) {
    console.log(e);
  }
};

export const UpdatesClasification = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "UPDATE sclasification SET clasificationName = ? WHERE idClasification = ?;",
      [req.body.clasificationName, req.body.idClasification]
    );
    if (rows.affectedRows > 0) {
      res.json({ value: 1 });
    } else {
      res.json({ value: 0 });
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};

//Metodo para agregar Tipos de Domicilio
export const addaType = async (req, res) => {
  const db = await connect();
  try {
    const [rows] = await db.query(
      "INSERT INTO adresstype (aType) VALUES (?);",
      [req.body.aType]
    );
    res.json({ value: 1 });
  } catch (e) {
    console.log(e);
  }
  db.end();
};

// Metodo para Actualizar Tipos de Domicilio
export const updateAddType = async (req, res) =>{
  try {
    const db = await connect();
    const [rows] = await db.query(
      "UPDATE adresstype SET aType = ? WHERE idadressType = ?;",
      [req.body.aType, req.body.idadressType]
    );
    if (rows.affectedRows > 0) {
      res.json({ value: 1 });
    } else {
      res.json({ value: 0 });
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
}

// Metodo para listar las tenologias del producto
export const listTech = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT * FROM technologies;");
  if (!rows) {
    res.json([]);
  } else {
    res.json(rows);
  }
  db.end();
};

//Metodo para listar los tipos de domicilio
export const listAType = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT * FROM adresstype;");
  if (!rows) {
    res.json([]);
  } else {
    res.json(rows);
  }
  db.end();
};

//Metodo para listar los tipos de negocio

export const listBusiness = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT * FROM businesstype;");
  if (!rows) {
    res.json([]);
  } else {
    res.json(rows);
  }
  db.end();
};

// Metodo para listar la clasificacion de proveddores
export const listSClasificacion = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT * FROM sclasification;");
  if (!rows) {
    res.json([]);
  } else {
    res.json(rows);
  }
  db.end();
};
// Para guardar fechas convertir a año, mes + 1 y dia con funciones getfullyear(), getmounth(), getdate(),
