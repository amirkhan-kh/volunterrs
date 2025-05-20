import { RouterProvider } from 'react-router-dom';
import { router } from './router/main-router';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store/store-config';
import './index.css'
import { createContext } from 'react';
export const modalStore = createContext(null);

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
