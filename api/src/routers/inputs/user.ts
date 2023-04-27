import { Router } from "express";
import { newUser, updateUser, deletedUser } from "../../controllers/inputs/user";
import { newUserValidated, updateUserValidated } from "../../utils/validations/user";

const router = Router();

// Ruta para crear un nuevo usuario

router.post("/", newUserValidated, newUser);
router.put("/:id", updateUserValidated, updateUser);
router.delete("/:id", deletedUser);

export default router;
