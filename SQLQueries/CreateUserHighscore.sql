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

SELECT * FROM Users; 
SELECT * FROM HighScore; 