--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

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
-- Name: plates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.plates (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    price integer NOT NULL,
    description text,
    "cookingTime" integer NOT NULL,
    type character varying(50) NOT NULL
);


--
-- Name: plates_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.plates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: plates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.plates_id_seq OWNED BY public.plates.id;


--
-- Name: plates id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plates ALTER COLUMN id SET DEFAULT nextval('public.plates_id_seq'::regclass);


--
-- Data for Name: plates; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.plates VALUES (3, 'maria', 2190, 'teste-maria', 20, 'sobremesa');
INSERT INTO public.plates VALUES (4, 'dsdadd', 1233, 'teste-dadaf', 10, 'sobremesa');
INSERT INTO public.plates VALUES (6, 'teste-dadaf2', 1233, 'teste-dadaf', 10, 'sobremesa');
INSERT INTO public.plates VALUES (9, 'pinguim', 2190, 'teste-pinguim', 20, 'entrada');
INSERT INTO public.plates VALUES (13, 'pinguim2', 2190, 'teste-pinguim', 20, 'entrada');
INSERT INTO public.plates VALUES (15, 'pinguim-teste-service', 2190, 'teste-pinguim', 20, 'entrada');
INSERT INTO public.plates VALUES (17, 'pinguim-teste-service-agora-sim', 2190, 'teste-pinguim', 20, 'entrada');
INSERT INTO public.plates VALUES (18, 'pinm', 2190, 'teste-pinguim', 20, 'entrada');
INSERT INTO public.plates VALUES (20, 'frango editado', 2190, 'teste-pinguim', 20, 'prato principal');
INSERT INTO public.plates VALUES (21, 'frango editado 2', 2190, 'teste-pinguim', 20, 'entrada');
INSERT INTO public.plates VALUES (22, 'frango testando nre post', 2190, 'teste-pinguim', 20, 'entrada');
INSERT INTO public.plates VALUES (23, 'yohohoho', 2190, 'teste-pinguim', 50, 'prato principal');


--
-- Name: plates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.plates_id_seq', 23, true);


--
-- Name: plates plates_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plates
    ADD CONSTRAINT plates_name_key UNIQUE (name);


--
-- Name: plates plates_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plates
    ADD CONSTRAINT plates_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

