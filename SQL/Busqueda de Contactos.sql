select * from supplie AS t1
inner join adress_supplie AS t2
inner join contact_supplies AS t3
on t1.id_supplie = t2.idSupplieAd
and t2.id_adress = t3.id_AdressCont order by t1.supplie_name;