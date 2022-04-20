import res from "express/lib/response";
import { connect } from "../database/database";

// Metodo para Registrar un Usuario
export const userRegister = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "SELECT * FROM users WHERE nameUSer = BINARY ?",
      [req.body.nameUser]
    );
    if (rows.length > 0) {
      res.json({ value: 2 });
    } else {
      const result = await db.query(
        "INSERT INTO users (nameUser, passwordUser, namePerson) VALUES (?,MD5(?), ?);",
        [req.body.nameUser, req.body.passwordUser, req.body.namePerson]
      );
      res.json({ value: 1, id: result.rows });
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};

//Metodo para Buscar un Usuario
export const serchUser = async (req, res) => {
    
}
