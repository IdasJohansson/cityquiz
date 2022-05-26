USE cityQuizDB
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

INSERT INTO Question (id, city, country, longitude, latitude) values (1, 'Vojkovice', 'Czech Republic', 18.468024, 49.6823404);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (2, 'Karangarjo', 'Indonesia', 111.6198661, -6.7050629);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (3, 'Urbiztondo', 'Philippines', 120.349903, 15.816699);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (4, 'Somorpenang', 'Indonesia', 114.0612, -6.9949);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (5, 'Neuville', 'Canada', -71.58275, 46.69823);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (6, 'Namyangju', 'South Korea', 127.2165279, 37.6360028);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (7, 'Hongling', 'China', 114.103143, 22.54921);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (8, 'Jinqu', 'China', 107.788999, 34.208655);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (9, 'Fonte Boa', 'Brazil', -66.1415263, -2.4681009);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (10, 'Picoto', 'Portugal', -8.6358837, 41.0734417);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (11, 'Kabir', 'Indonesia', 124.2227061, -8.2481387);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (12, 'Houping', 'China', 118.481377, 26.608357);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (13, 'Longtan', 'China', 117.017536, 25.075123);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (14, 'Nancang', 'China', 115.858197, 28.682892);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (15, 'Lameira', 'Portugal', -8.6240851, 41.7811503);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (16, 'Muang Xay', 'Laos', 101.9861694, 20.690696);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (17, 'Nong Chik', 'Thailand', 101.1843887, 6.8117856);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (18, 'Murmashi', 'Russia', 32.7986688, 68.8128001);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (19, 'Paris 19', 'France', 5.8978018, 43.4945737);
GO

INSERT INTO Question (id, city, country, longitude, latitude) values (20, 'Igurusi', 'Tanzania', 33.8425243, -8.8221596);
GO


--SELECT * FROM Question;
--GO