DROP DATABASE IF EXISTS employee_infoDB;
CREATE database employee_infoDB;

USE employee_infoDB;

CREATE TABLE employee (
    id INTEGER (10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES employeerole(id),
    FOREIGN KEY (manager_id) REFERENCES employeerole(id)
);