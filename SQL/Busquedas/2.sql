SELECT id_supplie,supplie_name,id_adress,adress_description,adress_country,adress_zipcode,adress_principal,id_contact,name_contact,workposition,office_number,cellphone_number,contact_email,contact_principal FROM supplies.supplie t1 JOIN adress_supplie t2 JOIN contact_supplies t3 ON t1.id_supplie = t2.idSupplieAd AND t2.id_adress = t3.id_AdressCont WHERE t1.id_supplie=2 AND t3.contact_principal=1 ORDER BY t2.adress_principal DESC;