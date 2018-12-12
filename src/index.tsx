import '@babel/polyfill'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import configureStore from './store/store'
import rootSaga from './sagas'
import App from "./App";

const store = configureStore()
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
