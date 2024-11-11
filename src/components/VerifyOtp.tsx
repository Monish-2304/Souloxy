import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthView } from "@/redux/slices/authSlice";

const VerifyOtp: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleViewChange = (
    view:
      | "login"
      | "signup"
      | "forgotPassword"
      | "createProfile"
      | "updatePassword"
  ) => {
    dispatch(setAuthView(view));
  };

  const onSubmit = () => {
    if (location.state?.isLogin == "signup") handleViewChange("createProfile");
    else handleViewChange("updatePassword");
  };

  return (
    <div className="relative w-full overflow-hidden  md:pt-12 md:pb-4 md:pl-12 md:pr-8 ">
      <div className="relative flex items-center justify-center w-full">
        <ArrowLeft
          onClick={() => {
            if (location.state?.isLogin == "login") {
              handleViewChange("login");
            } else handleViewChange("signup");
          }}
          color="black"
          className="absolute left-1 md:left-0 cursor-pointer"
          size={28}
        />
        <h3 className="text-center text-lg md:text-[1.8rem] font-bold">
          Verify Otp
        </h3>
      </div>
      <div className="px-3 lg:px-12">
        <p className="mt-6 md:mt-16 md:text-left">
          Enter the confirmation code we just sent to
        </p>
        <p className="font-semibold md:text-left">example@gmail.com</p>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup className="mt-12 w-full flex  justify-center  space-x-5  md:space-x-3 lg:space-x-8">
            <InputOTPSlot
              className="bg-[#D9E8D5] size-9 md:size-16  rounded-xl  border-black border-b-[1px]"
              index={0}
            />
            <InputOTPSlot
              className="bg-[#D9E8D5] size-9 md:size-16 rounded-xl  border-black border-b-[1px]"
              index={1}
            />
            <InputOTPSlot
              className="bg-[#D9E8D5] size-9 md:size-16 rounded-xl  border-black border-b-[1px]"
              index={2}
            />
            <InputOTPSlot
              className="bg-[#D9E8D5] size-9 md:size-16 rounded-xl  border-black border-b-[1px]"
              index={3}
            />
            <InputOTPSlot
              className="bg-[#D9E8D5] size-9 md:size-16 rounded-xl  border-black border-b-[1px]"
              index={4}
            />
            <InputOTPSlot
              className="bg-[#D9E8D5] size-9 md:size-16 rounded-xl  border-black border-b-[1px]"
              index={5}
            />
          </InputOTPGroup>
        </InputOTP>
        <div className=" mt-8 w-full flex justify-center">
          <Button
            onClick={onSubmit}
            className="mt-3 w-[40%] py-2 md:py-6 lg:py-9 text-base font-semibold bg-[#4C614E] rounded-full"
          >
            Verify
          </Button>
        </div>
        <div className="mt-2 flex justify-center space-x-2">
          <p className="text-sm md:text-base font-normal">
            Didn't receive code?
          </p>
          <span className="text-sm md:text-base text-[#4C614E] border-b-[1px] border-[#4C614E]  cursor-pointer">
            Resend Code
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
