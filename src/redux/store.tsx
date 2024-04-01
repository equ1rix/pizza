import { createStore, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pizzaReducer, { REDUCER_NAME as PIZZA_REDUCER_NAME } from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [PIZZA_REDUCER_NAME]: pizzaReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
