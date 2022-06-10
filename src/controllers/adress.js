import { connect } from "../database/database";
import { UpdateSup } from "../controllers/supplies";

//1.-Obtener los domicilios del proveedor
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
//2.-Agregar Domicilio a proveedor
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
//3.-Editar Domicilio
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
/*4.-Eliminar Domicilio de acuerdo con su Id de domicilio
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
