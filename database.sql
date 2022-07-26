
-- Database name is 'vibes-database'
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(80) NOT NULL  UNIQUE,
	"password" VARCHAR(80) NOT NULL ,
	"avatar" VARCHAR(100),
	"name"  VARCHAR(100) NOT NULL,
	"pronouns" VARCHAR(100),
	"about" VARCHAR(100),
	"adminLevel" INTEGER ,
	"instagram" VARCHAR(100),
	"facebook" VARCHAR(100),
	"twitter" VARCHAR(100),
	"website" VARCHAR(100)
);

CREATE TABLE "tags" (
	"id" SERIAL PRIMARY KEY,
	"tagName" VARCHAR
);

INSERT INTO "tags" ("tagName")
	VALUES ('LGBTQ Friendly'),('Senior Fitness'),('Body Inclusivity'),('Diverse/POC'),('Low Impact'),
	('Adaptive Fitness'),('Corrective Exercise'),('Sports Injury Recovery'),('Maternity/New Mom'),('Beginner Friendly'),
	('Veterans'),('Chronic Illness'),('Community/Free'),('Outdoor'),('Elite Athletes'); 

CREATE TABLE "activities" (
	"id" SERIAL PRIMARY KEY,
	"activity" VARCHAR(100) 
);

INSERT INTO "activities" ("activity")
	Values ('Aerobics'),('Cardio Dance'),('Strength and/or Conditioning'),('Cycling'),('HIIT'),('Yoga'),
	('Sculpt'),('Barre'),('Boot Camp'),('Martial Arts'),('Sports Training'),('Pilates'),('Water Aerobics'),
	('Boxing');


CREATE TABLE "userTags"(
	"id" SERIAL PRIMARY KEY,
	"userId" int REFERENCES "user",
	"tagId" int REFERENCES "tags"
);

CREATE TABLE "availableClass"(
	"id" SERIAL PRIMARY KEY,
	"instructorId" int REFERENCES "user",
	"dateOfWeek" INTEGER,
	"startTime" TIMESTAMP,
	"location" VARCHAR(200),
	"activityId" int REFERENCES "activities"
);

CREATE TABLE "favoriteInstuctor" (
	"id" SERIAL PRIMARY KEY,
	"userId" int REFERENCES "user",
	"instructorId" int REFERENCES "user"
)
