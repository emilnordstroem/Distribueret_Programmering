import express from "express"

const router = express.Router()

const items = [
    new Vare(null, 'Kylling', 49),
    new Vare(null, 'Æble', 3),
    new Vare(null, 'Smør', 32),
    new Vare(null, 'Sukker', 29)
]

router.get()

export default router

