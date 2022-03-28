import { connect } from '../database/database';


/* Metodos de los Proveedores*/

// 1.- Listar proveedores con el tipo de negocio y el tipo de proveedor que son
export const supplielist = async (req, res) => {
    const db= await connect();
    const [rows] = await db.query("SELECT * FROM supplie t1 JOIN businesstype t2 JOIN sclasification t3 ON t1.FkBusinessType=t2.idBusinessType AND t1.FkClasification=t3.idClasification ORDER BY sDateUpdate DESC;");
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

    /*15.-Eliminar Contacto de acuerdo a su Id contact*/

export const deleteContact = async(req, res)=>
{
	const db = await connect()
	const [rows]= await db.query("DELETE FROM contactsupplies WHERE idContact=?;",[
        req.params.id
	]) 
    if(rows.affectedRows>0)
    {res.send("Contacto eliminado con exito")}
    else{res.send("No se puede eliminar el contacto")}
    db.end()
}

/*16.-Eliminar Domicilio de acuerdo con su Id de domicilio
*/
export const deleteAdress = async(req, res)=>
{
	const db = await connect()
	const [rows]= await db.query("DELETE FROM adresssupplie WHERE idAdress=?;",[
        req.params.id
	]) 
    if(rows.affectedRows>0)
    {res.send("Domicilio eliminado con exito")}
    else{res.send("No se puede eliminar el contacto")}
    db.end()
}



/*17.-Eliminar Producto asignado al proveedor
*/
export const deleteSupply = async(req, res)=>
{
	const db = await connect()
	const [rows]= await db.query("DELETE FROM supply WHERE idSupply=?;",[
        req.params.id
	]) 
    if(rows.affectedRows>0)
    {res.send("Producto eliminado con exito del proveedor")}
    else{res.send("No se pudo eliminar el producto del proveedor")}
    db.end()
}

//18.-Eliminar Proveedor, eliminar por completo todos los datos relacionados con el proveedor, domicilios, contactos, productos que tenga asignados.
export const deleteSupplie = async(req, res)=>
{
	const db = await connect()
	const [rows]= await db.query("DELETE FROM supplie WHERE idSupplie=?;",[
        req.params.id
	]) 
    if(rows.affectedRows>0)
    {res.send("Proveedor Eliminado con Exito")}
    else{res.send("No se pudo eliminar el proveedor")}
    db.end()
}

//Metodos de Productos

// 1.-Agregar Producto
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

//2.-Editar Producto
export const editProduct = async (req, res)=>{
    const db = await connect()
    const [rows]= await db.query("UPDATE products SET FkTechnologyPro = ?, productName=?, descriptionProduct=? WHERE idProduct=?;",[
        req.body.FkTechnologyPro, 
        req.body.productName, 
        req.body.descriptionProduct, 
        req.body.idProduct  
    ])
    if(rows.affectedRows>0)
	{res.send("La actualizacion fue realizada correctamente")}
	else{res.send("No se realizo la actualizacion")}
	db.end()
}

//3.- Eliminar Producto
export const deleteProduct = async (req, res) =>
{
    const db = await connect()
	const [rows]= await db.query("DELETE FROM products WHERE idProduct=?;",[
        req.params.id
	]) 
    if(rows.affectedRows>0)
    {res.send("Producto Eliminado con Exito")}
    else{res.send("No se pudo eliminar el producto")}
    db.end()
}
/*Metodos Generales de configuracion*/
// Agregar Tipo de Negocio para clasificar
export const addBusinessType = async (req, res) =>
{
    const db = await connect()
    try{
	const [rows]= await db.query("INSERT INTO businesstype (bName, bDescription) VALUES (?,?);",[
        req.body.bName,
        req.body.bDescription
	])
    res.json(rows.insertId)}
    catch (e)
    {console.log(e)}
    db.end()
}
// Metodo para agregar Clasificacion de Productos
export const addTechnology = async (req, res) =>
{
    const db = await connect()
    try{
	const [rows]= await db.query("INSERT INTO technologies (nameTechnology) VALUES (?);",[
        req.body.nameTechnology
	])
    res.json(rows.insertId)}
    catch (e)
    {console.log(e)}
    db.end()
}
// Metodo para agregar Clasificacion de Proveedores

export const addsClasification = async (req, res) =>
{
    const db = await connect()
    try{
	const [rows]= await db.query("INSERT INTO sclasification (clasificationName) VALUES (?);",[
        req.body.clasificationName
	])
    res.json(rows.insertId)}
    catch (e)
    {console.log(e)}
    db.end()
}

//Metodo para agregar Tipos de Domicilio
export const addaType= async (req, res) =>
{
    const db = await connect()
    try{
	const [rows]= await db.query("INSERT INTO adresstype (aType) VALUES (?);",[
        req.body.aType
	])
    res.json(rows.insertId)}
    catch (e)
    {console.log(e)}
    db.end()
}


// Para guardar fechas convertir a año, mes + 1 y dia con funciones getfullyear(), getmounth(), getdate(),   
