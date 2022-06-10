import {connect} from "../database/database"

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
  
  // Metodo para borrar tipo de negocio
  export const deleteBusinessType = async (req, res) => {
    try {
      const db = await connect();
      const [rows] = await db.query(
        "DELETE FROM businesstype WHERE idBusinessType=?",
        [req.params.id]
      );
      if (rows.affectedRows > 0) {
        res.json({ value: 1 });
      } else {
        res.json({ value: 0 });
      }
      db.end();
    } catch (error) {
      console.log(error);
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
  
  // Borrar Tipo de Tecnologia 
  export const deleteTechnology = async (req, res) => {
    try {
      const db = await connect();
      const [rows] = await db.query(
        "DELETE FROM technologies WHERE idTechnology=?",
        [req.params.id]
      );
      if (rows.affectedRows > 0) {
        res.json({ value: 1 });
      } else {
        res.json({ value: 0 });
      }
      db.end();
    } catch (error) {
      console.log(error);
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
  
  
  // Metodo para actualizar clasificacion 
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
  
  // Metodo para borrar clasificacion de proveedor 
  
  export const deleteSclasification = async (req, res) => {
    try {
      const db = await connect();
    
      const [rows] = await db.query(
        "DELETE FROM sclasification WHERE idClasification=?",
        [req.params.id]
      );
      if (rows.affectedRows > 0) {
        res.json({ value: 1 });
      } else {
        res.json({ value: 0 });
      }
      db.end();
    } catch (error) {
      console.log(error);
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
  export const updateAddType = async (req, res) => {
    try {
      const db = await connect();
      const [rows] = await db.query(
        "UPDATE adresstype SET aType = ? WHERE idadressType = ?;",
        [
        req.body.aType, 
        req.body.idadressType]
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
  
  // Metodo para borrar tipo de domicilio
  export const deleteAddType = async (req, res) => {
    try {
      const db = await connect();
    
      const [rows] = await db.query(
        "DELETE FROM adresstype WHERE idadressType=?",
        [req.params.id]
      );
      if (rows.affectedRows > 0) {
        res.json({ value: 1 });
      } else {
        res.json({ value: 0 });
      }
      db.end();
    } catch (error) {
      console.log(error);
    }
  };
  
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
    try {
      const db = await connect();
      const [rows] = await db.query("SELECT * FROM sclasification;");
      if (!rows) {
        res.json([]);
      } else {
        res.json(rows);
      }
      db.end();
    } catch (e) {
      console.log(e);
    }
  };
  

  /**
   * It's a function that connects to a database, queries the database, and returns the results of the
   * query.
   * </code>
   * @param req - The request object.
   * @param res - The response object.
   */
  export const getDataAdmin = async (req, res) => {
    try {
      let data;
      const db = await connect();
      let [[rows]] = await db.query(
        "SELECT count(idSupplie) AS Proveedores FROM supplie;"
      );
      data = { ...data, Proveedores: rows.Proveedores };
      [[rows]] = await db.query(
        "SELECT count(idProduct) AS Productos FROM products;"
      );
      data = { ...data, Productos: rows.Productos };
      [[rows]] = await db.query(
        "SELECT count(idContact) AS Contactos FROM contactsupplies;"
      );
      data = { ...data, Contactos: rows.Contactos };
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  };