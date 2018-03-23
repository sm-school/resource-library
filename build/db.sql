CREATE TABLE site (
	id SERIAL,
	url VARCHAR(1000) UNIQUE NOT NULL,
	title VARCHAR(250) NOT NULL,
	description VARCHAR(1000) NOT NULL,
	thumbnail BYTEA,
	saved TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE tag (
	id SERIAL,
	name VARCHAR(100) UNIQUE NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE site_tag (
	id SERIAL,
	site_id INT NOT NULL,
	tag_id INT NOT NULL,
	FOREIGN KEY (site_id) REFERENCES site (id),
	FOREIGN KEY (tag_id) REFERENCES tag (id),
	UNIQUE (site_id, tag_id),
	PRIMARY KEY (id)
);