import './lang/i18n.js';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/main-router';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store-config'; 
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
