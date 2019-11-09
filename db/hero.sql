USE zh5j2ywf78gnkyey;

DROP TABLE IF EXISTS Users

CREATE TABLE Users (
    id INTEGER AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(35),
    lastName VARCHAR (35),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR (12),
    colorPreferences VARCHAR(255),
    project VARCHAR(255),
    PRIMARY KEY(id)
);