select productName, description_product,supplie_name,product_line,delivery_time,price, comments from products
inner join supply
inner join supplie
on products.id_product = supply.idProduct_spy
and supply.idSupplie_spy = supplie.id_supplie 
where products.productName Like "%Boton Inverso%" order by price;