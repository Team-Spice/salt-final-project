-- -- -- -- -- INSERT INTO side_effects (name) VALUES ('Nausea');
-- -- -- -- -- INSERT INTO side_effects (name) VALUES ('Headache');
-- -- -- -- -- INSERT INTO products (name,brand,description) VALUES ('Alvedon 500mg', 'Alvedon', 'Paracetamol');
-- -- -- -- -- INSERT INTO products (name,brand,description) VALUES ('Ibuprofen 400mg', 'Ipren', 'Ibuprofen');
-- -- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES ('1','1');
-- -- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES ('2','1');
-- -- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES ('2','2');
-- -- -- -- -- INSERT INTO reports (product_id, side_effect_id, age) VALUES ('2', '1', '34');
-- -- -- -- -- INSERT INTO reports (product_id, side_effect_id, age) VALUES ('2', '2', '34');
-- -- -- -- -- INSERT INTO reports (product_id, side_effect_id, age) VALUES ('2', '2', '21');
-- -- -- -- -- INSERT INTO reports (product_id, side_effect_id, age) VALUES ('2', '1', '34');
-- -- -- -- -- INSERT INTO reports (product_id, side_effect_id, age) VALUES ('1', '1', '26');
-- -- -- --
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Headache');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Nausea');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Stomach upset');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Skin rash');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Liver problems');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Allergic reactions');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Abdominal pain');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Fatigue');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Dizziness');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Excessive sweating');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Gastrointestinal bleeding');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Peptic ulcer');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Increased blood pressure');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Kidney damage');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Blurred vision');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Ringing in the ears');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Palpitations');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Skin changes');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Diarrhea');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Constipation');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Dry mouth');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Changes in taste');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Muscle weakness');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Muscle pain');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Muscle cramps');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Loss of appetite');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Vomiting');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Metallic taste in mouth');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Sleep problems');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Throat irritation');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Upset stomach');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Hoarseness');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Shakiness');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Increased heart rate');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Indigestion');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Heartburn');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Gas');
-- -- -- -- INSERT INTO side_effects (name) VALUES ('Hair loss');
-- -- -- --
-- -- -- -- INSERT INTO products (name, brand, description) VALUES ('Alvedon 500mg', 'Alvedon', 'Paracetamol');
-- -- -- -- INSERT INTO products (name, brand, description) VALUES ('Ipren', 'Ibuprofen', 'Ibuprofen');
-- -- -- -- INSERT INTO products (name, brand, description) VALUES ('Losec', 'Omeprazole', 'Omeprazole');
-- -- -- -- INSERT INTO products (name, brand, description) VALUES ('Zocor', 'Simvastatin', 'Simvastatin');
-- -- -- -- INSERT INTO products (name, brand, description) VALUES ('Glucophage', 'Metformin', 'Metformin');
-- -- -- -- INSERT INTO products (name, brand, description) VALUES ('Amimox', 'Amoxicillin', 'Amoxicillin');
-- -- -- -- INSERT INTO products (name, brand, description) VALUES ('Voltaren', 'Diclofenac', 'Diclofenac');
-- -- -- -- INSERT INTO products (name, brand, description) VALUES ('Symbicort', 'Budesonide/Formoterol', 'Budesonide/Formoterol');
-- -- -- -- INSERT INTO products (name, brand, description) VALUES ('Cipralex', 'Escitalopram', 'Escitalopram');
-- -- -- -- INSERT INTO products (name, brand, description) VALUES ('Diflucan', 'Fluconazole', 'Fluconazole');
-- -- -- --
-- -- -- -- -- Alvedon
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 1);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 2);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 3);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 4);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 5);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 6);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 7);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 8);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 9);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 10);
-- -- -- --
-- -- -- -- -- Ipren
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 11);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 12);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 13);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 14);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 9);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 15);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 16);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 17);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 18);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 19);
-- -- -- --
-- -- -- --
-- -- -- -- -- Losec
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 7);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 1);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 2);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 3);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 4);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 5);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 6);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 8);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 9);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 10);
-- -- -- --
-- -- -- -- -- Zocor
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 21);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 22);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 23);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 8);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 2);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 15);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 16);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 17);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 18);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 5);
-- -- -- --
-- -- -- -- -- Glucophage
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 3);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 19);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 20);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 7);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 24);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 8);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 9);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 10);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 25);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 26);
-- -- -- --
-- -- -- -- -- Amoxicillin
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 2);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 3);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 4);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 5);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 25);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 7);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 1);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 8);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 9);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 10);
-- -- -- --
-- -- -- -- -- Voltaren
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 7);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 8);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 9);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 10);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 11);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 12);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 2);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 13);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 14);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (7, 1);
-- -- -- --
-- -- -- -- -- Symbicort
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 15);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 2);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 1);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 5);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 6);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 7);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 16);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 17);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 18);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (8, 19);
-- -- -- --
-- -- -- -- -- Cipralex
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 2);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 3);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 4);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 7);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 24);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 20);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 21);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 22);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 23);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (9, 25);
-- -- -- --
-- -- -- -- -- Diflucan
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 5);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 2);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 7);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 9);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 8);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 4);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 25);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 1);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 11);
-- -- -- -- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (10, 6);
-- -- -- --
-- -- -- NEW DATA
-- INSERT INTO side_effects (name) VALUES ('Allergy reactions');
-- INSERT INTO side_effects (name) VALUES ('Diarrhea');
-- INSERT INTO side_effects (name) VALUES ('Ulcers');
-- INSERT INTO side_effects (name) VALUES ('Renal side effects');
-- INSERT INTO side_effects (name) VALUES ('Inflammation');
-- INSERT INTO side_effects (name) VALUES ('Skin rash');
-- INSERT INTO side_effects (name) VALUES ('Nausea');
-- INSERT INTO side_effects (name) VALUES ('Headache');
-- INSERT INTO side_effects (name) VALUES ('Migraine');
-- INSERT INTO side_effects (name) VALUES ('Toothache');
-- INSERT INTO side_effects (name) VALUES ('Constipation');
-- INSERT INTO side_effects (name) VALUES ('Abdominal bloating');
-- INSERT INTO side_effects (name) VALUES ('Dizziness');
-- INSERT INTO side_effects (name) VALUES ('Tachycardia');
-- INSERT INTO side_effects (name) VALUES ('Blurred vision');
-- INSERT INTO side_effects (name) VALUES ('Swelling');
-- INSERT INTO side_effects (name) VALUES ('Urticaria');
-- INSERT INTO side_effects (name) VALUES ('Ringing in the ears');
-- INSERT INTO side_effects (name) VALUES ('Difficulty swallowing');
-- INSERT INTO side_effects (name) VALUES ('Hives');
-- INSERT INTO side_effects (name) VALUES ('Abdominal pain');
-- INSERT INTO side_effects (name) VALUES ('Diarrhea');
-- INSERT INTO side_effects (name) VALUES ('Cramps');
-- INSERT INTO side_effects (name) VALUES ('Irritation');
-- INSERT INTO side_effects (name) VALUES ('Vomiting');
-- INSERT INTO side_effects (name) VALUES ('Fainting');
-- INSERT INTO side_effects (name) VALUES ('Skin irritation');
-- INSERT INTO side_effects (name) VALUES ('Contact allergy');
-- INSERT INTO side_effects (name) VALUES ('Skin thinning');
-- INSERT INTO side_effects (name) VALUES ('Blood vessel dilation');
-- INSERT INTO side_effects (name) VALUES ('Skin bleeding');
-- INSERT INTO side_effects (name) VALUES ('Skin stretching');
-- INSERT INTO side_effects (name) VALUES ('Acne');
-- INSERT INTO side_effects (name) VALUES ('Oral inflammation');
-- INSERT INTO side_effects (name) VALUES ('Pigment changes');
-- INSERT INTO side_effects (name) VALUES ('Eczema');
-- INSERT INTO side_effects (name) VALUES ('Itching');
-- INSERT INTO side_effects (name) VALUES ('Difficulty breathing');
-- INSERT INTO side_effects (name) VALUES ('Liver damage');
-- INSERT INTO side_effects (name) VALUES ('Jaundice');
-- INSERT INTO side_effects (name) VALUES ('Liver inflammation');
-- INSERT INTO side_effects (name) VALUES ('Liver failure');
-- INSERT INTO side_effects (name) VALUES ('Yellowing skin');
-- INSERT INTO side_effects (name) VALUES ('Dark urine');
-- INSERT INTO side_effects (name) VALUES ('Pale stools');
-- INSERT INTO side_effects (name) VALUES ('Insomnia');
-- INSERT INTO side_effects (name) VALUES ('Hematologic alterations');
--
-- INSERT INTO products (name, brand, description, barcode) VALUES ('Alvedon 500mg', 'Alvedon', 'Pain reliever and fever reducer containing the active ingredient paracetamol', 7046260976108);
-- INSERT INTO products (name, brand, description, barcode) VALUES ('Ipren 400MG', 'Ipren', 'Pain reliever and fever reducer containing ibuprofen as the active ingredient', 7046260885349);
-- INSERT INTO products (name, brand, description, barcode) VALUES ('Dulcolax tablet 30st', 'Dulcolax', 'Tablets for temporary constipation relief and aiding bowel movements, containing bisacodyl', 7046264209929);
-- INSERT INTO products (name, brand, description, barcode) VALUES ('Mildison Lipid 1% cream 15 g', 'Mildison', 'Gentle cortisone for mild eczema from soap, cleansers, cosmetics, insect bites, and sunburns. Vegan', 7350087730363);
-- INSERT INTO products (name, brand, description, barcode) VALUES ('Iberogast oral drops 50 ml', 'Iberogast', 'Herbal medication for relief of symptoms related to sensitive stomach and intestines', 4039581001874);
-- INSERT INTO products (name, brand, description, barcode) VALUES ('ABECE Omeprazol 20 mg 28 capsules', 'ABECE', 'Gastric protector for the short-term management of reflux symptoms such as heartburn and acid regurgitation, acting to diminish gastric acid production', 7350041584865);
--
-- -- Alvedon
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 1);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 2);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 3);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 4);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 5);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 6);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 7);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 8);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 9);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (1, 10);
--
-- -- Ipren
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 11);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 12);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 13);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 14);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 15);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 16);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 6);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 17);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 7);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (2, 18);
--
-- -- Dulcolax
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 16);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 19);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 20);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 7);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 21);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 2);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 22);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 8);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 23);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (3, 24);
--
-- -- Mildison
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 27);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 28);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 29);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 30);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 31);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 32);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 33);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 34);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 35);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (4, 36);
--
-- -- Iberogast
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 6);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 37);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 38);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 39);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 40);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 41);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 42);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 43);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 44);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (5, 45);
--
--
-- -- Omeprazol
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 19);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 6);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 43);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 8);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 21);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 7);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 16);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 46);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 13);
-- INSERT INTO products_side_effect_list (product_id, side_effect_list_id) VALUES (6, 47);

INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '24', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '25', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '26', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '27', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '28', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '7', '29', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '7', '35', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '7', '36', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '8', '33', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '8', '35', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '10', '33', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '1', '33', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '28', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '3', '29', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '25', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '26', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '3', '27', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '28', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '10', '29', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '27', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '28', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '29', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '25', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '26', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '27', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '8', '28', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '33', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '33', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '33', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '33', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '33', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '33', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '33', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '33', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '33', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '33', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '33', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '1', '33', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '7', '33', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '33', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '1', '22', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '10', '34', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '3', '34', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '8', '34', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '73', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '42', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '15', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '87', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '7', '56', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '7', '31', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '7', '94', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '8', '23', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '8', '65', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '10', '76', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '1', '38', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '42', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '3', '18', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '25', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '66', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '3', '77', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '81', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '10', '50', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '99', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '62', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '7', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '38', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '50', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '96', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '8', '12', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '37', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '95', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '2', '3', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '66', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '19', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '4', '81', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '47', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '62', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '35', 'Female');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '44', 'Male');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '6', '57', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '8', '33', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '8', '33', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '8', '33', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '3', '33', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '10', '36', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '3', '34', 'Other');
INSERT INTO reports (product_id, side_effect_id, age, gender) VALUES ('1', '3', '35', 'Other');

-- UPDATE reports SET side_effect_id = 1 WHERE side_effect_id = 9 and age = 26;
-- UPDATE reports SET side_effect_id = 8 WHERE side_effect_id = 2;
-- UPDATE reports SET side_effect_id = 1 WHERE side_effect_id = 10;


