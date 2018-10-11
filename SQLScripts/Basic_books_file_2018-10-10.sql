# ************************************************************
# Sequel Pro SQL dump
# Version 5224
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 8.0.11)
# Database: books
# Generation Time: 2018-10-10 10:29:31 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table books
# ------------------------------------------------------------

DROP TABLE IF EXISTS `books`;

CREATE TABLE `books` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `publisher` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` longtext,
  `price` decimal(6,2) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `series_no` varchar(255) DEFAULT NULL,
  `votes` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;

INSERT INTO `books` (`id`, `publisher`, `title`, `description`, `price`, `created_at`, `updated_at`, `series_no`, `votes`)
VALUES
	(127,'Image Comics','The Walking Dead','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie justo nisl, et dignissim dolor rutrum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet metus dui. Nulla facilisi. Phasellus rutrum varius commodo. Sed eleifend justo eu quam hendrerit malesuada. Nulla tristique ipsum sed consectetur dapibus. Fusce vestibulum ornare dui vel dignissim. Donec placerat velit sed vestibulum.',19.99,'2018-09-12','2018-09-14','69',9),
	(128,'Marvel Comics','The Uncanny X-men','Sed aliquet sit amet ex at viverra. Aliquam congue lectus odio, quis rhoncus sem dictum a. Donec odio mi, cursus sed tincidunt iaculis, rutrum ut mi. Nunc non pretium nunc, vitae commodo nulla. Vestibulum venenatis maximus diam vel viverra. Integer sollicitudin, eros eu placerat ultricies, dolor massa rhoncus diam, nec molestie lectus massa in erat. Morbi a pretium dolor, nec tempus leo.',10.99,'2018-09-12',NULL,'132',14),
	(129,'DC Comics','Wonder Woman','Etiam quis varius lacus, sed molestie arcu. Curabitur ipsum ante, fermentum eget egestas sed, ornare ac velit. Integer sed ante vitae justo mattis volutpat. Aenean congue pellentesque sem, a lacinia velit malesuada at. Nulla consequat, metus sit amet varius mollis, elit nisi porttitor odio, nec mattis odio urna at eros. Donec facilisis quam at efficitur dapibus. Donec sit amet iaculis lorem, sit amet egestas arcu. ',18.95,'2018-09-12','2018-09-12','36',17),
	(130,'Image Comics','The Walking Dead','Cras maximus erat a eros dapibus malesuada. Nam quis scelerisque dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus felis ante, rhoncus id condimentum non, tempor vel dui. In scelerisque vehicula varius. Duis laoreet sed nulla porta placerat. Aenean consequat eget ex sit amet varius. Suspendisse accumsan metus ac metus posuere, sed venenatis nibh posuere.',9.95,'2018-09-12',NULL,'19',10),
	(131,'Image Comics','The Walking Dead','Donec facilisis quam at efficitur dapibus. Donec sit amet iaculis lorem, sit amet egestas arcu. Sed maximus fermentum quam, non consequat purus condimentum at. Morbi quis turpis lorem. Duis tincidunt, tortor ut placerat cursus, dolor arcu cursus ligula, vel molestie arcu mi at augue. Praesent quis mattis magna. Ut lectus ipsum, consequat ac nisl sed, pellentesque commodo lectus.',17.99,'2018-09-12',NULL,'106',11),
	(132,'Marvel Comics','The Black Panther','Donec accumsan dignissim magna ut malesuada. Nam elementum ligula vel dui fermentum, at porta tellus congue. Suspendisse potenti. Sed facilisis cursus orci, sollicitudin fermentum sapien rhoncus a. Fusce aliquam dui vitae magna blandit maximus. Aenean viverra turpis sit amet luctus rutrum. Nunc ac dictum felis. Ut iaculis quam leo, sit amet blandit sem finibus non. Proin posuere interdum sollicitudin.',21.99,'2018-09-12',NULL,'8',10),
	(133,'DC Comics','The Flash','Vivamus aliquet lacus libero. Sed fermentum lacus quis velit molestie, non hendrerit libero mattis. Cras maximus erat a eros dapibus malesuada. Nam quis scelerisque dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus felis ante, rhoncus id condimentum non, tempor vel dui. In scelerisque vehicula varius. ',21.99,'2018-09-12','2018-09-14','40',15),
	(134,'Marvel Comics','The Mighty Thor','Nulla facilisi. Phasellus rutrum varius commodo. Sed eleifend justo eu quam hendrerit malesuada. Nulla tristique ipsum sed consectetur dapibus. Fusce vestibulum ornare dui vel dignissim. Donec placerat velit sed vestibulum pretium. Fusce vitae luctus ipsum, in dignissim nisi. Quisque a placerat leo.',8.95,'2018-09-12',NULL,'272',14),
	(135,'DC Comics','Batman','Aliquam congue lectus odio, quis rhoncus sem dictum a. Donec odio mi, cursus sed tincidunt iaculis, rutrum ut mi. Nunc non pretium nunc, vitae commodo nulla. Vestibulum venenatis maximus diam vel viverra. Integer sollicitudin, eros eu placerat ultricies, dolor massa rhoncus diam, nec molestie lectus massa in erat. Morbi a pretium dolor, nec tempus leo.',8.95,'2018-09-12',NULL,'608',6),
	(136,'Marvel Comics','The Incredible Hulk','Aenean congue pellentesque sem, a lacinia velit malesuada at. Nulla consequat, metus sit amet varius mollis, elit nisi porttitor odio, nec mattis odio urna at eros. Donec facilisis quam at efficitur dapibus. Donec sit amet iaculis lorem, sit amet egestas arcu. Sed maximus fermentum quam, non consequat purus condimentum at.',16.99,'2018-09-12',NULL,'181',11),
	(137,'Marvel Comics','Captain America','Cras maximus erat a eros dapibus malesuada. Nam quis scelerisque dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus felis ante, rhoncus id condimentum non, tempor vel dui. In scelerisque vehicula varius. Duis laoreet sed nulla porta placerat. Aenean consequat eget ex sit amet varius. Suspendisse accumsan metus ac metus posuere, sed venenatis nibh posuere.',6.95,'2018-09-12',NULL,'193',13),
	(138,'Marvel Comics','The Uncanny X-men','Donec facilisis quam at efficitur dapibus. Donec sit amet iaculis lorem, sit amet egestas arcu. Sed maximus fermentum quam, non consequat purus condimentum at. Morbi quis turpis lorem. Duis tincidunt, tortor ut placerat cursus, dolor arcu cursus ligula, vel molestie arcu mi at augue. Praesent quis mattis magna. ',17.99,'2018-09-12',NULL,'157',7),
	(139,'DC Comics','The Adventures of Superman','Vivamus non elit nec sem aliquam euismod lacinia pulvinar leo. Praesent suscipit eget velit ac maximus. Curabitur mollis lorem nec enim ullamcorper posuere a id risus. Etiam euismod metus neque, vel ultricies ligula venenatis id. Sed ac est in ante aliquam maximus eget at ante. Suspendisse ut nisi auctor, dignissim orci eu, fermentum felis.',19.99,'2018-09-12',NULL,'31',16),
	(140,'Marvel Comics','The Uncanny X-men','Donec accumsan dignissim magna ut malesuada. Nam elementum ligula vel dui fermentum, at porta tellus congue. Suspendisse potenti. Sed facilisis cursus orci, sollicitudin fermentum sapien rhoncus a. Fusce aliquam dui vitae magna blandit maximus. Aenean viverra turpis sit amet luctus rutrum. Nunc ac dictum felis. Ut iaculis quam leo, sit amet blandit sem finibus non. Proin posuere interdum sollicitudin.',15.99,'2018-09-12',NULL,'166',8),
	(141,'Marvel Comics','The Invincible Iron Man ','Cras maximus erat a eros dapibus malesuada. Nam quis scelerisque dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus felis ante, rhoncus id condimentum non, tempor vel dui. In scelerisque vehicula varius. Duis laoreet sed nulla porta placerat. ',18.99,'2018-09-12',NULL,'16',16);

/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table contact
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contact`;

CREATE TABLE `contact` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fullname` varchar(50),
  `email` varchar(255),
  `subject` varchar(255),
  `message_content` longtext,
  `created_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;

INSERT INTO `contact` (`id`, `fullname`, `email`, `subject`, `message_content`, `created_at`)
VALUES
	(1,'Werner','Random@random.com','Leuke website','erg','2018-10-09'),
	(2,'Jasper','Randpom@ergrandom.nl','Toffe website','Goed gemaakt man!','2018-10-09'),
	(3,'Taraasha','Taraasha@random.nl','Goed zo','Echt.','2018-10-09'),
	(16,'Amardeep','Amardeep@random.nl','Mooie website','Goed gemaakt, werken de berichten ook?','2018-10-10'),
	(17,'Taarika','Taarika@random.nl','Leuk','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie justo nisl, et dignissim dolor rutrum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet metus dui. Nulla facilisi.','2018-10-10'),
	(18,'Frits','Frits@random.nl','Cool','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie justo nisl, et dignissim dolor rutrum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet metus dui. Nulla facilisi.','2018-10-10'),
	(19,'Ineke','Ineke@random.nl','Nice','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie justo nisl, et dignissim dolor rutrum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet metus dui. Nulla facilisi.','2018-10-10'),
	(20,'Angad','Angad@random.nl','Te gek','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie justo nisl, et dignissim dolor rutrum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet metus dui. Nulla facilisi.','2018-10-10'),
	(21,'Muneet','Muneet@random.nl','Hoe kan dit','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie justo nisl, et dignissim dolor rutrum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet metus dui. Nulla facilisi.','2018-10-10'),
	(22,'Rene','Rene@random.nl','Oops','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie justo nisl, et dignissim dolor rutrum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet metus dui. Nulla facilisi.','2018-10-10'),
	(23,'Nikhil','Nikhil@random.nl','Wow','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie justo nisl, et dignissim dolor rutrum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet metus dui. Nulla facilisi.','2018-10-10'),
	(24,'Palak','Palak@random.nl','Verzoek','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie justo nisl, et dignissim dolor rutrum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet metus dui. Nulla facilisi.','2018-10-10'),
	(29,'Prerona','Prerona@random.nl','Suggestion','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie justo nisl, et dignissim dolor rutrum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet metus dui. Nulla facilisi.','2018-10-10');

/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
