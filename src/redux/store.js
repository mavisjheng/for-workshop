import { createStore, combineReducers } from "redux";
import rolloutOperationReducer from "./modules/rolloutOperation";
import statusSelectionReducer from "./modules/statusSelection";
import ringsReducer from "./modules/rings";

const rootReducer = combineReducers({
  rolloutOperation: rolloutOperationReducer,
  statusSelection: statusSelectionReducer,
  rings: ringsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
