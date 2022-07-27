DROP TABLE "user";

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


INSERT INTO "user" ("username", "password", "avatar", "pronouns", "about", "adminLevel", "name")
VALUES ('derick', 123, 'https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/annie-spratt-oQfSHQ2Uaic-unsplash.jpg', 'he/him', 'Facing his greatest fear, he ate his first marshmallow.', 'instructor', 'derick'),('Tracy', 123, 'https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/bruce-mars-HHXdPG_eTIQ-unsplash.jpg', 'she/her', 'The knives were out and she was sharpening hers.', 'instructor', 'Tracy'),('BobbyDogs', 123, 'https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/graham-mansfield-E8VOttj22s4-unsplash.jpg', 'they/them', 'He stomped on his fruit loops and thus became a cereal killer. I used to practice weaving with spaghetti three hours a day but stopped because I didnt want to die alone.', 'instructor', 'Bobby'),('TrainerTerry', 123, 'https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/jonathan-borba-R0y_bEUjiOM-unsplash.jpg', 'They/Them', 'He dreamed of eating green apples with worms. He created a pig burger out of beef.', 'instructor', 'Terry'),('FabioTheWeightLifter', 123, 'https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/logan-weaver-lgnwvr-sPiMBrdGG9c-unsplash.jpg', 'He/Him', 'He fumbled in the darkness looking for the light switch, but when he finally found it there was someone already there. The llama couldnt resist trying the lemonade.', 'instructor', 'Fabio');


DROP TABLE "tags";

CREATE TABLE "tags" (
	"id" SERIAL PRIMARY KEY,
	"tagName" VARCHAR
);


INSERT INTO "tags" ("tagName")
	VALUES ('LGBTQ Friendly'),('Senior Fitness'),('Body Inclusivity'),('Diverse/POC'),('Low Impact'),
	('Adaptive Fitness'),('Corrective Exercise'),('Sports Injury Recovery'),('Maternity/New Mom'),('Beginner Friendly'),
	('Veterans'),('Chronic Illness'),('Community/Free'),('Outdoor'),('Elite Athletes'); 

DROP TABLE "activities";

CREATE TABLE "activities" (
	"id" SERIAL PRIMARY KEY,
	"activity" VARCHAR(100) 
);

INSERT INTO "activities" ("activity")
	VALUES ('Aerobics'),('Cardio Dance'),('Strength and/or Conditioning'),('Cycling'),('HIIT'),('Yoga'),
	('Sculpt'),('Barre'),('Boot Camp'),('Martial Arts'),('Sports Training'),('Pilates'),('Water Aerobics'),
	('Boxing');

DROP TABLE "userTags";

CREATE TABLE "userTags"(
	"id" SERIAL PRIMARY KEY,
	"userId" int REFERENCES "user",
	"tagId" int REFERENCES "tags"
);

INSERT INTO "userTags" ("userId", "tagId")
VALUES (1,2),(1,3),(1,4),(1,5),(2,1),(2,2),(2,3),(2,10),(2,11),(2,13),(3,5),(3,6),(3,8),(3,7),(3,4),(3,9),(4,2),(4,3),(4,1),(4,11),(4,12),(4,9),(5,1),(5,7),(5,15),(5,14),(5,9);

DROP TABLE "availableClass";

CREATE TABLE "availableClass"(
	"id" SERIAL PRIMARY KEY,
	"instructorId" int REFERENCES "user",
	"dateOfWeek" INTEGER,
	"startTime" TIMESTAMP,
	"location" VARCHAR,
	"activity" VARCHAR
);

INSERT INTO "availableClass"("instructorId", "location")
	VALUES (1, {lin:  } ),(1, 'st.Paul'),(2, 'Winona'), (2, 'The desert'), (3, 'the moon'); 


DROP TABLE "favoriteInstuctor";

CREATE TABLE "favoriteInstuctor" (
	"id" SERIAL PRIMARY KEY,
	"userId" int REFERENCES "user",
	"instructorId" int REFERENCES "user"
);

--test
SELECT  "user".id, "user".username, "availableClass"."location" FROM "user"
	JOIN "availableClass" ON "user".id = "availableClass"."instructorId";
	



--test
SELECT "user".id, "user".username, JSON_AGG("tags"."tagName") as tags, "user".avatar, "user"."adminLevel", "user".facebook, "user".instagram, "user".twitter, "user".website, ARRAY_AGG("availableClass") as classes FROM "user"
	JOIN "userTags" on "userTags"."userId" = "user".id
	JOIN "availableClass" on "availableClass"."instructorId" = "user".id
	JOIN "tags" on "userTags"."tagId" = "tags".id
	WHERE "tags".id IN (1,2,3,4) 
	GROUP BY "user".id
	HAVING count(*) >= 1
	ORDER BY count(tags) DESC;

--Test
SELECT "availableClass".location, "user".username, "user".id FROM "user"
JOIN  "availableClass" ON "availableClass"."instructorId" = "user".id
	WHERE "user".id IN (1,2,3,4);


--test

SELECT "user".id, "user".username, JSON_AGG("tags"."tagName") as tags, "user".avatar, "user"."adminLevel", "user".facebook, "user".instagram, "user".twitter, "user".website  FROM "user"
	JOIN "userTags" on "userTags"."userId" = "user".id
	JOIN "tags" on "userTags"."tagId" = "tags".id
	WHERE "tags".id IN (1,2 ,15)
	GROUP BY "user".id
	HAVING count(*) >= 1
	ORDER BY count(tags) DESC;
	
--test

SELECT "user".id,  JSON_AGG("tags"."tagName") , JSON_AGG("availableClass".location) FROM "user"
JOIN "userTags" ON "user".id = "userTags"."userId"
JOIN "availableClass" on "availableClass"."instructorId" = "user".id
JOIN "tags" ON "tags".id = "userTags"."tagId"
WHERE "tags".id IN (15, 11, 10, 2) 
	GROUP BY "user".id
	HAVING count(tags) >= 1
	ORDER BY count("tags") DESC;

--test
SELECT "user".id, "user".username, JSON_AGG("tags"."tagName") as tags, "user".avatar, "user"."adminLevel", "user".facebook, "user".instagram, "user".twitter, "user".website, JSON_AGG("availableClass".location)  FROM "user"
	JOIN "userTags" on "userTags"."userId" = "user".id
	JOIN "availableClass" on "availableClass"."instructorId" = "user".id
	JOIN "tags" on "userTags"."tagId" = "tags".id
	WHERE "tags".id IN (1,2 ,15)
	GROUP BY "user".id
	HAVING count(*) >= 1
	ORDER BY count(tags) DESC;
