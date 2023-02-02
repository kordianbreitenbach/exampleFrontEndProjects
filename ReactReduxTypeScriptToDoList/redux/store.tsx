
import { createStore,combineReducers,applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import mapDispatchToProps from "../App"
import thunk from "redux-thunk";
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import messageReducer from "./TodoReducers";

const reducer=combineReducers({
Todo:messageReducer
});


export type State=ReturnType<typeof reducer>
export * as actionCreators from "./TodoActions";
const store =createStore(reducer,{},
  applyMiddleware(thunk)
  );
export default store;
