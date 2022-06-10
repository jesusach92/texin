import { connect } from "../database/database";

// Metodo para Listar Usuarios con Id, Nombre de Usuario, Rol de Usuario y Nombre de Persona
export const getListUsers = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "SELECT idUsers, nameUser, namePerson,FkRole ,idRole, nameRole, privileges FROM users inner join role on FkRole= idRole;"
    );
    res.json(rows);
    db.end();
  } catch (error) {}
};

// Metodo de Borrado de Usuarios
export const deleteUSer = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query("DELETE FROM users WHERE idUsers=?", [
      req.params.id,
    ]);
    rows.affectedRows > 0 ? res.json({ value: 1 }) : res.json({ value: 0 });
  } catch (error) {}
};

// Metodo para obtener Roles de Usuario
export const getRoleUser = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query("select * from role;");
    res.json(rows);
  } catch (error) {}
};

//Agregar Usuario
export const addUser = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM users WHERE nameUser =?;", [
      req.body.nameUser,
    ]);
    if (rows.length > 0) {
      res.json({
        value: 1,
        message: "El Nombre de Usuario ya esta registrado",
      });
    } else {
      const result = await db.query(
        "INSERT INTO users (FkRole,nameUser,passwordUser,namePerson) values (?,?,md5(?),?);",
        [
          req.body.FkRole,
          req.body.nameUser,
          req.body.passwordUser,
          req.body.namePerson,
        ]
      );
      if(result.affectedRows !== 0)
      {
        res.json({value:1, message:"Usuario registrado exitosamente"})
      }
      else{
        res.json({value:0, message:"error de registro"})
      }
    }
    db.end();
  } catch (error) {
    console.log(error)
  }
};

// Actualizar Usuario
export const updateUser = async( req, res) =>{
  try {
    const db= await connect();
    const [rows] = await db.query("UPDATE users set FkRole=?, nameUser=?,passwordUser=md5(?) , namePerson=? WHERE idUsers=?;",[
      req.body.FkRole,
      req.body.nameUser,
      req.body.passwordUser,
      req.body.namePerson,
      req.body.idUsers

    ])
    rows.affectedRows > 0 ? res.json({value:1}): res.json({value:0})
  } catch (error) {
    console.log(error)
  }
}