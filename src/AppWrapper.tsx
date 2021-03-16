import { Provider } from 'react-redux';

import store from './store';

import App from './App';

import './styles.global.css';

function AppWrapper() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper;
