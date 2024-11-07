import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import { Sign } from "crypto";

const AuthPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/LoginBg.jpg')",
          backgroundPosition: "center 70%",
        }}
      ></div>
      <div className=" absolute inset-0 bg-black/30 "></div>
      <div className="p-6 md:p-0 relative z-10 min-h-screen md:flex">
        <div className="md:mt-[17rem] flex-col align-middle self-center items-center  justify-center text-white  md:min-h-screen w-full md:w-[47%]">
          <h2 className="md:mr-[2rem] text-[2.2rem] md:mb-[16.5rem]  font-bold text-center">
            Welcome Back!
          </h2>
          <h3 className="md:mt-[24rem] text-[1.5rem] text-black font-bold text-center">
            Transforming your mind wellness...
          </h3>
          <p className="text-black text-[1.5rem] font-bold text-center">
            .......................................
          </p>
        </div>

        {/* Right Section (55% width on md screens and above) */}
        <div className="bg-[#FEFFF5] rounded-2xl md:rounded-none md:rounded-l-[4rem] md:min-h-screen w-full md:w-[53%] py-4 my-6 md:mt-8 md:shadow-2xl md:shadow-black">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
