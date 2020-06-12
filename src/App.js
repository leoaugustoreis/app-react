import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import TemaProvider from './providers/TemaProvider';
import store from './store';
import { Layout } from './components';
import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <TemaProvider>
          <Layout>
            <Routes />
          </Layout>
        </TemaProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;