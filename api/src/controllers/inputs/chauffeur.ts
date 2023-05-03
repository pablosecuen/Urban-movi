import { Request, Response } from "express";
import { db } from "../../connection/connection";
import bcrypt from "bcrypt";
import { ChauffeurToRegister, ChauffeurToUpdate } from "../../schema/chauffeur";

export const newChauffeur = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: ChauffeurToRegister = req.body;
    const dataFormated = {
      ...data,
      deleted: false,
      ownerState: false,
      vehicle: {
        vehicleId: "",
        patent: "",
      },
      payments: {
        cardNumber: "",
        expirationDate: "",
        securityCode: "",
      },
      img: "",
      history: [],
    };
    const snapshot = await db
      .collection("chauffeur")
      .where("email", "==", dataFormated.email)
      .get();
    if (!snapshot.empty) {
      throw new Error("El correo electrónico ya está registrado");
    }

    const hashedPassword = await bcrypt.hash(dataFormated.password, 10);
    dataFormated.password = hashedPassword;

    const docRef = await db.collection("chauffeur").add(dataFormated);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    try {
      throw new Error(error.message);
    } catch (innerError) {
      console.error("Error al crear el chofer", innerError);
      res.status(400).json({ message: innerError.message });
    }
  }
};

export const updateChauffeur = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const data: ChauffeurToUpdate = req.body;
    const docRef = await db.collection("chauffeur").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontró el chofer");
    }
    await db.collection("chauffeur").doc(id).update({ ...data });
    res.status(200).json({ message: "Chofer actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el usuario", error);
    res.status(400).json({ message: error.message });
  }
};

export const enableChauffeur = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("chauffeur").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontrón el chofer");
    }
    await db.collection("chauffeur").doc(id).update({ deleted: false });
    res.status(200).json({ message: "Chofer habilitado correctamente" });
  } catch (error) {
    console.error("Error al habilitar el chofer", error);
    res.status(400).json({ message: error.message });
  }
};

export const deleteChauffeur = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("chauffeur").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontrón el chofer");
    }
    await db.collection("chauffeur").doc(id).update({ deleted: true });
    res.status(200).json({ message: "Chofer eliminado correctamente" });
  } catch (innerError) {
    console.error("Error al eliminar el chofer", innerError);
    res.status(400).json({ message: innerError.message });
  }
};
