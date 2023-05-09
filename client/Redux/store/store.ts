import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../user/userSlice";
import travelReducer from "../travel/travelSlice";
import passageReducer from "../passage/passageSlice";
import deliverySlice from "../delivery/deliverySlice";
import chauffeurSlice from "../chauffeur/chauffeurSlice";
import notificationsSlice from "../notifications/notificationsSlice";
import vehicleSlice from "../vehicle/vehicleSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      travel: travelReducer,
      passage: passageReducer,
      delivery: deliverySlice,
      chauffeur: chauffeurSlice,
      vehicle: vehicleSlice,
      notifications: notificationsSlice,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
