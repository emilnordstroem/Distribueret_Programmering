import express from "express";
import { Vare } from "../models/Vare.js";

const router = express.Router();

const varer = [
    new Vare(null, 'Kylling', 49),
    new Vare(null, 'Æble', 3),
    new Vare(null, 'Smør', 32),
    new Vare(null, 'Sukker', 29)
]

router.get('/', (request, response) => {
    console.log(request.session.varer)
    console.log(request.session.indkoebskurv)

    if (!request.session.indkoebskurv) {
        request.session.indkoebskurv = []
    }

    request.session.varer = varer

    response.render('index', {
        varer: request.session.varer,
        indkoebskurv: request.session.indkoebskurv
    })
})

export default router;