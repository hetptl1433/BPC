import { createStore, applyMiddleware } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; // This should combine all your reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
