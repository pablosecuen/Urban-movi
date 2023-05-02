import { Router } from "express";
import { cancelTravel, newTravel, updateTravel } from "../../controllers/inputs/travels";
import { newTravelValidated, updateTravelValidated } from "../../utils/validations/travels";

const router = Router();

// Ruta para crear un nuevo usuario

router.post("/", newTravelValidated, newTravel);

router.patch("/:id", updateTravelValidated, updateTravel);
router.patch("/reject/:id", updateTravelValidated, cancelTravel);

export default router;
