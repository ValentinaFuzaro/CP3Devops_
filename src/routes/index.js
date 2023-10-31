import express from "express";
import exame from './exameRoutes.js'
import medico from './medicoRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Hello World! :)"})
    })

    app.use(
        express.json(),
        exame,
        medico
    )
}

export default routes;