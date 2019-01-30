insert into users (id, created_at, name) values
	(1, (now() - interval '175 days, 5 hours'), 'Alice'),
	(2, (now() - interval '154 days, 7 hours'), 'Bob'),
	(3, (now() - interval '124 days, 1 hours'), 'Carl'),
	(4, (now() - interval '101 days, 4 hours'), 'Daphne'),
	(5, (now() - interval '89 days, 6 hours'), 'Evan'),
	(6, (now() - interval '75 days, 2 hours'), 'Fabia')
;

insert into companies (id, created_at, name) values
	(1, (now() - interval '250 days'), 'Facewall'),
	(2, (now() - interval '300 days, 2 hours'), 'Company & Co')
;

insert into teams (company_id, user_id, contact_user) values
	(1, 1, TRUE),
	(2, 2, FALSE),
	(2, 4, TRUE)
;

insert into listings (id, created_at, created_by, name, description) values
	(1, (now() - interval '197 days'), 1, 'Join us conquering the world!', 'This is your best chance to be on the right side of the equation...'),
	(2, (now() - interval '22 days'), 1, 'Join us saving the world!', 'Come here in and save the world...'),
	(3, (now() - interval '67 days'), 1, 'Join us re-building the world!', 'All we want is change the way as we are living...'),
	(4, (now() - interval '113 days'), 1, 'Join us improving the world!', 'This is your best chance to improve the life of everyone...'),
	(5, (now() - interval '177 days'), 1, 'Join us destroying the world!', 'This is your best to join to the dark side...'),
	(6, (now() - interval '97 days'), 1, 'Join us renewing the world!', 'Lets renew the planet where we live...')
;

insert into applications (id, created_at, user_id, listing_id, cover_letter) values
	(1, (now() - interval '3 days'), 2, 1, 'Hello, I am Bob'),
	(2, (now() - interval '2 days'), 2, 2, 'Hello, I am Bob'),
	(3, (now() - interval '5 days'), 2, 3, 'Hello, I am Bob'),
	(4, (now() - interval '6 days'), 5, 4, 'Hello, I am Evan'),
	(5, (now() - interval '19 days'), 5, 5, 'Hello, I am Evan'),
	(6, (now() - interval '20 days'), 5, 6, 'Hello, I am Evan'),
	(7, (now() - interval '4 days'), 5, 1, 'Hello, I am Evan')
;