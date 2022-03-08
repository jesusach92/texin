select supplie_name, productName, description_product, product_line, price, delivery_time 
from supply 
join products 
join supplie 
on supply.supplie_id_supplie='5' 
and supply.Products_id_product = products.id_product 
and id_supplie=supplie_id_supplie order by id_product;