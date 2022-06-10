import { connect } from "../database/database";

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
  
  