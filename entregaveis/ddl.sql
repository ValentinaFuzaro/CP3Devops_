CREATE TABLE Medicos (
    id INT PRIMARY KEY,
    doc_crm VARCHAR(20) NOT NULL,
    doc_name VARCHAR(255) NOT NULL,
    login VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE Exames (
    id INT PRIMARY KEY,
    doc_crm VARCHAR(20) NOT NULL,
    doc_num VARCHAR(255),
    nome_exame VARCHAR(255) NOT NULL,
    permission BOOLEAN
);
