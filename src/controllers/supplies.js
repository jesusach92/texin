import { connect } from "../database/database";

export async function UpdateSup(Id, db) {
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
export const date = () => {
	let fulldate = new Date();
	let date = `${fulldate.getFullYear()}-${
		fulldate.getMonth() + 1
	}-${fulldate.getDate()}`;
	return date;
};
/* Metodos de los Proveedores*/

// 1.- Listar proveedores con el tipo de negocio y el tipo de proveedor que son
export const supplielist = async (req, res) => {
	try {
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
	} catch (error) {
		console.log(error);
	}
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

//3.-Agregar Proveedor
export const addSupplie = async (req, res) => {
	try {
		const db = await connect();
		const[[[{idSupplie}]]]= await db.query(
			"Call InSupplie(?,?,?,?,?,?,?,?,?,?,?);",
			[
				req.body.nameSupplie,
				req.body.FkBusinessType,
				req.body.FkClasification,
				date(),
				date(),
				req.body.emailSupplie,
				req.body.contactPhone,
				req.body.userRegister,
				req.body.userUpdate,
				req.body.webPage,
				req.body.catalog
			]
		);
		res.json({ idSupplie, value: 1 });
		db.end();
	} catch (e) {
		console.log(e);
		res.json({ value: 0 });
	}
};

//4.-Editar Proveedor
export const EditSupplie = async (req, res) => {
	try {
		const db = await connect();
		const [[[rows]]] = await db.query(
			"Call updateSupplie(?,?,?,?,?,?,?,?,?);",
			[
				req.body.idSupplie,
				req.body.nameSupplie,
				req.body.FkBusinessType,
				req.body.FkClasification,
				date(),
				req.body.emailSupplie,
				req.body.contactPhone,
				req.body.userUpdate,
				req.body.webPage,
			]
		);
		if (rows?.message) {
			res.json({
				value: 1,
				message: "La actualizacion fue realizada correctamente",
			});
		} else {
			res.json({ value: 0, messaje: "No se realizo la actualizacion" });
		}
		db.end();
	} catch (e) {
		console.log(e);
	}
};

//5.-Eliminar Proveedor, eliminar por completo todos los datos relacionados con el proveedor, domicilios, contactos, productos que tenga asignados.
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

