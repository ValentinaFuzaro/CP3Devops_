import sql from 'mssql'
import db from '../config/db.js'

class ExameController{

    static async getAll(req, res) {
        try {
            await sql.connect(db);

            const result = await sql.query('SELECT * FROM dbo.exames');

            res.json(result.recordset);
        } catch (err) {
            console.error('Erro de conexão:', err);
            res.status(500).send('Erro de conexão com o banco de dados');
        }
    }

    static async create(req, res) {

        const { doc_crm, doc_num, nome_exame, permission } = req.body;

        await sql.connect(db);

        const result = await sql.query`INSERT INTO exames (doc_crm, doc_num, nome_exame, permission) VALUES (${doc_crm}, ${doc_num}, ${nome_exame}, ${permission})`;
        res.json(result);
    } catch(err) {
        console.error('Erro ao criar o produto:', err);
        res.status(500).send('Erro ao criar o produto');
    }

    static async update(req, res){
        try {
            const { doc_crm, doc_num, nome_exame, permission } = req.body;

            const { id } = req.params;

            await sql.connect(db);

            const result = await sql.query`UPDATE exames SET doc_crm = ${doc_crm}, doc_num = ${doc_num}, nome_exame = ${nome_exame}, permission = ${permission} WHERE id = ${id}`;
            res.json(result);
        } catch (err) {
            res.status(500).send('Erro ao atualizar o registro', err);
        }
    }

    static async delete(req, res){
        try {
            const { id } = req.params;
            await sql.connect(db);
            const result = await sql.query`DELETE FROM exames WHERE id = ${id}`;
            res.json({ message: 'Registro excluído com sucesso' });
        } catch (err) {
            console.error('Erro ao excluir o registro:', err);
            res.status(500).send('Erro ao excluir o registro');
        } 
    }
}

export default ExameController