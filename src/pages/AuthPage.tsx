import { useEffect, useState } from "react";

import CreateProfile from "@/components/CreateProfile";
import ForgotPassword from "@/components/ForgotPassword";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import UpdatePassword from "@/components/UpdatePassword";
import VerifyOtp from "@/components/VerifyOtp";

import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthView } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";

const AuthPage = () => {
  const location = useLocation();
  const authView = useSelector((state: RootState) => state.auth.authView);
  const dispatch = useDispatch();
  const [step, setStep] = useState<"login" | "signup">(
    location.state?.isLogin == "login" ? "login" : "signup"
  );

  useEffect(() => {
    dispatch(setAuthView(step));
  }, []);

  return (
    <div className=" relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/LoginBg.jpg')",
          backgroundPosition: "center 70%",
        }}
      ></div>
      <div className=" absolute inset-0 bg-black/30 "></div>
      <div className="p-6 md:p-0 relative z-10 lg:min-h-screen md:flex">
        <div className="md:mt-[17rem] flex-col align-middle self-center items-center  justify-center text-white w-full md:w-[47%]">
          {authView === "login" && (
            <h2 className="md:mr-[2rem]  md:mb-[22rem] text-[2.2rem] font-bold text-center">
              Welcome Back!
            </h2>
          )}
          <h3 className="text-[1.5rem] text-black font-bold text-center">
            Transforming your mind wellness...
          </h3>
          <p className="text-black text-[1.5rem] font-bold text-center">
            .......................................
          </p>
        </div>

        {/* Right Section (55% width on md screens and above) */}
        <div className="my-6 py-4 md:my-0 lg:my-8 md:min-h-screen md:flex md:items-center md:justify-center    bg-[#FEFFF5]  rounded-2xl md:rounded-none md:rounded-l-[4rem]  lg:h-fit w-full md:w-[53%] md:shadow-2xl md:shadow-black">
          {authView === "login" && <Login />}
          {authView === "signup" && <SignUp />}
          {authView === "verifyOtp" && <VerifyOtp />}
          {authView === "forgotPassword" && <ForgotPassword />}
          {authView === "updatePassword" && <UpdatePassword />}
          {authView === "createProfile" && <CreateProfile />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
