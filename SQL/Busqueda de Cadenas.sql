select * from products t1
inner join technologies t2
on t2.id_technology = t1.technologies_id_technology
where t1.description_product like '%hil%' or t1.productName like '%tel%';