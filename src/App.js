import React from 'react';
import './App.css';
import Layout from './components/views/Layout';
import { Provider } from 'react-redux';
import Store from './redux/store';

const store = Store();

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
