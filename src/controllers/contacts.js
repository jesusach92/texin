import { connect } from "../database/database";

export const adressContact = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "SELECT * FROM contactsupplies WHERE FkAdressCont =? ORDER BY contactPrincipal DESC;",
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
      "INSERT INTO contactsupplies (FkAdressCont, nameContact, contactPrincipal, workposition, officeNumber, cellphoneNumber,emailContact, comments) VALUES (?,?,?,?,?,?,?,?);",
      [
        req.body.FkAdressCont,
        req.body.nameContact,
        principalContact,
        req.body.workposition,
        req.body.officeNumber,
        req.body.cellphoneNumber,
        req.body.emailContact,
        req.body.comments,
      ]
    );
    res.json({ insertId: rows.insertId, value: 1 });
  } catch (e) {
    console.log(e);
  }
  db.end();
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
        req.body.idContact,
      ]
    );
    if (rows.affectedRows > 0) {
      res.json({ value: 1 });
    } else {
      res.json({ value: 0 });
    }
    db.end();
  } catch (E) {
    console.log(E);
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
