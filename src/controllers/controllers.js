import { connect } from '../database/database';


/* Metodos de los Proveedores
1.-Listar proveedores con tipo de negocio y tipo de proveedor

2.-Obtener Proveedor por Id
3.-Obtener los domicilios del proveedor
4.-Obtener los contactos del domicilio 
5.-Obtener todos los contactos del proveedor
6.-Obtener todos los productos que el proveedor tiene registrados

7.-Agregar Proveedor
8.-Agregar Domicilio a proveedor
9.-Agregar Contacto a Domicilio de Proveedor
10.-Asignar Producto a Proveedor: siempre y cuando el producto ya exista

11.-Editar Domicilio
12.-Editar Contacto
13.-Editar Proveedor
14.-Editar Relacion Proveedor Producto

15.-Eliminar Contacto, si es contacto principal lanzar advertencia y asignar un nuevo contacto principal antes de borrar el anterior
Si no existe ningún otro contacto lanzar advertencia que se eliminara el domicilio, si no existe ningún otro domicilio lanzar advertencia
que se eliminara el contacto y todos los productos que tenga asignados, dar opción de agregar nuevo contacto al domicilio y opción si es 
el único domicilio agregar nuevo domicilio.

16.-Eliminar Domicilio, si es el domicilio principal lanzar advertencia y asignar nuevo domicilio principal antes de borrar el anterior
si no existe ninguno otro domicilio lanzar advertencia que se eliminara el proveedor y todos los productos asignados a el, 
dar opción de agregar domicilio.

17.-Eliminar Producto, elimina la relación del proveedor con el producto si no hay más productos del proveedor se lanza advertencia que un 
proveedor siempre debe tener un producto asignado de lo contrario se eliminara el proveedor, dar opción de agregar o asignar nuevo producto

18.-Eliminar Proveedor, eliminar por completo todos los datos relacionados con el proveedor, domicilios, contactos, productos que tenga asignados.
*/

// 1.- Listar proveedores con el tipo de negocio y el tipo de proveedor que son
export const supplielist = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN sclasification t3 ON t1.FkBusinessType=t2.idBusinessType AND t1.FkClasification=t3.idClasification;");
    if(!rows)
    {res.send("No hay proveedores Registrados")}
    else{res.json(rows)}
    db.end()
}

// 2.-Obtener Proveedor por Id

export const supplieById = async (req, res) =>{
    const db = await connect()
    const [rows] = await db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN sclasification t3 ON t1.FkBusinessType = t2.idBusinessType AND t1.FkClasification = t3.idClasification WHERE t1.idSupplie= ?;",[
        req.params.id
    ])
    if(!rows.length)res.send("No existe el proveedor con ese ID")
    else res.json(rows)
    db.end()
}


//3.-Obtener los domicilios del proveedor

export const supplieFullAdress = async (req, res)=>
{
    const db=await connect()
    const [rows]= await db.query("SELECT * FROM adresssupplie t1 JOIN adresstype t2 ON t1.FkadressType = t2.idadressType WHERE t1.FkSupplieAd =?;",[
        req.params.id
    ])
    if(!rows.length)
    {res.send("El proveedor no cuenta con domicilios registrados registrar uno")}
    else{res.json(rows)}
    db.end()
}

//4.-Obtener los contactos del domicilio 

export const adressContact = async (req, res)=>
{
    const db=await connect()
    const [rows] = await db.query("SELECT * FROM adresssupplie t1 JOIN adresstype t2 JOIN contactsupplies t3 ON t1.FkadressType = t2.idadressType AND t1.idAdress = t3.FkAdressCont WHERE t1.idAdress = ? ORDER BY t3.contactPrincipal DESC;",[
        req.params.id
    ])
    if(!rows.length)
    {res.send("El Domicilio no cuenta con contactos registrados registrar uno")}
    else{res.json(rows)}
    db.end()
}

//5.-Obtener todos los contactos del proveedor

export const supplieContacts = async (req, res)=>
{
    const db= await connect()
    const [rows]= await db.query("SELECT * FROM supplie t1 JOIN adresssupplie t2 JOIN adresstype t3 JOIN contactsupplies t4 ON t1.idSupplie = t2.FkSupplieAd AND t2.FkadressType = t3.idadressType AND t2.idAdress = t4.FkAdressCont WHERE idSupplie =? ORDER BY t4.contactPrincipal DESC;",[
        req.params.id
    ])
    if(!rows.length)
    {res.send("El Proveedor no cuenta con contactos registrados registrar uno")}
    else{res.json(rows)}
    db.end()
}

//6.-Obtener todos los productos que el proveedor tiene registrados

export const supplieProducts = async (req, res) =>
{
    const db= await connect()
    const [rows] = await db.query("SELECT * FROM supply t1 JOIN products t2 JOIN technologies t3 ON t1.FkProductSpy = t2.idProduct AND t2.FkTechnologyPro = t3.idTechnology WHERE t1.FkSupplieSpy=?;",[
        req.params.id
    ])
	 if(!rows.length)
	 {res.send("El proveedor no tiene productos Asignados")}
	 else{res.json(rows)}
    db.end()
}

//7.-Agregar Proveedor

export const addSupplie = async (req, res) =>
{
	const db = await connect()
	try{
    const [rows]=await db.query("INSERT INTO supplie (nameSupplie, FkBusinessType, FkClasification, sDateInitial, sDateUpdate) VALUES (?, ?, ?, ?, ?); ",[
        req.body.nameSupplie,
        req.body.FkBusinessType, 
        req.body.FkClasification, 
        req.body.sDateInitial, 
        req.body.sDateUpdate
    ])
    res.json(rows.insertId)
   }
	catch (e){
		res.json("El Nombre del Proveedor ya se encuentra registrado")
	}
	 db.end()
}

//8.-Agregar Domicilio a proveedor

export const addAdress = async (req, res) =>
{
    const db= await connect()
    let principalAdress = 0;
    const [principal] = await db.query("SELECT * FROM adresssupplie WHERE FkSupplieAd=? AND adressPrincipal=1;",[
        req.body.FkSupplieAd
    ])
    if(!principal.length)
    {principalAdress=1}
    else{principalAdress=0}
    const [rows]= await db.query("INSERT INTO adresssupplie (FkSupplieAd, FkadressType, adressPrincipal, adressCountry, adressState, adressDescription, aComments) VALUES (?,?,?,?,?,?,?);",[
        
        req.body.FkSupplieAd,
        req.body.FkadressType,
        principalAdress,
        req.body.adressCountry,
        req.body.adressState,
        req.body.adressDescription,
        req.body.aComments

    ])
    res.json(rows.insertId)
    db.end()
}

//9.-Agregar Contacto a Domicilio de Proveedor
export const addContact = async (req, res) =>
{
    const db= await connect()
    let principalContact =0;
    const [principal] = await db.query("SELECT * FROM contactsupplies WHERE FkAdressCont = ? AND contactPrincipal=1;",[
        req.body.FkAdressCont
    ])
    if(!principal.length)
    {principalContact=1}
    else{principalContact=0}
    const [rows] = await db.query("INSERT INTO contactsupplies (FkAdressCont, nameContact, contactPrincipal, workposition, officeNumber, cellphoneNumber, comments) VALUES (?,?,?,?,?,?,?);",[
        req.body.FkAdressCont, 
        req.body.nameContact, 
        principalContact, 
        req.body.workposition, 
        req.body.officeNumber, 
        req.body.cellphoneNumber, 
        req.body.comments
    ])  
    res.json(rows.insertId)
    db.end()
}

//10.-Asignar Producto a Proveedor: siempre y cuando el producto ya exista

export const AsingProductSupplie = async (req, res) =>
{
    const db= await connect()
	 let [rows] =[]
    const [Asing]= await db.query("SELECT * FROM supply WHERE FkSupplieSpy=? AND FkProductSpy =?;",[
        req.body.FkSupplieSpy,
        req.body.FkProductSpy
    ])
    if(!Asing.length){
		[rows]= await db.query("INSERT INTO supply (FkSupplieSpy, FkProductSpy, price, deliveryTime, productLine, comments, pDateInitial, pDateUpdate, pSampleF, pSampleLocation) VALUES (?,?,?,?,?,?,?,?,?,?);",[
			req.body.FkSupplieSpy, 
			req.body.FkProductSpy, 
			req.body.price, 
			req.body.deliveryTime, 
			req.body.productLine, 
			req.body.comments, 
			req.body.pDateInitial, 
			req.body.pDateUpdate, 
			req.body.pSampleF, 
			req.body.pSampleLocation
			
		])
		res.json(rows.insertId)
    }
    else{res.send("Lo siento este producto ya está asignado al proveedor si quieres modificarlo presiona la opcion editar")}
    db.end()
}


//11.-Editar Domicilio

export const EditAdress = async (req, res)=>
{
	const db = await connect()
	const [rows] = await db.query("UPDATE adresssupplie  INNER JOIN supplie ON FkSupplieAd = idSupplie SET adressPrincipal = ?, adressDescription = ?, aComments=?, sDateUpdate=? WHERE idAdress= ?;",[
		req.body.adressPrincipal,
		req.body.adressDescription,
		req.body.aComments,
		req.body.sDateUpdate,
		req.body.idAdress
		
	])
	if(rows.affectedRows>0)
	{res.send("La actualizacion fue realizada correctamente")}
	else{res.send("No se realizo la actualizacion")}
	db.end()
}

//12.-Editar Contacto
export const EditContact = async (req, res)=>
{
	const db = await connect()
	const [rows] = await db.query("UPDATE contactsupplies INNER JOIN adresssupplie INNER JOIN supplie ON FkAdressCont = idAdress AND FkSupplieAd = idSupplie SET contactPrincipal =?, workposition =?, officeNumber=?, cellphoneNumber=?, comments=?, sDateUpdate=? WHERE idContact=?;",[
		req.body.contactPrincipal, 
		req.body.workposition, 
		req.body.officeNumber, 
		req.body.cellphoneNumber, 
		req.body.comments, 
		req.body.sDateUpdate, 
		req.body.idContact
	])
	if(rows.affectedRows>0)
	{res.send("La actualizacion fue realizada correctamente")}
	else{res.send("No se realizo la actualizacion")}
	db.end()
}


//13.-Editar Proveedor

export const EditSupplie = async (req, res)=>
{
	const db = await connect()
	const [rows] = await db.query("UPDATE supplie SET nameSupplie =?, FKBusinessType =?, FkClasification=?,sDateUpdate =?WHERE idSupplie =?;",[
		req.body.nameSupplie,
		req.body.FKBusinessType, 
		req.body.FkClasification,
		req.body.sDateUpdate,
		req.body.idSupplie
	])
	if(rows.affectedRows>0)
	{res.send("La actualizacion fue realizada correctamente")}
	else{res.send("No se realizo la actualizacion")}
	db.end()
}

//14.-Editar Relacion Proveedor Producto

export const EditSupply = async (req, res)=>
{
	const db = await connect()
	const [rows] = await db.query("UPDATE supply SET price = ?,deliveryTime =?,productLine =?, comments =?,pDateUpdate =?,pSampleF=?,pSampleLocation=? WHERE idSupply=?;",[
	req.body.price,
	req.body.deliveryTime,
	req.body.productLine, 
	req.body.comments,
	req.body.pDateUpdate,
	req.body.pSampleF,
	req.body.pSampleLocation,
	req.body.idSupply

	])
	if(rows.affectedRows>0)
	{res.send("La actualizacion fue realizada correctamente")}
	else{res.send("No se realizo la actualizacion")}
	db.end()
}

/*15.-Eliminar Contacto, si es contacto principal lanzar advertencia y asignar un nuevo contacto principal antes de borrar el anterior
Si no existe ningún otro contacto lanzar advertencia que se eliminara el domicilio, si no existe ningún otro domicilio lanzar advertencia
que se eliminara el contacto y todos los productos que tenga asignados, dar opción de agregar nuevo contacto al domicilio y opción si es 
el único domicilio agregar nuevo domicilio.
*/

export const deleteContact = async(req, res)=>
{
	const db = await connect()
	const [principal]= await db.query("",[

	]) 

}

/*16.-Eliminar Domicilio, si es el domicilio principal lanzar advertencia y asignar nuevo domicilio principal antes de borrar el anterior
si no existe ninguno otro domicilio lanzar advertencia que se eliminara el proveedor y todos los productos asignados a el, 
dar opción de agregar domicilio.
*/


/*17.-Eliminar Producto, elimina la relación del proveedor con el producto si no hay más productos del proveedor se lanza advertencia que un 
proveedor siempre debe tener un producto asignado de lo contrario se eliminara el proveedor, dar opción de agregar o asignar nuevo producto
*/

//18.-Eliminar Proveedor, eliminar por completo todos los datos relacionados con el proveedor, domicilios, contactos, productos que tenga asignados.




/*
Metodos de Productos

1.- Agregar Producto 
2.- Asignar Producto
3.- Editar Producto
4.- Eliminar Producto

*/

export const addProduct = async (req, res)=>
{
    const db = await connect()
    const [rows] = await db.query("INSERT INTO products (FkTechnologyPro, productName, descriptionProduct) VALUES (?, ?, ?);",[
        req.body.FkTechnologyPro, 
        req.body.productName, 
        req.body.descriptionProduct

    ])
    res.json(rows.insertId)
    db.end()
} 


/*
Metodos Generales de configuracion

*/



// Para guardar fechas convertir a año, mes + 1 y dia con funciones getfullyear(), getmounth(), getdate(),   
