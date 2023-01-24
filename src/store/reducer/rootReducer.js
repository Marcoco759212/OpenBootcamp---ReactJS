import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        // state name : reducer that will control it
        todosState : todosReducer,
        filterState: filterReducer,
        //Async example userReducer (LoginUser)
        userState: userReducer
        // ... add more states and reducer to include them in the store
    }
)