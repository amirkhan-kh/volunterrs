import { useLoader } from "./loader-anime";

const Loader = () => {
  const { loading } = useLoader();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(255, 255, 255, 0.57)] backdrop-blur-[20px] z-[9999]">
      <img
        src="/public/voluntermedia/animation/mini-unscreen.gif"
        className=" w-[150px] h-[119px]"
      />
    </div>
  );
};

export default Loader;
