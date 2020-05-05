-- Food table
CREATE TABLE IF NOT EXISTS food(
	id SERIAL PRIMARY KEY,
	category_id INTEGER,
	name TEXT,
	description TEXT,
	mass TEXT,
	amount INTEGER,
	price TEXT,
	expiry DATE
	);

-- Table that user will create
CREATE TABLE IF NOT EXISTS category(
	id SERIAL PRIMARY KEY,
	name TEXT
	);