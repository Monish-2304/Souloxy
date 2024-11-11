import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

import { emailOrPhonePattern } from "@/lib/regexPatterns";

import { useDispatch } from "react-redux";
import { setAuthView } from "@/redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: emailOrPhonePattern,
  password: z.string().min(4).max(16),
  emailForOtp: emailOrPhonePattern,
});

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      emailForOtp: "",
    },
  });

  const handleViewChange = (
    view: "signup" | "forgotPassword" | "verifyOtp"
  ) => {
    dispatch(setAuthView(view));
  };
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="relative w-full py-2 md:py-6 md:pt-12 md:pb-4 md:pl-12 md:pr-8 ">
      <div className="relative flex items-center justify-center w-full">
        <ArrowLeft
          onClick={() => {
            navigate("/");
          }}
          color="black"
          className="absolute left-1 md:left-0 cursor-pointer"
          size={28}
        />
        <h3 className="text-center text-lg md:text-[1.8rem] font-bold">
          Log In
        </h3>
      </div>

      <div className="mt-6 md:mt-10  flex items-center justify-center space-x-9">
        <div className="w-[3.5rem] h-[3.5rem] md:w-[4.75rem] md:h-[4.75rem] bg-[#D9D9D9] rounded-full border-[1px] border-black cursor-pointer"></div>
        <div className="w-[3.5rem] h-[3.5rem] md:w-[4.75rem] md:h-[4.75rem] bg-[#D9D9D9] rounded-full border-[1px] border-black cursor-pointer"></div>
      </div>

      <div className="my-[1.1rem] flex items-center justify-center gap-x-2">
        <div className="w-24 md:w-40 h-[1px] bg-[#D9D9D9]"></div>
        <p className=" text-center text-base font-semibold">Or</p>
        <div className="w-24 md:w-40 h-[1px] bg-[#D9D9D9]"></div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="px-2 w-full space-y-3 "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" space-y-2">
                <FormLabel className="font-normal  text-sm">
                  Email Address/ Phone No
                </FormLabel>
                <FormControl>
                  <Input
                    className="p-2 bg-[#D9E8D5] md:px-6 md:pb-6 md:pt-10 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                    placeholder="Enter Your Email Address/ Phone No"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="font-normal text-sm">Password</FormLabel>
                <FormControl>
                  <Input
                    className="p-2 bg-[#D9E8D5] md:px-6 md:pb-6 md:pt-10 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                    placeholder="Enter Your Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p
            onClick={() => handleViewChange("forgotPassword")}
            className="flex justify-end font-normal text-sm md:text-base underline cursor-pointer"
          >
            Forgot Password?
          </p>
          <div className="my-[1.1rem] flex items-center justify-center gap-x-2">
            <div className="w-24 md:w-40 h-[1px] bg-[#D9D9D9]"></div>
            <p className=" text-center text-base font-semibold">Or</p>
            <div className="w-24 md:w-40 h-[1px] bg-[#D9D9D9]"></div>
          </div>
          <FormField
            control={form.control}
            name="emailForOtp"
            render={({ field }) => (
              <FormItem className=" space-y-2">
                <FormLabel className="font-normal text-sm">
                  Login Through Otp
                </FormLabel>
                <FormControl>
                  <Input
                    className="p-2 bg-[#D9E8D5] md:px-6 md:pb-6 md:pt-10 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                    placeholder="Enter Your Email Address/ Phone No"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p
            onClick={() => {
              handleViewChange("verifyOtp");
            }}
            className="flex justify-end font-normal text-sm md:text-base underline cursor-pointer"
          >
            Send Otp?
          </p>
          <div className=" w-full flex justify-center">
            <Button
              className="mt-3 w-[40%] py-2 md:py-6 lg:py-9 text-base font-semibold bg-[#4C614E] rounded-full"
              type="submit"
            >
              Log In
            </Button>
          </div>
          <div className="mt-2 flex justify-center space-x-2">
            <p className="font-normal text-sm">Don't have an account?</p>
            <span
              className="text-sm text-[#4C614E] border-b-[1px] border-[#4C614E]  cursor-pointer"
              onClick={() => {
                dispatch(setAuthView("signup"));
                navigate("/auth", { state: { isLogin: "signup" } });
              }}
            >
              Create An Account
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
