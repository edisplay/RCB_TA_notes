DROP TABLE IF EXISTS `presidents`;
#@ _CREATE_TABLE_
CREATE TABLE `presidents`
(
  last_name  VARCHAR(15) NOT NULL,
  first_name VARCHAR(15) NOT NULL,
  suffix     VARCHAR(5) NULL,
  city       VARCHAR(20) NOT NULL,
  state      VARCHAR(2) NOT NULL,
  birth      DATE NOT NULL,
  death      DATE NULL
);
#@ _CREATE_TABLE_

#----------------------------------------
#   load president

#-hld-DELETE FROM president;
INSERT INTO `presidents` VALUES ('Washington','George',NULL,'Wakefield','VA','1732-02-22','1799-12-14');
INSERT INTO `presidents` VALUES ('Adams','John',NULL,'Braintree','MA','1735-10-30','1826-07-04');
INSERT INTO `presidents` VALUES ('Jefferson','Thomas',NULL,'Albemarle County','VA','1743-04-13','1826-07-04');
INSERT INTO `presidents` VALUES ('Madison','James',NULL,'Port Conway','VA','1751-03-16','1836-06-28');
INSERT INTO `presidents` VALUES ('Monroe','James',NULL,'Westmoreland County','VA','1758-04-28','1831-07-04');
INSERT INTO `presidents` VALUES ('Adams','John Quincy',NULL,'Braintree','MA','1767-07-11','1848-02-23');
INSERT INTO `presidents` VALUES ('Jackson','Andrew',NULL,'Waxhaw settlement','SC','1767-03-15','1845-06-08');
INSERT INTO `presidents` VALUES ('Van Buren','Martin',NULL,'Kinderhook','NY','1782-12-05','1862-07-24');
INSERT INTO `presidents` VALUES ('Harrison','William H.',NULL,'Berkeley','VA','1773-02-09','1841-04-04');
INSERT INTO `presidents` VALUES ('Tyler','John',NULL,'Greenway','VA','1790-03-29','1862-01-18');
INSERT INTO `presidents` VALUES ('Polk','James K.',NULL,'Pineville','NC','1795-11-02','1849-06-15');
INSERT INTO `presidents` VALUES ('Taylor','Zachary',NULL,'Orange County','VA','1784-11-24','1850-07-09');
INSERT INTO `presidents` VALUES ('Fillmore','Millard',NULL,'Locke','NY','1800-01-07','1874-03-08');
INSERT INTO `presidents` VALUES ('Pierce','Franklin',NULL,'Hillsboro','NH','1804-11-23','1869-10-08');
INSERT INTO `presidents` VALUES ('Buchanan','James',NULL,'Mercersburg','PA','1791-04-23','1868-06-01');
INSERT INTO `presidents` VALUES ('Lincoln','Abraham',NULL,'Hodgenville','KY','1809-02-12','1865-04-15');
INSERT INTO `presidents` VALUES ('Johnson','Andrew',NULL,'Raleigh','NC','1808-12-29','1875-07-31');
INSERT INTO `presidents` VALUES ('Grant','Ulysses S.',NULL,'Point Pleasant','OH','1822-04-27','1885-07-23');
INSERT INTO `presidents` VALUES ('Hayes','Rutherford B.',NULL,'Delaware','OH','1822-10-04','1893-01-17');
INSERT INTO `presidents` VALUES ('Garfield','James A.',NULL,'Orange','OH','1831-11-19','1881-09-19');
INSERT INTO `presidents` VALUES ('Arthur','Chester A.',NULL,'Fairfield','VT','1829-10-05','1886-11-18');
INSERT INTO `presidents` VALUES ('Cleveland','Grover',NULL,'Caldwell','NJ','1837-03-18','1908-06-24');
INSERT INTO `presidents` VALUES ('Harrison','Benjamin',NULL,'North Bend','OH','1833-08-20','1901-03-13');
INSERT INTO `presidents` VALUES ('McKinley','William',NULL,'Niles','OH','1843-01-29','1901-09-14');
INSERT INTO `presidents` VALUES ('Roosevelt','Theodore',NULL,'New York','NY','1858-10-27','1919-01-06');
INSERT INTO `presidents` VALUES ('Taft','William H.',NULL,'Cincinnati','OH','1857-09-15','1930-03-08');
INSERT INTO `presidents` VALUES ('Wilson','Woodrow',NULL,'Staunton','VA','1856-12-19','1924-02-03');
INSERT INTO `presidents` VALUES ('Harding','Warren G.',NULL,'Blooming Grove','OH','1865-11-02','1923-08-02');
INSERT INTO `presidents` VALUES ('Coolidge','Calvin',NULL,'Plymouth Notch','VT','1872-07-04','1933-01-05');
INSERT INTO `presidents` VALUES ('Hoover','Herbert C.',NULL,'West Branch','IA','1874-08-10','1964-10-20');
INSERT INTO `presidents` VALUES ('Roosevelt','Franklin D.',NULL,'Hyde Park','NY','1882-01-30','1945-04-12');
INSERT INTO `presidents` VALUES ('Truman','Harry S',NULL,'Lamar','MO','1884-05-08','1972-12-26');
INSERT INTO `presidents` VALUES ('Eisenhower','Dwight D.',NULL,'Denison','TX','1890-10-14','1969-03-28');
INSERT INTO `presidents` VALUES ('Kennedy','John F.',NULL,'Brookline','MA','1917-05-29','1963-11-22');
INSERT INTO `presidents` VALUES ('Johnson','Lyndon B.',NULL,'Stonewall','TX','1908-08-27','1973-01-22');
INSERT INTO `presidents` VALUES ('Nixon','Richard M.',NULL,'Yorba Linda','CA','1913-01-09','1994-04-22');
INSERT INTO `presidents` VALUES ('Ford','Gerald R.',NULL,'Omaha','NE','1913-07-14','2006-12-26');
INSERT INTO `presidents` VALUES ('Carter','James E.','Jr.','Plains','GA','1924-10-01',NULL);
INSERT INTO `presidents` VALUES ('Reagan','Ronald W.',NULL,'Tampico','IL','1911-02-06','2004-06-05');
INSERT INTO `presidents` VALUES ('Bush','George H.W.',NULL,'Milton','MA','1924-06-12',NULL);
INSERT INTO `presidents` VALUES ('Clinton','William J.',NULL,'Hope','AR','1946-08-19',NULL);
INSERT INTO `presidents` VALUES ('Bush','George W.',NULL,'New Haven','CT','1946-07-06',NULL);