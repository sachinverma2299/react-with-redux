import {createStore, combineReducers, applyMiddleware} from "redux"
import accountReducer from "./features/account/accountSlice"
import customerReducer from "./features/customers/CustomerSlice"
import { createCustomer } from "./features/customers/CustomerSlice"
import thunk from "redux-thunk"
import { configureStore } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
    account: accountReducer,
    customer:customerReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

// const store = configureStore({
//     reducer: {
//         account: accountReducer,
//         customer: customerReducer
//     }
// });



// store.dispatch(createCustomer('jonas schema',"1234321"))

export default store


