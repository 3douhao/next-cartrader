--up

-- faq
CREATE TABLE faq (
    id integer PRIMARY KEY AUTOINCREMENT,
    question text,
    answer text,
    createDate date
);

INSERT INTO faq (question, answer, createDate)
    VALUES ('How to be safe buying online?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo', DATE('2019-11-01'));

INSERT INTO faq (question, answer, createDate)
    VALUES ('Do I have any assurance on my new car?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo', DATE('2020-11-01'));

INSERT INTO faq (question, answer, createDate)
    VALUES ('How many kilometers a normal car can have?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo', DATE('2018-11-01'));

INSERT INTO faq (question, answer, createDate)
    VALUES ('What is the best month to buy a car?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo', DATE('2018-11-01'));

INSERT INTO faq (question, answer, createDate)
    VALUES ('How to know the car history?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo', DATE('2018-11-01'));

INSERT INTO faq (question, answer, createDate)
    VALUES ('How much do I pay a month to use the service?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo', DATE('2018-11-01'));

-- CAR
CREATE TABLE car (
    id integer PRIMARY KEY AUTOINCREMENT,
    make text,
    model text,
    year integer,
    fuelType text,
    kilometers integer,
    details text,
    price integer,
    photoUrl text
);

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Audi', 'A2', 2003, 123456, 'Petrol', 8199, '/photos/cars/audi-a2-2003-8199.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('BMW', '116', 2013, 1231231, 'Petrol', 12999, '/photos/cars/bmw-116-d-line-urban-2013.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('BMW', '320', 2009, 655656, 'Petrol', 18999, '/photos/cars/bmw-320-2009-18000.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('BMW', 'x1', 2012, 565656, 'Diesel', 24000, '/photos/cars/bmw-x1-2012-24999.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Ford', 'Fiesta', 2008, 433444, 'Petrol', 5590, '/photos/cars/ford-fiesta-2008-5950.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Ford', 'Fiesta', 2014, 343434, 'Petrol', 9950, '/photos/cars/ford-fiesta-2014-9950.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Mazda', '6', 2015, 343411, 'Petrol', 21000, '/photos/cars/mazda-6-2015.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Merces-Benz', '200', 2015, 111111, 'Petrol', 24999, '/photos/cars/mercedes-benz-200-2015-24999.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Merces-Benz', 'e250', 2011, 123443, 'Diesel', 29800, '/photos/cars/mercedes-benz-e250-2011-29800.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Peugeot', '3008', 2014, 77000, 'Petrol', 18999, '/photos/cars/peugeot-3008-2014-17999.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Renault', 'Clio', 2017, 123133, 'Diesel', 13485, '/photos/cars/renault-clio-2017-13485.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Renault', 'Espace', 2004, 123123, 'Petrol', 9800, '/photos/cars/renault-espace-2004.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Renault', 'Megane IV', 2016, 123123, 'Diesel', 15890, '/photos/cars/renault-megane-2016-15890.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Seat', 'Leon', 2010, 44444, 'Diesel', 13650, '/photos/cars/seat-leon-2010-13650.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Smart', 'for two', 2008, 5534, 'Diesel', 5800, '/photos/cars/smart-fortwo-2008-5800.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Smart', 'for two', 2012, 43434, 'Diesel', 7950, '/photos/cars/smart-fortwo-2012-7950.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Smart', 'for two', 2003, 343434, 'Diesel', 8850, '/photos/cars/smart-fortwo-passion-2003-8888.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Smart', 'for two', 2015, 343434, 'Diesel', 11500, '/photos/cars/smart-fortwo-passion-2015-11500.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Volkswagen', 'EOS', 2008, 343434, 'Diesel', 14700, '/photos/cars/volkswagen-eos-2008-14700.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Volkswagen', 'Golf', 2013, 123123, 'Diesel', 18300, '/photos/cars/volkswagen-golf-2013-18300.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO car (make, model, year, kilometers, fuelType, price, photoUrl, details)
    VALUES ('Volkswagen', 'Tiguan', 2007, 1231234, 'Petrol', 14299, '/photos/cars/volkswagen-tiguan-2007-14299.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- TAG
CREATE TABLE tag (
    id integer PRIMARY KEY AUTOINCREMENT,
    sellPoint text,
    hex text
);

INSERT INTO tag (sellPoint, hex)
    VALUES ('urgent', '#ef5350');

INSERT INTO tag (sellPoint, hex)
    VALUES ('good deal', '#4caf50');

INSERT INTO tag (sellPoint, hex)
    VALUES ('like new', '#2196f3');

-- CAR-TAG
CREATE TABLE car_tag (
    car_id integer,
    tag_id integer,
    FOREIGN KEY (car_id) REFERENCES Car (id),
    FOREIGN KEY (tag_id) REFERENCES Tag (id)
);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (1, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (1, 2);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (1, 3);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (2, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (2, 2);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (3, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (4, 3);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (5, 2);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (6, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (6, 2);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (6, 3);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (7, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (7, 2);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (8, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (9, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (10, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (10, 2);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (11, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (11, 2);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (11, 3);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (12, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (13, 3);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (14, 2);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (15, 3);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (16, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (16, 2);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (16, 3);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (17, 2);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (17, 3);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (18, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (19, 3);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (20, 1);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (21, 2);

INSERT INTO car_tag (car_id, tag_id)
    VALUES (21, 3);

-- Down
DROP TABLE car_tag;

DROP TABLE tag;

DROP TABLE car;

DROP TABLE faq;

