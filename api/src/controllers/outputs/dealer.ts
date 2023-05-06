import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { Dealer } from "../../schema/dealer";
import firebase from "firebase-admin";

/**
 * Controlador para buscar un distribuidor por id
 */
export const searchDealer = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const doc = await db.collection("dealers").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Distribuidor no encontrado" });
    } else {
      const distribuidor = doc.data() as Dealer;
      res.status(201).json(distribuidor);
    }
  } catch (error) {
    console.error("Error al obtener el distribuidor", error);
    res.status(500).json({ message: "Error al obtener el distribuidor" });
  }
};

/**
 * Controlador para obtener todos los distribuidores
 * con paginado
 */

export const getDealer = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = 1, pageSize = 10, ...filters } = req.query;

    const validFilters = Object.entries(filters).filter(([key, _]) => key !== "page" && key !== "pageSize");

    let query: any = db.collection("dealers");

    validFilters.forEach(([property, value]) => {
      query = query.where(property, "==", value);
    });

    const distributorSnapshot = await query.get();

    const totalItems = distributorSnapshot.docs.length;
    const totalPages = Math.ceil(totalItems / Number(pageSize));

    const startIndex = (Number(page) - 1) * Number(pageSize);
    const endIndex = startIndex + Number(pageSize);

    const dealers = distributorSnapshot.docs.slice(startIndex, endIndex).map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    res.status(200).json({ dealers, totalPages, totalItems });
  } catch (error) {
    console.error("Error al obtener los distribuidores", error);
    res.status(500).json({ message: "Error al obtener los distribuidores" });
  }
};
