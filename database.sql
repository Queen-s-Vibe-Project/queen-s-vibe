DROP TABLE "user";

-- user table
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR NOT NULL  UNIQUE,
	"password" VARCHAR NOT NULL ,
	"avatar" VARCHAR,
	"name"  VARCHAR NOT NULL,
	"pronouns" VARCHAR,
	"about" VARCHAR,
	"adminLevel" VARCHAR,
	"instagram" VARCHAR,
	"facebook" VARCHAR,
	"twitter" VARCHAR,
	"website" VARCHAR
);

-- user insert
INSERT INTO "user" ("username", "password", "avatar", "pronouns", "about", "adminLevel", "name")
	VALUES 
	  ('derick', 123, 'https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/annie-spratt-oQfSHQ2Uaic-unsplash.jpg', 'he/him', 'Facing his greatest fear, he ate 	  his first marshmallow.', 'instructor', 'derick'),
	  ('Tracy', 123, 'https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/bruce-mars-HHXdPG_eTIQ-unsplash.jpg', 'she/her', 'The knives were out and she was sharpening hers.', 'instructor', 'Tracy'),
	  ('BobbyDogs', 123, 'https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/graham-mansfield-E8VOttj22s4-unsplash.jpg', 'they/them', 'He stomped on his fruit loops and thus became a cereal killer. I used to practice weaving with spaghetti three hours a day but stopped because I didnt want to die alone.', 'instructor', 'Bobby'),
	  ('TrainerTerry', 123, 'https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/jonathan-borba-R0y_bEUjiOM-unsplash.jpg', 'They/Them', 'He dreamed of eating green apples with worms. He created a pig burger out of beef.', 'instructor', 'Terry'),
	  ('FabioTheWeightLifter', 123, 'https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/logan-weaver-lgnwvr-sPiMBrdGG9c-unsplash.jpg', 'He/Him', 'He fumbled in the darkness looking for the light switch, but when he finally found it there was someone already there. The llama couldnt resist trying the lemonade.', 'instructor', 'Fabio'),
	  ('Cammy',123,'','She/her','', 'gym-goer','Cammy White'),('Joey',123,'','He/Him','', 'gym-goer','Joey Storm'),('Neil',123,'','He/Him','', 'gym-goer','Neil Gaiman'),('Sara',123,'','She/her','', 'gym-goer','Sara Griffin');

------------------------------


DROP TABLE "tags";

-- tags table
CREATE TABLE "tags" (
	"id" SERIAL PRIMARY KEY,
	"tagName" VARCHAR
);

-- insert tags
INSERT INTO "tags" ("tagName")
	VALUES ('LGBTQ Friendly'),('Senior Fitness'),('Body Inclusivity'),('Diverse/POC'),('Low Impact'),
	('Adaptive Fitness'),('Corrective Exercise'),('Sports Injury Recovery'),('Maternity/New Mom'),('Beginner Friendly'),
	('Veterans'),('Chronic Illness'),('Community/Free'),('Outdoor'),('Elite Athletes'); 

------------------------------

DROP TABLE "activities";

-- activites table 
CREATE TABLE "activities" (
	"id" SERIAL PRIMARY KEY,
	"activity" VARCHAR(100) 
);

-- activite insert
INSERT INTO "activities" ("activity")
	VALUES 
		('Aerobics'),('Cardio Dance'),('Strength and/or Conditioning'),('Cycling'),('HIIT'),('Yoga'),
		('Sculpt'),('Barre'),('Boot Camp'),('Martial Arts'),('Sports Training'),('Pilates'),('Water Aerobics'), ('Boxing')
;


----------------------------

DROP TABLE "userTags";

-- userTags
CREATE TABLE "userTags"(
	"id" SERIAL PRIMARY KEY,
	"userId" int REFERENCES "user",
	"tagId" int REFERENCES "tags"
);

-- insert userTags
INSERT INTO "userTags" ("userId", "tagId")
VALUES (1,2),(1,3),(1,4),(1,5),(2,1),(2,2),(2,3),(2,10),(2,11),(2,13),(3,5),(3,6),(3,8),(3,7),(3,4),(3,9),(4,2),(4,3),(4,1),(4,11),(4,12),(4,9),(5,1),(5,7),(5,15),(5,14),(5,9),(6,2),(6,3),(6,4),(6,5),(2,1),(2,2),
(7,3),(7,10),(7,11),(7,13),(8,5),(8,6),(8,8),(8,7),(8,4),(8,9),(9,2),(9,3),(9,1),(9,11),(9,12),(9,9),(10,1),(10,7),(10,15),(10,14),(10,9);


-----------------------
DROP TABLE "availableClass";

CREATE TABLE "availableClass"(
	"id" SERIAL PRIMARY KEY,
	"instructorId" int REFERENCES "user",
	"dateOfWeek" VARCHAR,
	"startTime" VARCHAR,
	"location" VARCHAR,
	"activityId" INT
);

---------------
DROP TABLE "favoriteInstuctor";

CREATE TABLE "favoriteInstuctor" (
	"id" SERIAL PRIMARY KEY,
	"userId" int REFERENCES "user",
	"instructorId" int REFERENCES "user"
);

--------------
CREATE TABLE "userClass" (
	"id" SERIAL PRIMARY KEY,
	"userId" int REFERENCES "user",
	"instructorId" int REFERENCES "user",
	"classId" int REFERENCES "activities",
	"date" VARCHAR,
	"startTime" VARCHAR
);

-- How to get classes userId
SELECT "userClass".id, "userClass".date, "userClass"."startTime", "user".name, "activities".activity  FROM "userClass"
JOIN "user" on "user".id = "userClass"."instructorId"
JOIN "activities" ON "activities".id = "userClass"."classId"
WHERE "userClass"."userId" = 4;

--How to get recommend instructor
SELECT "user".name, "user".pronouns , "tags"."tagName" FROM "user"
JOIN "userTags" on "user".id = "userTags"."userId"
JOIN "tags" on "tags".id = "userTags"."tagId"
WHERE "user"."adminLevel" = 'instructor' AND "tags"."tagName" =  'Senior Fitness'
GROUP BY "user".name, "user".pronouns, "tags"."tagName";

--Get Gym Goer Tags
SELECT "tags"."tagName" FROM "userTags"
JOIN "tags" on "tags".id = "userTags"."tagId" 
WHERE "userTags"."userId" = 4;

--How to get user's fav n instructor
Select "favoriteInstuctor".id, "favoriteInstuctor"."instructorId", "user".name, "user".pronouns, "user".instagram, "user".facebook, "user".twitter, JSON_agg("tags"."tagName") as "tags"  FROM "favoriteInstuctor"
JOIN "user" on "user".id ="favoriteInstuctor"."instructorId"
JOIN "userTags" on "userTags"."userId" = "user".id
JOIN "tags" on "tags".id = "userTags"."tagId"
WHERE "favoriteInstuctor"."userId" = 4
GROUP BY "favoriteInstuctor".id, "favoriteInstuctor"."instructorId", "user".name, "user".pronouns, "user".instagram, "user".facebook, "user".twitter;
