SELECT productName, supplie_name, supplie_id_supplie, price, delivery_time, product_line FROM supply t1
INNER JOIN supplie t2
INNER JOIN products t3
ON t1.Products_id_product='5'
AND t2.id_supplie = t1.supplie_id_supplie
AND t3.id_product = t1.Products_id_product
order by supplie_id_supplie;