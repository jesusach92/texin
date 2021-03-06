-- MySQL Script generated by MySQL Workbench
-- Wed Apr 20 14:01:35 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema supplies1.0
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `supplies1.0` ;

-- -----------------------------------------------------
-- Schema supplies1.0
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `supplies1.0` DEFAULT CHARACTER SET utf8 ;
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
AUTO_INCREMENT = 8
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
AUTO_INCREMENT = 5
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
AUTO_INCREMENT = 5
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
  CONSTRAINT `adresssupplie_ibfk_1`
    FOREIGN KEY (`FkSupplieAd`)
    REFERENCES `supplies1.0`.`supplie` (`idSupplie`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_adressSupplie_adressType1`
    FOREIGN KEY (`FkadressType`)
    REFERENCES `supplies1.0`.`adresstype` (`idadressType`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`contactsupplies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`contactsupplies` (
  `idContact` INT NOT NULL AUTO_INCREMENT,
  `FkAdressCont` INT NOT NULL,
  `nameContact` VARCHAR(45) NOT NULL,
  `contactPrincipal` INT NOT NULL DEFAULT '0',
  `workposition` VARCHAR(45) NOT NULL,
  `officeNumber` VARCHAR(10) NOT NULL,
  `cellphoneNumber` VARCHAR(10) NOT NULL,
  `comments` TEXT NOT NULL,
  PRIMARY KEY (`idContact`),
  UNIQUE INDEX `id_contact_UNIQUE` (`idContact` ASC) VISIBLE,
  INDEX `fk_contact_supplies_adress_supplie1_idx` (`FkAdressCont` ASC) VISIBLE,
  CONSTRAINT `contactsupplies_ibfk_1`
    FOREIGN KEY (`FkAdressCont`)
    REFERENCES `supplies1.0`.`adresssupplie` (`idAdress`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
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
AUTO_INCREMENT = 7
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
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`role` (
  `idRole` INT NOT NULL AUTO_INCREMENT,
  `nameRole` VARCHAR(10) NULL DEFAULT NULL,
  `privileges` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`idRole`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
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
  `productLine` VARCHAR(30) NOT NULL,
  `comments` TEXT NULL DEFAULT NULL,
  `pDateInitial` DATE NOT NULL,
  `pDateUpdate` DATE NOT NULL,
  `pSampleF` INT NOT NULL DEFAULT '0',
  `pSampleLocation` TEXT CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `divisa` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`idSupply`),
  UNIQUE INDEX `idsupply_UNIQUE` (`idSupply` ASC) VISIBLE,
  INDEX `fk_supply_supplie1_idx` (`FkSupplieSpy` ASC) VISIBLE,
  INDEX `fk_supply_Products1_idx` (`FkProductSpy` ASC) VISIBLE,
  CONSTRAINT `supply_ibfk_1`
    FOREIGN KEY (`FkSupplieSpy`)
    REFERENCES `supplies1.0`.`supplie` (`idSupplie`)
    ON DELETE CASCADE,
  CONSTRAINT `supply_ibfk_2`
    FOREIGN KEY (`FkProductSpy`)
    REFERENCES `supplies1.0`.`products` (`idProduct`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `supplies1.0`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `supplies1.0`.`users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `FkRole` INT NOT NULL DEFAULT '4',
  `nameUser` VARCHAR(20) NOT NULL,
  `passwordUser` VARCHAR(40) NOT NULL,
  `namePerson` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`idUsers`),
  UNIQUE INDEX `nameUser` (`nameUser` ASC) VISIBLE,
  INDEX `fk_Users_role1_idx` (`FkRole` ASC) VISIBLE,
  CONSTRAINT `users_ibfk_1`
    FOREIGN KEY (`FkRole`)
    REFERENCES `supplies1.0`.`role` (`idRole`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
