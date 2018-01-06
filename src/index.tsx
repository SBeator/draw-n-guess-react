import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './store';

// Let the reducers handle initial state
const initialState = {
  user: {
    name: 'default',
  },
};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

interface HotModule extends NodeModule {
  hot?: any;
}

const hotModule = module as HotModule;
if (hotModule.hot) {
  hotModule.hot.accept();
}
