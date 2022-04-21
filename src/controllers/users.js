import md5 from "md5";
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
  try {
    const db = await connect();
    const [[rows]] = await db.query(
      "SELECT idUsers FROM users WHERE nameUser = ?;",
      [req.body.nameUser, req.body.passwordUser]
    );
    if (rows) {
      const [[user]] = await db.query("SELECT * FROM users WHERE idUsers = ?", [
        rows.idUsers,
      ]);
      console.log(md5(req.body.passwordUser));
      console.log(user.passwordUser);
      md5(req.body.passwordUser) === user.passwordUser
        ? res
            .status(200)
            .json({
              message: "Acceso concedido",
              user: {
                id: user.idUsers,
                nameUser: user.nameUser,
                namePerson:user.namePerson,
                roleUser:user.FkRole
              },
            })
        : res.status(404).send("Contraseña Incorrecta");
    } else {
      res.status(401).send("Usuario no Encontrado");
    }
    db.end();
  } catch (e) {
    console.log(e);
  }
};
