import md5 from "md5";
import { connect } from "../database/database";


//Metodo para Buscar un Usuario
export const serchUser = async (req, res) => {
    try {
      const db = await connect();
      const [[rows]] = await db.query(
        "SELECT idUsers FROM users WHERE nameUser = BINARY ?;",
        [req.body.nameUser]
      );
      if (rows) {
        const [[user]] = await db.query("SELECT * FROM users WHERE idUsers = ?", [
          encodeURI(rows.idUsers),
        ]);
        md5(req.body.passwordUser) === user.passwordUser
          ? res.status(200).json({
              message: "Acceso concedido",
              user: {
                idUsers: user.idUsers,
                nameUser: user.nameUser,
                namePerson: user.namePerson,
                FkRole: user.FkRole,
                tokenUser: "1234dcsdfs",
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
  