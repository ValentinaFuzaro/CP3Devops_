import express from "express";
import routes from './src/routes/index.js'

const app = express();

app.use(express.json());

routes(app)

app.listen(3000, () => {
    console.log('Servidor Express em execução na porta 3000');
});

export default app;