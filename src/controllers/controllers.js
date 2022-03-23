import req from 'express/lib/request';
import res from 'express/lib/response';
import { connect } from '../database/database';


/* Metodos de los Proveedores
1.-Listar proveedores con contacto y domicilio principal

2.-Obtener Proveedor por Id
3.-Obtener el Domicilio principal
4.-Obtener los domicilios del proveedor
5.-Obtener los contactos del domicilio 
6.-Obtener todos los contactos del proveedor
7.-Obtener todos los productos que el proveedor tiene registrados

8.-Agregar Proveedor
9.-Agregar Domicilio a proveedor
10.-Agregar Contacto a Domicilio de Proveedor
11.-Agregar Producto a Proveedor: creando un nuevo producto para el proveedor
12.-Asignar Producto a Proveedor: siempre y cuando el producto ya exista

13.-Editar Domicilio
14.-Editar Contacto
15.-Editar Proveedor
16.-Editar Relacion Proveedor Producto

17.-Eliminar Contacto, si es contacto principal lanzar advertencia y asignar un nuevo contacto principal antes de borrar el anterior
Si no existe ningún otro contacto lanzar advertencia que se eliminara el domicilio, si no existe ningún otro domicilio lanzar advertencia
que se eliminara el contacto y todos los productos que tenga asignados, dar opción de agregar nuevo contacto al domicilio y opción si es 
el único domicilio agregar nuevo domicilio.

18.-Eliminar Domicilio, si es el domicilio principal lanzar advertencia y asignar nuevo domicilio principal antes de borrar el anterior
si no existe ninguno otro domicilio lanzar advertencia que se eliminara el proveedor y todos los productos asignados a el, 
dar opción de agregar domicilio.

19.-Eliminar Producto, elimina la relación del proveedor con el producto si no hay más productos del proveedor se lanza advertencia que un 
proveedor siempre debe tener un producto asignado de lo contrario se eliminara el proveedor, dar opción de agregar o asignar nuevo producto

20.-Eliminar Proveedor, eliminar por completo todos los datos relacionados con el proveedor, domicilios, contactos, productos que tenga asignados.
*/

// 1.- Listar proveedores con contacto y domicilio principal
export const supplielist = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN adress_supplie t3 JOIN contact_supplies t4 ON t1.idBusinessType_Sup = t2.idbusinessType AND t1.id_supplie = t3.idSupplieAd AND t3.id_adress = t4.id_AdressCont WHERE t3.adress_principal = 1 AND t4.contact_principal =1 ORDER BY t1.id_supplie;");
    res.json(rows);
    db.end()
}

// 2.-Obtener Proveedor por Id

export const supplieById = async (req, res) =>{
    const db = await connect()
    const [rows] = await db.query("SELECT * FROM supplie t1 JOIN businesstype t2 ON  t1.idBusinessType_Sup = t2.idbusinessType WHERE t1.id_supplie= ?;",[
        req.params.id
    ])
    res.json(rows)
    db.end()
}

//3.-Obtener el Domicilio principal

export const suppliPrincipalAdress = async (req, res) =>
{
    const db = await connect()
    const [rows] = await db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN adress_supplie t3 ON t1.idBusinessType_Sup = t2.idbusinessType AND t1.id_supplie = t3.idSupplieAd WHERE t3.adress_principal=1 AND t1.id_supplie= ?;",[
        req.params.id
    ])
    res.json(rows)
    db.end()
}

//4.-Obtener los domicilios del proveedor

export const supplieFullAdress = async (req, res)=>
{
    const db=await connect()
    const [rows]= await db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN adress_supplie t3 ON t1.idBusinessType_Sup = t2.idbusinessType AND t1.id_supplie = t3.idSupplieAd WHERE t1.id_supplie= ?;",[
        req.params.id
    ])
    res.json(rows)
    db.end()
}

//5.-Obtener los contactos del domicilio 

export const adressContact = async (req, res)=>
{
    const db=await connect()
    const [rows] = await db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN adress_supplie t3 JOIN contact_supplies t4 ON t1.idBusinessType_Sup = t2.idbusinessType AND t1.id_supplie = t3.idSupplieAd AND t3.id_adress = t4.id_AdressCont WHERE t3.id_adress = ? ORDER BY t4.contact_principal DESC;",[
        req.params.id
    ])
    res.json(rows)
    db.end()
}

//6.-Obtener todos los contactos del proveedor

export const supplieContacts = async (req, res)=>
{
    const db= await connect()
    const [rows]= await db.query("SELECT * FROM supplie t1 JOIN adress_supplie t2 JOIN contact_supplies t3 ON t1.id_supplie = t2.idSupplieAd AND t2.id_adress = t3.id_AdressCont WHERE t1.id_supplie =?;",[
        req.params.id
    ])
    res.json(rows)
    db.end()
}

//7.-Obtener todos los productos que el proveedor tiene registrados

export const supplieProducts = async (req, res) =>
{
    const db= await connect()
    const [rows] = await db.query("SELECT * FROM supplie t1 JOIN supply t2 JOIN products t3 JOIN technologies t4 ON t1.id_supplie = t2.idSupplie_spy AND t2.idProduct_spy = t3.id_product AND t3.idTechnology_Pro = t4.id_technology WHERE t1.id_supplie=?;",[
        req.params.id
    ])
    res.json(rows)
    db.end()
}

//8.-Agregar Proveedor

export const addSupplie = async (req, res) =>
{
    const db = await connect()
    const [rows]=await db.query("INSERT INTO supplie (supplie_name, idBusinessType_Sup) VALUES (?, ?);",[
        req.body.supplie_name,
        req.body.idBusinessType_Sup
    ])
    res.json(rows.insertId)
    db.end()
}

//9.-Agregar Domicilio a proveedor

export const addAdress = async (req, res) =>
{
    const db= await connect()
    const [rows]= await db.query()
}

//10.-Agregar Contacto a Domicilio de Proveedor
//11.-Agregar Producto a Proveedor: creando un nuevo producto para el proveedor
//12.-Asignar Producto a Proveedor: siempre y cuando el producto ya exista

//13.-Editar Domicilio
//14.-Editar Contacto
//15.-Editar Proveedor
//16.-Editar Relacion Proveedor Producto

/*17.-Eliminar Contacto, si es contacto principal lanzar advertencia y asignar un nuevo contacto principal antes de borrar el anterior
Si no existe ningún otro contacto lanzar advertencia que se eliminara el domicilio, si no existe ningún otro domicilio lanzar advertencia
que se eliminara el contacto y todos los productos que tenga asignados, dar opción de agregar nuevo contacto al domicilio y opción si es 
el único domicilio agregar nuevo domicilio.
*/

/*18.-Eliminar Domicilio, si es el domicilio principal lanzar advertencia y asignar nuevo domicilio principal antes de borrar el anterior
si no existe ninguno otro domicilio lanzar advertencia que se eliminara el proveedor y todos los productos asignados a el, 
dar opción de agregar domicilio.
*/
/*19.-Eliminar Producto, elimina la relación del proveedor con el producto si no hay más productos del proveedor se lanza advertencia que un 
proveedor siempre debe tener un producto asignado de lo contrario se eliminara el proveedor, dar opción de agregar o asignar nuevo producto
*/

//20.-Eliminar Proveedor, eliminar por completo todos los datos relacionados con el proveedor, domicilios, contactos, productos que tenga asignados.




/*
Metodos de Productos


*/

/*
Metodos Generales de configuracion

*/



// Para guardar fechas convertir a año, mes + 1 y dia con funciones getfullyear(), getmounth(), getdate(),   
