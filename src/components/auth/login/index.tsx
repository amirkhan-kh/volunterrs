import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store-config";
import { setRole } from "@/store/role-slice";
import "./_style.scss";
import LoginStep1 from "@/components/ui-elements/step-forms/login-step1";


const Login: React.FC = () => {
  

  const role = useSelector((state: RootState) => state.role.role);
  console.log(role);
  
  const dispatch = useDispatch();
  useEffect(() => {
    const storedRole = localStorage.getItem("role") as
      | "volunterr"
      | "investor"
      | null;
    if (storedRole && !role) {
      dispatch(setRole(storedRole));
    }
  }, [dispatch, role]);
  const backgroundImages =
    role === "investor"
    ? `url("/voluntermedia/icons/login/loginGreen/logingreen 1.png"), url("/voluntermedia/icons/login/loginGreen/logingreen2.png")`
    : `url("/voluntermedia/icons/login/loginBlue/wave2.png"), url("/voluntermedia/icons/login/loginBlue/wave1.png")`

    // if (!role) return <div>Yuklanmoqda...</div>; 

  return (
    <div id="login">
      <div
        id="loginImg"
        style={{ backgroundImage: backgroundImages }}
        className=""
      >
      <LoginStep1/>

         

      
      </div>
    </div>
  );
};

export default Login;
