import { Router } from "express";
import { newOrder, orderStateUpdate, updateOrder } from "../../controllers/inputs/order";
import { newOrderValidate } from "../../utils/validations/order";

const router = Router();

//Ruta creancion Orden
router.post("/", newOrderValidate, newOrder);
//Ruta actualizar Orden
router.put("/:id", updateOrder);
//Ruta de actualizar estado de Orden
router.get("/orderStateUpdate/:id", orderStateUpdate);

export default router;
