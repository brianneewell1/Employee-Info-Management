USE employee_infoDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Leslie', 'Knope', 2,1),
('Ron', 'Swanson', 1, 1),
('Ben', 'Wyatt', 3,2),
('Andy', 'Dwyer', 4, 4),
('Ann', 'Perkins', 3, 3);

INSERT INTO department (name)
VALUES ('Parks and Rec'), ('City Planning'), ('Health'), ('Shoe Shine');

INSERT INTO empRole (employee_role, department_id)
VALUES ('Director', 1),
 ('Deputy Director', 1),
 ('City Manager', 2),
 ('Public Relations Director', 3),
 ('Shoe Shiner', 4),
('Administrator', 1),
('Assistant', 2),
 ('Intern', 1),
 ('Public Health Director', 3);



SELECT * FROM department;
SELECT * FROM empRole;
SELECT * FROM employee;