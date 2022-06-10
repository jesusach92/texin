import { connect } from "../database/database";

/**
 * "I want to get all the products that are related to a specific supplier"
 * </code>
 * @param req - the request object
 * @param res - {
 */
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
