import {createStore,applyMiddleware,compose} from 'redux';

import thunk from 'redux-thunk';

import devTools from 'remote-redux-devtools';

import reducer from '../reducers';

export default function configureState(initialState) {
    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            devTools()
        )
    );
    if (module.hot){
        module.hot.accept(() => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}