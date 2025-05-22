import { createStore,applyMiddleware } from "redux";
import rootreducers from "../components/redux/reducer/Main";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;