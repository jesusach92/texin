-- MySQL Script generated by MySQL Workbench
-- Fri Mar 25 14:00:45 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema supplies
-- -----------------------------------------------------
-- 
-- 
DROP SCHEMA IF EXISTS `supplies` ;

-- -----------------------------------------------------
-- Schema supplies
--
-- 
-- 
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `supplies` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema supplies1.0
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `supplies1.0` ;

-- -----------------------------------------------------
-- Schema supplies1.0
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `supplies1.0` DEFAULT CHARACTER SET utf8 ;
USE `supplies` ;

-- -----------------------------------------------------
-- Table `supplies`.`businessType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies`.`businessType` (
  `idBusinessType` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nameBusiness` VARCHAR(30) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `descriptionBusiness` TEXT(300) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  PRIMARY KEY (`idBusinessType`),
  UNIQUE INDEX `idbussinesType_UNIQUE` (`idBusinessType` ASC) VISIBLE,
  UNIQUE INDEX `nameBussines_UNIQUE` (`nameBusiness` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `supplies`.`supplie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies`.`supplie` (
  `idSupplie` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nameSupplie` VARCHAR(50) NOT NULL,
  `idBusinessType` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idSupplie`),
  INDEX `fk_supplie_businessType1_idx` (`idBusinessType` ASC) VISIBLE,
  UNIQUE INDEX `supplie_name_UNIQUE` (`nameSupplie` ASC) VISIBLE,
  UNIQUE INDEX `id_supplie_UNIQUE` (`idSupplie` ASC) VISIBLE,
  CONSTRAINT `fk_supplie_businessType1`
    FOREIGN KEY (`idBusinessType`)
    REFERENCES `supplies`.`businessType` (`idBusinessType`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `supplies`.`aType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies`.`aType` (
  `idaType` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `adressType` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idaType`),
  UNIQUE INDEX `idaType_UNIQUE` (`idaType` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `supplies`.`adressSupplie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies`.`adressSupplie` (
  `idAdress` INT NOT NULL AUTO_INCREMENT,
  `FkSupplieAd` INT UNSIGNED NOT NULL,
  `FkAType` INT UNSIGNED NOT NULL,
  `adressPrincipal` BIT(1) NOT NULL DEFAULT 0,
  `adressDescription` TEXT(500) NOT NULL,
  `adressCountry` VARCHAR(50) NOT NULL,
  `adressZipcode` VARCHAR(10) NULL,
  `adressState` VARCHAR(50) NULL,
  PRIMARY KEY (`idAdress`),
  INDEX `fk_adress_supplie_supplie_idx` (`FkSupplieAd` ASC) VISIBLE,
  INDEX `fk_adressSupplie_aType1_idx` (`FkAType` ASC) VISIBLE,
  CONSTRAINT `fk_adress_supplie_supplie`
    FOREIGN KEY (`FkSupplieAd`)
    REFERENCES `supplies`.`supplie` (`idSupplie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_adressSupplie_aType1`
    FOREIGN KEY (`FkAType`)
    REFERENCES `supplies`.`aType` (`idaType`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `supplies`.`contactSupplies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies`.`contactSupplies` (
  `idContact` INT NOT NULL AUTO_INCREMENT,
  `FkAdressCont` INT NOT NULL,
  `nameContact` VARCHAR(45) NOT NULL,
  `contactPrincipal` BIT(1) NOT NULL DEFAULT 0,
  `workposition` VARCHAR(45) NOT NULL,
  `officeNumber` VARCHAR(10) NOT NULL,
  `cellphoneNumber` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`idContact`),
  INDEX `fk_contact_supplies_adress_supplie1_idx` (`FkAdressCont` ASC) VISIBLE,
  UNIQUE INDEX `id_contact_UNIQUE` (`idContact` ASC) VISIBLE,
  CONSTRAINT `fk_contact_supplies_adress_supplie1`
    FOREIGN KEY (`FkAdressCont`)
    REFERENCES `supplies`.`adressSupplie` (`idAdress`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `supplies`.`technologies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies`.`technologies` (
  `idTechnology` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nameTechnology` VARCHAR(50) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  UNIQUE INDEX `id_technologies_UNIQUE` (`idTechnology` ASC) VISIBLE,
  PRIMARY KEY (`idTechnology`),
  UNIQUE INDEX `nameTechnology_UNIQUE` (`nameTechnology` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `supplies`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies`.`Products` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `descriptionProduct` TEXT(300) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `FkTechnologyPro` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idProduct`),
  INDEX `fk_Products_technologies1_idx` (`FkTechnologyPro` ASC) VISIBLE,
  UNIQUE INDEX `id_product_UNIQUE` (`idProduct` ASC) VISIBLE,
  CONSTRAINT `fk_Products_technologies1`
    FOREIGN KEY (`FkTechnologyPro`)
    REFERENCES `supplies`.`technologies` (`idTechnology`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `supplies`.`supply`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies`.`supply` (
  `idSupply` INT NOT NULL AUTO_INCREMENT,
  `FkSupplieSpy` INT UNSIGNED NOT NULL,
  `FkProductSpy` INT NOT NULL,
  `price` FLOAT NULL,
  `deliveryTime` VARCHAR(100) NULL,
  `productLine` VARCHAR(30) NULL,
  `comments` TEXT(300) NULL,
  PRIMARY KEY (`idSupply`),
  INDEX `fk_supply_supplie1_idx` (`FkSupplieSpy` ASC) VISIBLE,
  UNIQUE INDEX `idsupply_UNIQUE` (`idSupply` ASC) VISIBLE,
  INDEX `fk_supply_Products1_idx` (`FkProductSpy` ASC) VISIBLE,
  CONSTRAINT `fk_supply_supplie1`
    FOREIGN KEY (`FkSupplieSpy`)
    REFERENCES `supplies`.`supplie` (`idSupplie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_supply_Products1`
    FOREIGN KEY (`FkProductSpy`)
    REFERENCES `supplies`.`Products` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `supplies`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies`.`role` (
  `id_role` INT NOT NULL,
  `name_role` VARCHAR(10) NULL,
  `privileges` VARCHAR(20) NULL,
  PRIMARY KEY (`id_role`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `supplies`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies`.`Users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `name_user` VARCHAR(20) NOT NULL,
  `password_user` VARCHAR(40) NOT NULL,
  `role_id_role` INT NOT NULL,
  PRIMARY KEY (`idUsers`),
  INDEX `fk_Users_role1_idx` (`role_id_role` ASC) VISIBLE,
  CONSTRAINT `fk_Users_role1`
    FOREIGN KEY (`role_id_role`)
    REFERENCES `supplies`.`role` (`id_role`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `supplies1.0` ;

-- -----------------------------------------------------
-- Table `supplies1.0`.`businesstype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`businesstype` (
  `idBusinessType` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `bName` VARCHAR(30) CHARACTER SET 'utf8' NOT NULL,
  `bDescription` TEXT CHARACTER SET 'utf8' NOT NULL,
  PRIMARY KEY (`idBusinessType`),
  UNIQUE INDEX `idbussinesType_UNIQUE` (`idBusinessType` ASC) VISIBLE,
  UNIQUE INDEX `nameBussines_UNIQUE` (`bName` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`sclasification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`sclasification` (
  `idClasification` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `clasificationName` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idClasification`),
  UNIQUE INDEX `idtable1_UNIQUE` (`idClasification` ASC) VISIBLE,
  UNIQUE INDEX `clasificationName_UNIQUE` (`clasificationName` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`supplie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`supplie` (
  `idSupplie` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nameSupplie` VARCHAR(50) NOT NULL,
  `FkBusinessType` INT UNSIGNED NOT NULL,
  `FkClasification` INT UNSIGNED NOT NULL,
  `sDateInitial` DATE NOT NULL,
  `sDateUpdate` DATE NOT NULL,
  PRIMARY KEY (`idSupplie`),
  UNIQUE INDEX `supplie_name_UNIQUE` (`nameSupplie` ASC) VISIBLE,
  UNIQUE INDEX `id_supplie_UNIQUE` (`idSupplie` ASC) VISIBLE,
  INDEX `fkbusinessType` (`FkBusinessType` ASC) VISIBLE,
  INDEX `fksClasification` (`FkClasification` ASC) VISIBLE,
  CONSTRAINT `fkbusinessType`
    FOREIGN KEY (`FkBusinessType`)
    REFERENCES `supplies1.0`.`businesstype` (`idBusinessType`),
  CONSTRAINT `fksClasification`
    FOREIGN KEY (`FkClasification`)
    REFERENCES `supplies1.0`.`sclasification` (`idClasification`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`adresstype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`adresstype` (
  `idadressType` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `aType` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idadressType`),
  UNIQUE INDEX `idadressType_UNIQUE` (`idadressType` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`adresssupplie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`adresssupplie` (
  `idAdress` INT NOT NULL AUTO_INCREMENT,
  `FkSupplieAd` INT UNSIGNED NOT NULL,
  `FkadressType` INT UNSIGNED NOT NULL,
  `adressPrincipal` BIT(1) NOT NULL DEFAULT b'0',
  `adressCountry` VARCHAR(50) NOT NULL,
  `adressState` VARCHAR(50) NOT NULL,
  `adressDescription` TEXT NOT NULL,
  `aComments` TEXT NOT NULL,
  PRIMARY KEY (`idAdress`),
  INDEX `fk_adress_supplie_supplie_idx` (`FkSupplieAd` ASC) VISIBLE,
  INDEX `fk_adressSupplie_adressType1_idx` (`FkadressType` ASC) VISIBLE,
  CONSTRAINT `fk_adress_supplie_supplie`
    FOREIGN KEY (`FkSupplieAd`)
    REFERENCES `supplies1.0`.`supplie` (`idSupplie`),
  CONSTRAINT `fk_adressSupplie_adressType1`
    FOREIGN KEY (`FkadressType`)
    REFERENCES `supplies1.0`.`adresstype` (`idadressType`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`contactsupplies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`contactsupplies` (
  `idContact` INT NOT NULL AUTO_INCREMENT,
  `FkAdressCont` INT NOT NULL,
  `nameContact` VARCHAR(45) NOT NULL,
  `contactPrincipal` BIT(1) NOT NULL DEFAULT b'0',
  `workposition` VARCHAR(45) NOT NULL,
  `officeNumber` VARCHAR(10) NOT NULL,
  `cellphoneNumber` VARCHAR(10) NOT NULL,
  `comments` TEXT NOT NULL,
  PRIMARY KEY (`idContact`),
  UNIQUE INDEX `id_contact_UNIQUE` (`idContact` ASC) VISIBLE,
  INDEX `fk_contact_supplies_adress_supplie1_idx` (`FkAdressCont` ASC) VISIBLE,
  CONSTRAINT `fk_contact_supplies_adress_supplie1`
    FOREIGN KEY (`FkAdressCont`)
    REFERENCES `supplies1.0`.`adresssupplie` (`idAdress`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`technologies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`technologies` (
  `idTechnology` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nameTechnology` VARCHAR(50) CHARACTER SET 'utf8' NOT NULL,
  PRIMARY KEY (`idTechnology`),
  UNIQUE INDEX `id_technologies_UNIQUE` (`idTechnology` ASC) VISIBLE,
  UNIQUE INDEX `nameTechnology_UNIQUE` (`nameTechnology` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`products` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `FkTechnologyPro` INT UNSIGNED NOT NULL,
  `productName` VARCHAR(45) CHARACTER SET 'utf8' NOT NULL,
  `descriptionProduct` TEXT CHARACTER SET 'utf8' NOT NULL,
  PRIMARY KEY (`idProduct`),
  UNIQUE INDEX `id_product_UNIQUE` (`idProduct` ASC) VISIBLE,
  INDEX `fk_Products_technologies1_idx` (`FkTechnologyPro` ASC) VISIBLE,
  CONSTRAINT `fk_Products_technologies1`
    FOREIGN KEY (`FkTechnologyPro`)
    REFERENCES `supplies1.0`.`technologies` (`idTechnology`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`role` (
  `idRole` INT NOT NULL,
  `nameRole` VARCHAR(10) NULL DEFAULT NULL,
  `privileges` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`idRole`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`supply`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`supply` (
  `idSupply` INT NOT NULL AUTO_INCREMENT,
  `FkSupplieSpy` INT UNSIGNED NOT NULL,
  `FkProductSpy` INT NOT NULL,
  `price` FLOAT NULL DEFAULT NULL,
  `deliveryTime` VARCHAR(100) NULL DEFAULT NULL,
  `productLine` VARCHAR(30) NULL DEFAULT NULL,
  `comments` TEXT NULL DEFAULT NULL,
  `pDateInitial` DATE NOT NULL,
  `pDateUpdate` DATE NOT NULL,
  `pSampleF` BIT(2) NOT NULL DEFAULT b'0',
  `pSampleLocation` TEXT CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`idSupply`),
  UNIQUE INDEX `idsupply_UNIQUE` (`idSupply` ASC) VISIBLE,
  INDEX `fk_supply_supplie1_idx` (`FkSupplieSpy` ASC) VISIBLE,
  INDEX `fk_supply_Products1_idx` (`FkProductSpy` ASC) VISIBLE,
  CONSTRAINT `fk_supply_Products1`
    FOREIGN KEY (`FkProductSpy`)
    REFERENCES `supplies1.0`.`products` (`idProduct`),
  CONSTRAINT `fk_supply_supplie1`
    FOREIGN KEY (`FkSupplieSpy`)
    REFERENCES `supplies1.0`.`supplie` (`idSupplie`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `FkRole` INT NOT NULL,
  `nameUser` VARCHAR(20) NOT NULL,
  `passwordUser` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`idUsers`),
  INDEX `fk_Users_role1_idx` (`FkRole` ASC) VISIBLE,
  CONSTRAINT `fk_Users_role1`
    FOREIGN KEY (`FkRole`)
    REFERENCES `supplies1.0`.`role` (`idRole`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
