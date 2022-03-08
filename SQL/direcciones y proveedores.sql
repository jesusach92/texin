SELECT supplie_name, adress_description, adress_country FROM adress_supplie t1
INNER JOIN supplie t2
ON t2.id_supplie = t1.supplie_id_supplie
WHERE t2.supplie_name LIKE "%tel%" 
AND t1.adress_description LIKE "%pue%";