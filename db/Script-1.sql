CREATE  DATABASE IF NOT EXISTS company;
USE company;
CREATE  TABLE  employees (
id INT (11) NOT NULL AUTO_INCREMENT,
name VARCHAR (45) DEFAULT NULL,
salary INT(11) DEFAULT NULL,
PRIMARY KEY (id)
);
DESCRIBE employees;

SELECT * FROM employees;

-- vamos a insertar valores

INSERT  INTO employees  values
(1,'Ryan Ray', 20000),
(2,'Joe McMilan', 40000),
(3,'Jhon Carter', 50000);