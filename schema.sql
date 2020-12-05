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
    FOREIGN KEY (role_id) REFERENCES empRole(id),
    FOREIGN KEY (manager_id) REFERENCES empRole(id)
);

CREATE TABLE empRole(
    id INTEGER (10) AUTO_INCREMENT NOT NULL,
    employee_role VARCHAR (30),
    salary DECIMAL (12,4),
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE department (
    id INTEGER (10) AUTO_INCREMENT NOT NULL,
    name VARCHAR (30),
    PRIMARY KEY (id)
);

SELECT * FROM employee;
SELECT * FROM empRole;
SELECT * FROM department;