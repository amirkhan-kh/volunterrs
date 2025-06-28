// src/App.tsx
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "./components";
import { useEffect } from "react";
import './index.css';
import { useLoader } from "./components/ui-elements/loaderComp/loader-anime";
import Loader from "./components/ui-elements/loaderComp/loader";

function App() {
  const location = useLocation();
  const { showLoader, hideLoader } = useLoader();

  const hideFooterOnPaths = ["/profile-volunter"];

  useEffect(() => {
    showLoader();
    const timer = setTimeout(() => {
      hideLoader();
    }, 1200); // 2s loader

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      {!hideFooterOnPaths.includes(location.pathname) && <Footer />}
      <Loader />
    </div>
  );
}

export default App;
