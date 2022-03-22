import { connect } from '../database/database';

// Listar proveedores con contacto y domicilio principal
export const supplielist = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN adress_supplie t3 JOIN contact_supplies t4 ON t1.idBusinessType_Sup = t2.idbusinessType AND t1.id_supplie = t3.idSupplieAd AND t3.id_adress = t4.id_AdressCont WHERE t3.adress_principal = 1 AND t4.contact_principal =1 ORDER BY t1.id_supplie;");
    res.json(rows);
    db.end()
}
// Listar Productos
export const productlist = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM products t1 JOIN technologies t2 ON t1.idTechnology_Pro = t2.id_technology;");
    res.json(rows)
    db.end()
}
// Obtener Domicilios de Proveedores con contacto principal
export const getsuppliebyid = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("select * from supplie t1 join businesstype t2 join adress_supplie t3 join contact_supplies t4 on t1.idBusinessType_Sup = t2.idbusinessType and t1.id_supplie = t3.idSupplieAd and t3.id_adress = t4.id_AdressCont where t1.id_supplie= ? AND t4.contact_principal =1 ORDER BY t3.adress_principal DESC;",[
        req.params.id]);
    res.json(rows);
    db.end()
}

//Productos por Proveedor
export const getproductsbysupplie = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM supply t1 JOIN products t2 JOIN supplie t3 ON t1.idProduct_spy= t2.id_product  AND t1.idSupplie_spy = t3.id_supplie  WHERE t1.idSupplie_spy = ?;",[
        req.params.id
    ])
    res.json(rows);
    db.end()
}

export const getproductbyid = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM products WHERE id_product = ?",[
        req.params.id]);
    res.json(rows);
    db.end()
}

//Obtener Proveedores del Producto ID
export const getsuppliebyproduct = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM supply t1 JOIN products t2 JOIN supplie t3 JOIN technologies t4 ON t1.idProduct_spy = t2.id_product AND t2.idTechnology_Pro = t4.id_technology AND t1.idSupplie_spy = t3.id_supplie WHERE t1.idProduct_spy = ? ORDER BY t1.delivery_time and t1.price DESC;",[
    req.params.id]);
    res.json(rows);
    db.end()
}

export const addsupplie = async (req, res) => {
    const db= await connect();
        const result = await db.query("INSERT INTO supplie (supplie_name, idBusinessType_Sup) VALUES (? , ?)",[
        req.body.supplie_name,
        req.body.idBusinessType_Sup
    
    ]);
    db.end()
}
export const addproduct = async (req, res) => {
    const db= await connect();
    const [result] = await db.query("INSERT INTO products (productName, description_product, idTechnology_Pro) values(?,?,?)",[
        req.body.productName,
        req.body.description_product,
        req.body.idTechnology_Pro
    ]);
    
    res.json({
        id: result.insertId,
        ...req.body
    });
    db.end()
}

// Para guardar fechas convertir a año, mes + 1 y dia con funciones getfullyear(), getmounth(), getdate(),   
