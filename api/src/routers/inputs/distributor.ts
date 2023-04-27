import { Router } from "express";
import {
  deleteDistributor,
  newDistributor,
  updateDistributor,
} from "../../controllers/inputs/distributor";
import {
  newDistributorValidate,
  updateDistributorValidate,
} from "../../utils/validations/distributor";

const router = Router();

//Ruta creancion distribuidor
router.post("/", newDistributorValidate, newDistributor);
//Ruta actualizar distribuidor
router.put("/:id", updateDistributorValidate, updateDistributor);
//Ruta eliminar distribuidor
router.delete("/:id", deleteDistributor);

export default router;
