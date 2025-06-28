// components/Loader.tsx

import { useLoader } from "./loader-anime";

const Loader = () => {
  const { loading } = useLoader();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(255, 255, 255, 0.57)] backdrop-blur-sm z-[9999]">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
