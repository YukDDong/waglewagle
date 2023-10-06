import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { userReducer } from "../reducers/userReducer";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import { giwaReducer } from "../reducers/giwaReducer";
import { giwaHouseReducer } from "../reducers/giwaHouseReducer";
import sessionStorage from "redux-persist/es/storage/session";

const rootReducer = combineReducers({
  userReducer,
  giwaReducer,
  giwaHouseReducer,
});

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["userReducer"],
};

const enhancers = compose(applyMiddleware(thunk));

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  enhancers
);

export const persistor = persistStore(store);

export default store;
