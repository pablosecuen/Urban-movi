import { Router } from "express";
import { aceptTicket, cancelTicket, newTicket } from "../../controllers/inputs/ticket";

const router = Router();

router.post("/", newTicket);

router.patch("/acept/:id", aceptTicket);

router.patch("/cancel/:id", cancelTicket);

export default router;
