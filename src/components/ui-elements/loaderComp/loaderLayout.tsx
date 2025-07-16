// layout/LoaderLayout.tsx
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useLoader } from "./loader-anime";
import { Loader } from "lucide-react";

const LoaderLayout = () => {
  const location = useLocation();
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();
    const timer = setTimeout(() => {
      hideLoader();
    }, 2000); // 2 soniya delay

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Loader />
      <Outlet />
    </>
  );
};

export default LoaderLayout;
