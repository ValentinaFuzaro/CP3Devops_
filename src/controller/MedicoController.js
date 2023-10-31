import sql from 'mssql'
import db from '../config/db.js'

class MedicoController{

    static async getAll(req, res) {
        try {
            await sql.connect(db);

            const result = await sql.query('SELECT * FROM medico');

            res.json(result.recordset);
        } catch (err) {
            console.error('Erro de conexão:', err);
            res.status(500).send('Erro de conexão com o banco de dados');
        }
    }

    static async create(req, res) {

        const { doc_crm, doc_name, login, senha } = req.body;

        await sql.connect(db);

        const result = await sql.query`INSERT INTO medico (doc_crm, doc_name, login, senha) VALUES (${doc_crm}, ${doc_name}, ${login}, ${senha})`;
        res.json(result);
    } catch(err) {
        res.status(500).send({message: err});
    }

    static async update(req, res){
        try {
            const { doc_crm, doc_name, login, senha } = req.body;

            const { id } = req.params;

            await sql.connect(db);

            const result = await sql.query`UPDATE medico SET doc_crm = ${doc_crm}, doc_name = ${doc_name}, login = ${login}, senha = ${senha} WHERE id = ${id}`;
            res.json(result);
        } catch (err) {
            res.status(500).send('Erro ao atualizar o registro', err);
        }
    }

    static async delete(req, res){
        try {
            const { id } = req.params;
            await sql.connect(db);
            const result = await sql.query`DELETE FROM medico WHERE id = ${id}`;
            res.json({ message: 'Registro excluído com sucesso' });
        } catch (err) {
            console.error('Erro ao excluir o registro:', err);
            res.status(500).send('Erro ao excluir o registro');
        } 
    }
}

export default MedicoController