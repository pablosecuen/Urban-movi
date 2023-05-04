import { Request, Response } from "express";
import { db } from "../../connection/connection";
import bcrypt from "bcrypt";
import { UserToRegister, User, UserToUpdate } from "../../schema/user";

/**
 * Controlador para crear un usuario en Firestore.
 */
export const newUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: UserToRegister = req.body;
    const dataFormated: User = {
      ...data,
      address: {
        postalCode: "",
        location: "",
        state: "",
        street: "",
        number: "",
        department: "",
      },
      phone: {
        areaCode: "",
        number: "",
        displayPhone: "",
      },
      nationality: "",
      birthday: "",
      gender: "",
      payments: [
        {
          cardNumber: "",
          expirationDate: "",
          securityCode: "",
        },
      ],
      history: {
        orders: [],
        travels: [],
      },
      img: "",
      ce: "",
      cc: "",
      deleted: false,
      displayName: data.firstName + " " + data.lastName,
      createAt: new Date(Date.now()),
    };

    // Verificar si ya existe un usuario con el correo electrónico dado
    const snapshot = await db.collection("users").where("email", "==", dataFormated.email).get();
    if (!snapshot.empty) {
      throw new Error("El correo electrónico ya está registrado");
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(dataFormated.password, 10);
    dataFormated.password = hashedPassword;

    const docRef = await db.collection("users").add(dataFormated);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    try {
      throw new Error(error.message);
    } catch (innerError) {
      console.error("Error al crear el usuario", innerError);
      res.status(400).json({ message: innerError.message });
    }
  }
};

// necesita validacion xq tiene datos por body
export const newDistributorRating = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, distributorId } = req.params;
    const { rating, comment } = req.body;

    // const dataFormatted: DistributorRating = {
    //   ...data,
    //   status: "pending",
    //   createdAt: new Date(Date.now()),
    //   updateAt: "",
    // };

    // const [userDoc, passageDoc] = await Promise.all([
    //   db.collection("users").doc(dataFormatted.userId).get(),
    //   db.collection("passages").doc(dataFormatted.passageId).get(),
    // ]);

    // if (!userDoc.exists) throw new Error("El usuario no existe");
    // if (!passageDoc.exists) throw new Error("El pasaje no existe");

    // const docRef = await db.collection("tickets").add(dataFormatted);

    // res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error al generar rating", error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * Controlador para actulizar un usuario en Firestore.
 */
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id; // Obtener ID del usuario a actualizar
    const data: UserToUpdate = req.body; // Obtener datos actualizados del usuario
    const updateAt: Date = new Date(Date.now()); // Obtener fecha actual
    // Verificar si el usuario existe en Firestore
    const docRef = await db.collection("users").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontró el usuario");
    }

    // Actualizar el usuario en Firestore
    await db
      .collection("users")
      .doc(id)
      .update({ ...data, updateAt: updateAt });

    res.status(200).json({ message: "Usuario actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el usuario", error);
    res.status(400).json({ message: error.message });
  }
};
/**
 * Controlador para hacer un borrado logico de un usuario en Firestore.
 */
export const enableUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("users").doc(id).get();
    if (!docRef.exists) {
      throw new Error("El usuario no se encontró");
    }
    await db.collection("locals").doc(id).update({ deleted: false });
    res.status(200).json({ message: "Usuario habilitado correctamente" });
  } catch (innerError) {
    console.error("Error al habilitar el usuario", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const deletedUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("users").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontró el usuario");
    }
    await db.collection("users").doc(id).update({ deleted: true });
    res.status(201).json({ menssage: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("Error al borrar el Usuario", error);
    res.status(400).json({ messege: error.message });
  }
};
