import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../reducer/rootReducer";
import { watcherSaga } from "../sagas/sagas";

export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools());
    return store
}

export const createAppAsyncStore = () => {

    const sagaMiddelware = createSagaMiddleware();

    let store = createStore(
        rootReducer, 
            compose(
                // sagaMiddelware, 
                applyMiddleware(sagaMiddelware),
                composeWithDevTools()
            )
        );

        //we init the watcher Saga
        sagaMiddelware.run(watcherSaga)
    return store
}