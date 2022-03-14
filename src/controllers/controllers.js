import { connect } from '../database/database';

export const supplielist = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN adress_supplie t3 JOIN contact_supplies t4 ON t1.idBusinessType_Sup = t2.idbusinessType AND t1.id_supplie = t3.idSupplieAd AND t3.id_adress = t4.id_AdressCont WHERE t3.adress_principal = 1 AND t4.contact_principal =1 ORDER BY t1.id_supplie;");
    res.json(rows);
}

export const productlist = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM products t1 JOIN technologies t2 ON t1.idTechnology_Pro = t2.id_technology;");
    res.json(rows);
}

export const getsuppliebyid = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM supplie WHERE id_supplie = ?",[
        req.params.id]);
    res.json(rows);
}

export const getproductsbysupplie = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT supplie_name,productName,price,delivery_time,comments FROM supplies.supply inner join products inner join supplie on idProduct_spy= id_product and idSupplie_spy = id_supplie where supply.idSupplie_spy = ?;",[
        req.params.id
    ])
    res.json(rows);
}

export const getproductbyid = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM products WHERE id_product = ?",[
        req.params.id]);
    res.json(rows);
}

export const getsuppliebyproduct = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT id_supplie, supplie_name, productName, delivery_time, price, product_line FROM supply inner join supplie inner join products on idSupplie_spy = id_supplie and idProduct_spy = id_product where idProduct_spy = ?;",[
    req.params.id]);
    res.json(rows);
}


export const addsupplie = async (req, res) => {
    const db= await connect();
    const result = await db.query("INSERT INTO supplie (supplie_name, idBusinessType_Sup) VALUES (? , ?)",[
        req.body.supplie_name,
        req.body.idBusinessType_Sup
    ]);
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
}