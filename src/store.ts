import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers';
import sages from './redux/sagas/';

export default function configureStore(initialState: any = {}) {
  const composeEnhancers = ((window as any)
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) as typeof compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sages);

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     // eslint-disable-next-line
  //     const nextRootReducer = require('../reducers');
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
}
