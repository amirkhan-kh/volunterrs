import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store-config";
import { setRole } from "@/store/role-slice";
import Step1 from "@/components/ui-elements/step-forms/step-1";
import Step2 from "@/components/ui-elements/step-forms/step-2";
import { Step3 } from "@/components/ui-elements/step-forms/step-3";
import "./_style.scss";
import GreenStep3 from "@/components/ui-elements/step-forms/step-green3";

const Login: React.FC = () => {
  const [step, setStep] = useState(3);
  // const [phone, setPhone] = useState("");
  // const [code, setCode] = useState("");
  // const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const handleNext = () => setStep((prev) => prev + 1);
  console.log(handleNext);

  // const handleBack = () => setStep((prev) => prev - 1);
  const role = useSelector((state: RootState) => state.role.role);
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
    role === "volunterr"
      ? `url("/voluntermedia/icons/login/loginBlue/wave2.png"), url("/voluntermedia/icons/login/loginBlue/wave1.png")`
      : `url("/voluntermedia/icons/login/loginGreen/logingreen 1.png"), url("/voluntermedia/icons/login/loginGreen/logingreen2.png")`;

  return (
    <div id="login">
      <div
        id="loginImg"
        style={{ backgroundImage: backgroundImages }}
        className=""
      >
        {/* Step 1: Telefon raqam  */}
        {step === 1 && <Step1 />}

        {/* Step 2: Tasdiqlash kodi */}
        {step === 2 && (
         
          <Step2 />
        )}

        {/* Step 3: Ro'yxatdan o'tish */}
        {step === 3 && 
        <>
            {role === "volunterr" && <Step3 />}
            {role === "investor" && <GreenStep3 />}
          </>
        }
      </div>
    </div>
  );
};

export default Login;
