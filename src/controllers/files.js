import multer from "multer";
import path from "path";
import fs from "fs";
import { connect } from "../database/database";

const directory = (supplie) => {
	const pathFiles = path.join(__dirname, `catalogs/${supplie}`);
	if (fs.existsSync(pathFiles)) {
		return pathFiles;
	} else {
		fs.mkdir(pathFiles, (err) => {
			if (err) {
				return console.log(err);
			}
			console.log("satisfactory");
		});
		return pathFiles;
	}
};
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const { supplie } = req.body;
		const directoryFile = directory(supplie);
		cb(null, `${directoryFile}`);
	},
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});
export const uploadFile = multer({
	storage,
	fileFilter: (req, file, cb) => {
		if (!file.originalname.match(/\.(pdf|doc|docx|jpg)$/)) {
			return cb(new Error("Error en el tipo de archivo"));
		}
		cb(null, true);
	},
});

export const fileUp = async (req, res) => {
		try {
				const db = await connect();
				const [,pathFile] = req.file.path.split("catalogs")
				console.log(pathFile);
				const {rows} = await db.query("UPDATE supplie set catalog=? where idSupplie=?",[
						pathFile,
						req.body.supplie
				]) 
res.status(200).json({ message: "Catalogo Guardado correctamente" });
		} catch (error) {
				console.log(error)
				res.status(400).send("Error")
		}
};

export const getFile = async (req, res) => {
	const [,supplie,pathFile] = req.url.split("%5C")
	res
		.status(200)
		.download(__dirname + `/catalogs/${supplie}/${pathFile}`);
};
