-- INSERT INTO side_effects (name) VALUES ('Nausea');
-- INSERT INTO side_effects (name) VALUES ('Headache');
-- INSERT INTO products (name,brand,description) VALUES ('Alvedon 500mg', 'Alvedon', 'Paracetamol');
-- INSERT INTO products (name,brand,description) VALUES ('Ibuprofen 400mg', 'Ipren', 'Ibuprofen');
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES ('1','1');
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES ('2','1');
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES ('2','2');
-- INSERT INTO reports (product_id, side_effect_id, age) VALUES ('2', '1', '34');
-- INSERT INTO reports (product_id, side_effect_id, age) VALUES ('2', '2', '34');
-- INSERT INTO reports (product_id, side_effect_id, age) VALUES ('2', '2', '21');
-- INSERT INTO reports (product_id, side_effect_id, age) VALUES ('2', '1', '34');
-- INSERT INTO reports (product_id, side_effect_id, age) VALUES ('1', '1', '26');

INSERT INTO side_effects (name) VALUES ('Headache');
INSERT INTO side_effects (name) VALUES ('Nausea');
INSERT INTO side_effects (name) VALUES ('Stomach upset');
INSERT INTO side_effects (name) VALUES ('Skin rash');
INSERT INTO side_effects (name) VALUES ('Liver problems');
INSERT INTO side_effects (name) VALUES ('Allergic reactions');
INSERT INTO side_effects (name) VALUES ('Abdominal pain');
INSERT INTO side_effects (name) VALUES ('Fatigue');
INSERT INTO side_effects (name) VALUES ('Dizziness');
INSERT INTO side_effects (name) VALUES ('Excessive sweating');
INSERT INTO side_effects (name) VALUES ('Gastrointestinal bleeding');
INSERT INTO side_effects (name) VALUES ('Peptic ulcer');
INSERT INTO side_effects (name) VALUES ('Increased blood pressure');
INSERT INTO side_effects (name) VALUES ('Kidney damage');
INSERT INTO side_effects (name) VALUES ('Blurred vision');
INSERT INTO side_effects (name) VALUES ('Ringing in the ears');
INSERT INTO side_effects (name) VALUES ('Palpitations');
INSERT INTO side_effects (name) VALUES ('Skin changes');
INSERT INTO side_effects (name) VALUES ('Diarrhea');
INSERT INTO side_effects (name) VALUES ('Constipation');
INSERT INTO side_effects (name) VALUES ('Dry mouth');
INSERT INTO side_effects (name) VALUES ('Changes in taste');
INSERT INTO side_effects (name) VALUES ('Muscle weakness');
INSERT INTO side_effects (name) VALUES ('Muscle pain');
INSERT INTO side_effects (name) VALUES ('Muscle cramps');
INSERT INTO side_effects (name) VALUES ('Loss of appetite');
INSERT INTO side_effects (name) VALUES ('Vomiting');
INSERT INTO side_effects (name) VALUES ('Metallic taste in mouth');
INSERT INTO side_effects (name) VALUES ('Sleep problems');
INSERT INTO side_effects (name) VALUES ('Throat irritation');
INSERT INTO side_effects (name) VALUES ('Upset stomach');
INSERT INTO side_effects (name) VALUES ('Hoarseness');
INSERT INTO side_effects (name) VALUES ('Shakiness');
INSERT INTO side_effects (name) VALUES ('Increased heart rate');
INSERT INTO side_effects (name) VALUES ('Indigestion');
INSERT INTO side_effects (name) VALUES ('Heartburn');
INSERT INTO side_effects (name) VALUES ('Gas');
INSERT INTO side_effects (name) VALUES ('Hair loss');

INSERT INTO products (name, brand, description) VALUES ('Alvedon 500mg', 'Alvedon', 'Paracetamol');
INSERT INTO products (name, brand, description) VALUES ('Ipren', 'Ibuprofen', 'Ibuprofen');
INSERT INTO products (name, brand, description) VALUES ('Losec', 'Omeprazole', 'Omeprazole');
INSERT INTO products (name, brand, description) VALUES ('Zocor', 'Simvastatin', 'Simvastatin');
INSERT INTO products (name, brand, description) VALUES ('Glucophage', 'Metformin', 'Metformin');
INSERT INTO products (name, brand, description) VALUES ('Amimox', 'Amoxicillin', 'Amoxicillin');
INSERT INTO products (name, brand, description) VALUES ('Voltaren', 'Diclofenac', 'Diclofenac');
INSERT INTO products (name, brand, description) VALUES ('Symbicort', 'Budesonide/Formoterol', 'Budesonide/Formoterol');
INSERT INTO products (name, brand, description) VALUES ('Cipralex', 'Escitalopram', 'Escitalopram');
INSERT INTO products (name, brand, description) VALUES ('Diflucan', 'Fluconazole', 'Fluconazole');

-- Alvedon
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 1);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 2);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 3);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 4);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 5);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 6);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 7);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 8);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 9);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 10);

-- Ipren
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 11);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 12);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 13);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 14);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 9);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 15);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 16);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 17);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 18);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 19);


-- Losec
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 7);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 1);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 2);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 3);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 4);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 5);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 6);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 8);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 9);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 10);

-- Zocor
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 21);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 22);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 23);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 8);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 2);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 15);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 16);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 17);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 18);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 5);

-- Glucophage
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 3);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 19);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 20);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 7);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 24);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 8);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 9);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 10);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 25);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 26);

-- Amoxicillin
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 2);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 3);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 4);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 5);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 25);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 7);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 1);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 8);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 9);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 10);

-- Voltaren
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 7);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 8);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 9);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 10);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 11);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 12);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 2);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 13);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 14);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 1);

-- Symbicort
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 15);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 2);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 1);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 5);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 6);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 7);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 16);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 17);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 18);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 19);

-- Cipralex
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 2);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 3);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 4);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 7);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 24);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 20);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 21);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 22);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 23);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 25);

-- Diflucan
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 5);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 2);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 7);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 9);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 8);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 4);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 25);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 1);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 11);
INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 6);


