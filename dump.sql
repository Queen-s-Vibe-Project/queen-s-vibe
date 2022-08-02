--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: activities; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public.activities (
    id integer NOT NULL,
    activity character varying(100)
);


ALTER TABLE public.activities OWNER TO alex;

--
-- Name: activities_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public.activities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.activities_id_seq OWNER TO alex;

--
-- Name: activities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public.activities_id_seq OWNED BY public.activities.id;


--
-- Name: availableClass; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."availableClass" (
    id integer NOT NULL,
    "instructorId" integer,
    "dateOfWeek" character varying[],
    description character varying,
    "startTime" character varying,
    location character varying,
    lat double precision,
    lng double precision,
    "activityId" integer
);


ALTER TABLE public."availableClass" OWNER TO alex;

--
-- Name: availableClass_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public."availableClass_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."availableClass_id_seq" OWNER TO alex;

--
-- Name: availableClass_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public."availableClass_id_seq" OWNED BY public."availableClass".id;


--
-- Name: favoriteInstuctor; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."favoriteInstuctor" (
    id integer NOT NULL,
    "userId" integer,
    "instructorId" integer
);


ALTER TABLE public."favoriteInstuctor" OWNER TO alex;

--
-- Name: favoriteInstuctor_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public."favoriteInstuctor_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."favoriteInstuctor_id_seq" OWNER TO alex;

--
-- Name: favoriteInstuctor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public."favoriteInstuctor_id_seq" OWNED BY public."favoriteInstuctor".id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    "tagName" character varying
);


ALTER TABLE public.tags OWNER TO alex;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tags_id_seq OWNER TO alex;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    avatar character varying,
    name character varying NOT NULL,
    pronouns character varying,
    about character varying,
    "adminLevel" character varying,
    instagram character varying,
    facebook character varying,
    twitter character varying,
    website character varying
);


ALTER TABLE public."user" OWNER TO alex;

--
-- Name: userClass; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."userClass" (
    id integer NOT NULL,
    "userId" integer,
    "instructorId" integer,
    "classId" integer,
    date character varying,
    "startTime" character varying
);


ALTER TABLE public."userClass" OWNER TO alex;

--
-- Name: userClass_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public."userClass_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."userClass_id_seq" OWNER TO alex;

--
-- Name: userClass_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public."userClass_id_seq" OWNED BY public."userClass".id;


--
-- Name: userTags; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."userTags" (
    id integer NOT NULL,
    "userId" integer,
    "tagId" integer
);


ALTER TABLE public."userTags" OWNER TO alex;

--
-- Name: userTags_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public."userTags_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."userTags_id_seq" OWNER TO alex;

--
-- Name: userTags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public."userTags_id_seq" OWNED BY public."userTags".id;


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO alex;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: activities id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.activities ALTER COLUMN id SET DEFAULT nextval('public.activities_id_seq'::regclass);


--
-- Name: availableClass id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."availableClass" ALTER COLUMN id SET DEFAULT nextval('public."availableClass_id_seq"'::regclass);


--
-- Name: favoriteInstuctor id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."favoriteInstuctor" ALTER COLUMN id SET DEFAULT nextval('public."favoriteInstuctor_id_seq"'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Name: userClass id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."userClass" ALTER COLUMN id SET DEFAULT nextval('public."userClass_id_seq"'::regclass);


--
-- Name: userTags id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."userTags" ALTER COLUMN id SET DEFAULT nextval('public."userTags_id_seq"'::regclass);


--
-- Data for Name: activities; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public.activities (id, activity) FROM stdin;
1	Aerobics
2	Cardio Dance
3	Strength and/or Conditioning
4	Cycling
5	HIIT
6	Yoga
7	Sculpt
8	Barre
9	Boot Camp
10	Martial Arts
11	Sports Training
12	Pilates
13	Water Aerobics
14	Boxing
\.


--
-- Data for Name: availableClass; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."availableClass" (id, "instructorId", "dateOfWeek", description, "startTime", location, lat, lng, "activityId") FROM stdin;
1	5	{monday,tuesday,wednesday}	lemons	12:04	5800 Saint Croix Avenue North, Minneapolis, MN, USA	44.9972025	-93.3530296	10
5	16	{monday,thursday,saturday}	Nope	16:00	The Armory, South 6th Street, Minneapolis, MN, USA	44.9752	-93.2635	9
3	5	{monday,wednesday,saturday}	This is also a class	16:00	715 South 8th Street, Minneapolis, MN, USA	44.9711612	-93.2632212	13
4	5	{monday,wednesday,saturday,friday}	Class for teens	18:00	680 North 2nd Street, Minneapolis, MN, USA	44.9887643	-93.2755069	7
2	5	{monday,wednesday}	Dragon Fruit	10:00	913 East 26th Street, Minneapolis, MN, USA	44.9551805	-93.260902	10
\.


--
-- Data for Name: favoriteInstuctor; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."favoriteInstuctor" (id, "userId", "instructorId") FROM stdin;
1	16	2
4	16	2
5	16	2
2	16	2
3	16	2
6	16	2
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public.tags (id, "tagName") FROM stdin;
1	LGBTQ Friendly
2	Senior Fitness
3	Body Inclusivity
4	Diverse/POC
5	Low Impact
6	Adaptive Fitness
7	Corrective Exercise
8	Sports Injury Recovery
9	Maternity/New Mom
10	Beginner Friendly
11	Veterans
12	Chronic Illness
13	Community/Free
14	Outdoor
15	Elite Athletes
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."user" (id, username, password, avatar, name, pronouns, about, "adminLevel", instagram, facebook, twitter, website) FROM stdin;
1	derick	123	https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/annie-spratt-oQfSHQ2Uaic-unsplash.jpg	derick	he/him	Facing his greatest fear, he ate \t  his first marshmallow.	instructor	\N	\N	\N	\N
2	Tracy	123	https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/bruce-mars-HHXdPG_eTIQ-unsplash.jpg	Tracy	she/her	The knives were out and she was sharpening hers.	instructor	\N	\N	\N	\N
3	BobbyDogs	123	https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/graham-mansfield-E8VOttj22s4-unsplash.jpg	Bobby	they/them	He stomped on his fruit loops and thus became a cereal killer. I used to practice weaving with spaghetti three hours a day but stopped because I didnt want to die alone.	instructor	\N	\N	\N	\N
4	TrainerTerry	123	https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/jonathan-borba-R0y_bEUjiOM-unsplash.jpg	Terry	They/Them	He dreamed of eating green apples with worms. He created a pig burger out of beef.	instructor	\N	\N	\N	\N
5	FabioTheWeightLifter	123	https://queenvibesprofilephotos.s3.us-east-2.amazonaws.com/uploads/logan-weaver-lgnwvr-sPiMBrdGG9c-unsplash.jpg	Fabio	He/Him	He fumbled in the darkness looking for the light switch, but when he finally found it there was someone already there. The llama couldnt resist trying the lemonade.	instructor	\N	\N	\N	\N
6	Cammy	123		Cammy White	She/her		gym-goer	\N	\N	\N	\N
7	Joey	123		Joey Storm	He/Him		gym-goer	\N	\N	\N	\N
8	Neil	123		Neil Gaiman	He/Him		gym-goer	\N	\N	\N	\N
9	Sara	123		Sara Griffin	She/her		gym-goer	\N	\N	\N	\N
10	alexanderratanas@gmail.com	$2a$10$q/LfIRqLYuwyBTMqFCMdmuDY9epkCJS/I2buw9wBJiBh2PdQTYYAq	\N	Alexander Ratanas	He/Him	\N		\N	\N	\N	\N
11	BAdaTtyPing	$2a$10$jTt7Ylk.bBuIr9ZYDhV57u20e5.gQWuxF7a1hWzmMx0IFBPdQcEp.	\N	Alyssa Garcia	He/Him	\N	instructor	\N	\N	\N	\N
12	BobbyDogs@hotmail.com	$2a$10$Id8//nbLzs5EsqzxczTdDeHpP9EdudQwa/X/vKD1r7PS/481cB1Q.	\N	lemons	He/Him	\N	gym-goer	\N	\N	\N	\N
13	TreyHotDog@gmail.com	$2a$10$D8jFqrWT8zkCAVMXtCnuXuk/SvoUQYmwNk3VxBY.zjeWeu.nxKSze	\N	Alexander T Ratanas	He/Him	\N	instructor	\N	\N	\N	\N
14	this is a movie title	$2a$10$dKmoJX8cI5SX7/gCEABb9uD8H.LMaeLvuyg/APvBmnWNSsQ0HUtFe	\N	Alex	doooode	\N	instructor	\N	\N	\N	\N
15	Bobby	$2a$10$QwueWLcSGrYxw.3t0lEhAuMvIXGOfNM1stu0qSF6dF7kEn3QR2g66	https://queen-vibes-avatar-upload.s3.amazonaws.com/uploads/avatar/images/9f90abae-d276-4119-a16b-894219614c59-8d5f3e31-aa81-43c7-9381-604472bb402c-1a1c317d-1ddf-463b-bc16-a5189f8b0ac1-75379746_161769521882305_2115237172117148041_n%20%281%29%20%281%29.jpeg	Bobby dolittle	us	\N	instructor	\N	\N	\N	\N
16	Senior Chang	$2a$10$PgT2HqhGiIuXIrL5ADnHk.v0wLN.htLztH9K5dEdbunhfGp6Ssfta	https://queen-vibes-avatar-upload.s3.amazonaws.com/uploads/avatar/images/91a2c908-3824-4ac6-b021-4b361f2cdf87-8d5f3e31-aa81-43c7-9381-604472bb402c-1a1c317d-1ddf-463b-bc16-a5189f8b0ac1-75379746_161769521882305_2115237172117148041_n%20%281%29.jpeg	Bobby	he/him	\N	instructor	\N	\N	\N	\N
\.


--
-- Data for Name: userClass; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."userClass" (id, "userId", "instructorId", "classId", date, "startTime") FROM stdin;
\.


--
-- Data for Name: userTags; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."userTags" (id, "userId", "tagId") FROM stdin;
55	1	2
56	1	3
57	1	4
58	1	5
59	2	1
60	2	2
61	2	3
62	2	10
63	2	11
64	2	13
65	3	5
66	3	6
67	3	8
68	3	7
69	3	4
70	3	9
71	4	2
72	4	3
73	4	1
74	4	11
75	4	12
76	4	9
77	5	1
78	5	7
79	5	15
80	5	14
81	5	9
82	6	2
83	6	3
84	6	4
85	6	5
86	2	1
87	2	2
88	7	3
89	7	10
90	7	11
91	7	13
92	8	5
93	8	6
94	8	8
95	8	7
96	8	4
97	8	9
98	9	2
99	9	3
100	9	1
101	9	11
102	9	12
103	9	9
104	10	4
105	11	5
106	12	3
107	13	5
108	13	11
109	13	3
110	14	5
111	15	3
112	16	6
113	16	2
114	16	2
115	16	2
116	16	2
\.


--
-- Name: activities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public.activities_id_seq', 14, true);


--
-- Name: availableClass_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public."availableClass_id_seq"', 5, true);


--
-- Name: favoriteInstuctor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public."favoriteInstuctor_id_seq"', 6, true);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public.tags_id_seq', 15, true);


--
-- Name: userClass_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public."userClass_id_seq"', 1, false);


--
-- Name: userTags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public."userTags_id_seq"', 116, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public.user_id_seq', 16, true);


--
-- Name: activities activities_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_pkey PRIMARY KEY (id);


--
-- Name: availableClass availableClass_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."availableClass"
    ADD CONSTRAINT "availableClass_pkey" PRIMARY KEY (id);


--
-- Name: favoriteInstuctor favoriteInstuctor_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."favoriteInstuctor"
    ADD CONSTRAINT "favoriteInstuctor_pkey" PRIMARY KEY (id);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: userClass userClass_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."userClass"
    ADD CONSTRAINT "userClass_pkey" PRIMARY KEY (id);


--
-- Name: userTags userTags_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."userTags"
    ADD CONSTRAINT "userTags_pkey" PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- Name: availableClass availableClass_instructorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."availableClass"
    ADD CONSTRAINT "availableClass_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES public."user"(id);


--
-- Name: favoriteInstuctor favoriteInstuctor_instructorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."favoriteInstuctor"
    ADD CONSTRAINT "favoriteInstuctor_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES public."user"(id);


--
-- Name: favoriteInstuctor favoriteInstuctor_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."favoriteInstuctor"
    ADD CONSTRAINT "favoriteInstuctor_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."user"(id);


--
-- Name: userClass userClass_classId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."userClass"
    ADD CONSTRAINT "userClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES public.activities(id);


--
-- Name: userClass userClass_instructorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."userClass"
    ADD CONSTRAINT "userClass_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES public."user"(id);


--
-- Name: userClass userClass_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."userClass"
    ADD CONSTRAINT "userClass_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."user"(id);


--
-- Name: userTags userTags_tagId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."userTags"
    ADD CONSTRAINT "userTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES public.tags(id);


--
-- Name: userTags userTags_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."userTags"
    ADD CONSTRAINT "userTags_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

