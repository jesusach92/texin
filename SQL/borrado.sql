delete t1 from supplies.supplie t1
inner join supplies.supplie t2
where t1.id_supplie > t2.id_supplie and t1.supplie_name = t1.supplie_name;