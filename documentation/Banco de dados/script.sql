-- =========================================================
-- BANCO DE DADOS - Exemplo
-- SCRIPT LIMPO PARA PRIMEIRA EXECUÇÃO
-- =========================================================
DROP DATABASE IF EXISTS db_exemplo;
CREATE DATABASE db_exemplo;
USE db_exemplo;
-- =========================================================
-- TABELAS BASE
-- =========================================================
CREATE TABLE tbl_usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    cpf VARCHAR(11) UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL
);
   
CREATE TABLE tbl_endereco (
    id_endereco INT PRIMARY KEY AUTO_INCREMENT,
    cep VARCHAR(8) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    logradouro VARCHAR(100) NOT NULL,
    numero VARCHAR(4) NOT NULL,
    complemento VARCHAR(100),
    fk_usuario INT,
    CONSTRAINT fk_endereco_usuario FOREIGN KEY (fk_usuario) REFERENCES tbl_usuario(id_usuario)
);

-- =========================================================
-- INSERT's
-- =========================================================
INSERT INTO tbl_usuario (
    nome,
    email,
    telefone,
    cpf,
    senha,
    data_nascimento
)
VALUES
(
    'kauan',
    'kauan.lopes02@hotmail.com',
    '40028922',
    '38748497835',
    '123',
    '2002-12-02'
);

INSERT INTO tbl_endereco (
    cep,
    uf,
    cidade,
    bairro,
    logradouro,
    numero,
    fk_usuario
)
VALUES
(
    '06436065',
    'sp',
    'Barueri',
    'Parque dos Camargos',
    'Bloco 7 ap 51',
    '40',
    1
);