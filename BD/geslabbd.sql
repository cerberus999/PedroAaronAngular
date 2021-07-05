-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: geslabbd
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente` (
  `id_pac` bigint NOT NULL AUTO_INCREMENT,
  `nombres_pac` varchar(40) DEFAULT NULL,
  `apel_pat_pac` varchar(25) DEFAULT NULL,
  `apel_mat_pac` varchar(25) DEFAULT NULL,
  `sexo_pac` varchar(15) DEFAULT NULL,
  `dir_pac` varchar(80) DEFAULT NULL,
  `tel_pac` varchar(15) DEFAULT NULL,
  `edad_pac` varchar(20) DEFAULT NULL,
  `tipo_aseg_pac` varchar(15) DEFAULT NULL,
  `com_pac` varchar(150) DEFAULT NULL,
  `fec_nac_pac` date DEFAULT NULL,
  PRIMARY KEY (`id_pac`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
INSERT INTO `paciente` VALUES (1,'Pedro Aaron','Espinoza','Vargas','Masculino','Pasaje Claros','76944693','23',NULL,'-','1997-10-20'),(2,'Sarah','Connor','','Femenino',NULL,'99951385','65',NULL,'T','1956-10-19'),(4,'Pedr','Esp','','Masculino','','7666666666','','','','2021-02-14'),(5,'Carl','','Smith','Masculino','','556221554','','','','2021-05-14'),(6,'Carlos','Guizada','','Masculino','','4362468','','','','2021-01-14'),(7,'Sandra ','Alcocer','Quispe','Femenino','','8888516','','','','2021-01-19'),(8,'Sandra ','Alcocer','Quispe','Femenino','','8888516','','','','2021-01-19'),(9,'','','','','','','','','',NULL),(10,'Pablo','Astudillo','','Masculino','','4546325','','','','2201-12-21'),(11,'Rosa','Arze','Rocha','Femenino','','45623566','','','','2020-02-24'),(12,'Paco','Leon','','Masculino','','456666166','','','','1985-02-24'),(13,'Cinthia ','Mejia','','Femenino','','455626668','','','','1995-01-24'),(14,'Cinthia ','Mejia','','Femenino','','455626668','','','','1995-01-24'),(15,'Carmen','Luz','Rocha','Femenino','','455626668','','','','1924-01-24'),(16,'Clara','Smith','','Femenino','','5949563','','','','2002-01-24'),(17,'Sam ','Jones','','Femenino','','55166985','','','','1996-05-05'),(18,'Maria','Rivas','','Femenino','','54547452','','','','2005-05-12'),(19,'Ramona','Flowers','','Femenino','','556161266','','','','1993-05-27'),(20,'Richard','Lazarte',NULL,'Masculino',NULL,'51919621',NULL,NULL,NULL,'1985-05-05'),(21,'Luisa','Garcia',NULL,'Femenino',NULL,'54912998',NULL,NULL,NULL,'1953-09-25'),(22,'','','','','','','','','',NULL),(23,'s','s','','Masculino','','54','','','','2003-02-24'),(24,'s','s','','Masculino','','54','','','','2003-02-24'),(25,'Tereza','Vargas','Madrid','Femenino','','60762065','','','','1976-06-03'),(26,'Pepe','Ssad',' ','Masculino','','656548','','','','1998-02-24'),(27,'Pedro Aaron','Espinoza ','Vargas','Masculino','','515635987','23 años','','','1998-03-24'),(28,'Maria','Salome',' ','Femenino','','565165198','3 meses y 10 dias','','','2021-03-24'),(29,'Sara','Gonzales',' ','Femenino','','541165168','22 años','','','1998-12-11');
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-05 19:51:56
