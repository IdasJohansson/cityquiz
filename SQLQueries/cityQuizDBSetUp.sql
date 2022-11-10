CREATE DATABASE cityQuizDB;

USE cityQuizDB;

CREATE TABLE Users (
    id int IDENTITY,
    userName varchar(255) NOT NULL,
    password varchar(20),
    timetaken int,
    score int,
    PRIMARY KEY (id)
);
GO

CREATE TABLE HighScore (
    id int IDENTITY,
    userid  int,
    score int,
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES Users(id)
);
GO

INSERT INTO Users ( userName, password) values ('Maria', 'P@ssw0rd');
GO
INSERT INTO Users ( userName, password) values ('Ida', 'P@ssw0rd');
GO
INSERT INTO Users ( userName, password) values ('Wilma', 'P@ssw0rd');
GO


CREATE TABLE Question (
	id INT IDENTITY,
	city VARCHAR(50),
	country VARCHAR(50),
	longitude VARCHAR(50),
	latitude VARCHAR(50),
	PRIMARY KEY (id)
);
GO

SET IDENTITY_INSERT Question ON
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (1, 'Vojkovice', 'Czech Republic', 18.47311619704032, 49.68561642049438); /*49.68561642049438, 18.47311619704032*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (2, 'Karangarjo', 'Indonesia', 114.02135779712958, -8.36834944206266); /*-8.36834944206266, 114.02135779712958*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (3, 'Urbiztondo', 'Philippines', 120.32269381737817, 15.841668721416605); /*15.841668721416605, 120.32269381737817*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (4, 'Espinosa', 'Brazil', -42.811489796176645, -14.919944430300674); /*-14.919944430300674, -42.811489796176645*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (5, 'Neuville', 'Canada', -71.63254526440504, 46.719514220955325); /*46.719514220955325, -71.63254526440504*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (6, 'Namyangju', 'South Korea', 127.24076501375265, 37.65886927830609); /*37.65886927830609, 127.24076501375265*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (7, 'Onguday', 'Russia', 86.13680902611095, 50.74974725781954); /*50.74974725781954, 86.13680902611095*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (8, 'Carania', 'Peru', -75.87081219479252, -12.344553147646701); /*-12.344553147646701, -75.87081219479252*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (9, 'Fort Dauphin', 'Madagascar', 46.9755107250183, -25.02507560372845); /*-25.02507560372845, 46.9755107250183*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (10, 'Picoto', 'Portugal', -8.364497946272905, 41.55956450225868); /*41.55956450225868, -8.364497946272905*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (11, 'Kabir', 'Netherlands', 6.6486394301051055, 52.37017726815807); /*52.37017726815807, 6.6486394301051055*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (12, 'Cuyotenango', 'Guatemala', -97.57522091491676, 14.541682898076518); /*14.541682898076518, -91.57522091491676*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (13, 'Sheshory', 'Ukraine', 24.945422915638026, 48.32326201171657); /*48.32326201171657, 24.945422915638026*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (14, 'Mongar', 'Bhutan', 91.23690610843383, 27.277822806500804); /*27.277822806500804, 91.23690610843383*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (15, 'Neiafu', 'Tonga', -173.98236753915424, -18.646143032830246); /*-18.646143032830246, -173.98236753915424*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (16, 'Muang Xay', 'Laos', 101.99642632090301, 20.694700143243423); /*20.694700143243423, 101.99642632090301*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (17, 'Nong Chik', 'Thailand', 101.15900799587449, 6.82616402294431); /*6.82616402294431, 101.15900799587449*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (18, 'Kato Nevrokopi', 'Greece', 23.869634162923095, 41.342453957101014); /*41.342453957101014, 23.869634162923095*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (19, 'Remiremont', 'France', 6.580640356414576, 48.00144001709567); /*48.00144001709567, 6.580640356414576*/
GO

INSERT INTO Question (id, city, country, latitude, longitude) values (20, 'Igurusi', 'Tanzania', 33.84314774377946, -8.821932039993673); /*-8.821932039993673, 33.84314774377946*/
GO