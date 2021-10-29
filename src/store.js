import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootRed from  './reducers/index'
//actons


const store = createStore(rootRed, composeWithDevTools());
export default store;
