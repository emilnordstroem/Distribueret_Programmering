import express from "express";
import { Varelinje } from "../models/Varelinje.js";

const router = express.Router();

router.post('/indkoebskurv/:id', (request, response) => {
    const { id } = request.params
    const { antalVare } = request.body
    
    const vare = request.session.varer.find(nuvaerendeVare => nuvaerendeVare.id == id)
    
    if (vare) {
        const varelinje = new Varelinje(antalVare, vare.betegnelse, vare.pris)
        request.session.indkoebskurv.push(varelinje)    
    }

    response.redirect('/')
})

router.get('/indkoebskurv/:id/:antal', (request, response) => {
    const { id, antal } = request.params
    
    const vare = request.session.varer.find(nuvaerendeVare => nuvaerendeVare.id == id)
    
    if (vare) {
        const varelinje = new Varelinje(antal, vare.betegnelse, vare.pris)
        request.session.indkoebskurv.push(varelinje)    
    }

    response.redirect('/')
})

export default router;