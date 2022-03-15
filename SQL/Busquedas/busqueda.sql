SELECT * FROM supplie t1 
JOIN businesstype t2
JOIN adress_supplie t3
JOIN contact_supplies t4
ON t1.idBusinessType_Sup = t2.idbusinessType
AND t1.id_supplie = t3.idSupplieAd
AND t3.id_adress = t4.id_AdressCont
WHERE t3.adress_principal = 1 AND t4.contact_principal =1 ORDER BY t1.id_supplie;