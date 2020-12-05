DROP DATABASE IF EXISTS employee_infoDB;
CREATE database employee_infoDB;

USE employee_infoDB;

CREATE TABLE employee (
    id INTEGER (10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE empRole(
    id INTEGER (10) AUTO_INCREMENT NOT NULL,
    employee_role VARCHAR (30),
    salary DECIMAL (12,4),
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);