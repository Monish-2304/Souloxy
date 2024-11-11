import { useState } from "react";

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
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

import { emailOrPhonePattern } from "@/lib/regexPatterns";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthView } from "@/redux/slices/authSlice";

const formSchema = z
  .object({
    email: emailOrPhonePattern,
    password: z.string().min(4).max(16),
    confirmPassword: z.string().min(4).max(16),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    dispatch(setAuthView("verifyOtp"));
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
          Create Account
        </h3>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-4 lg:mt-16 px-2 w-full space-y-3 "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="font-normal text-sm">
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
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="p-2 bg-[#D9E8D5] md:px-6 md:pb-6 md:pt-10 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                      placeholder="Create Strong Password"
                      {...field}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute bottom-2 right-2  md:bottom-4 md:right-4 flex items-center cursor-pointer text-gray-500"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="font-normal text-sm">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      className="p-2 bg-[#D9E8D5] md:px-6 md:pb-6 md:pt-10 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                      placeholder="Confirm Password"
                      {...field}
                    />
                    <span
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute bottom-2 right-2  md:bottom-4 md:right-4 flex items-center cursor-pointer text-gray-500"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" w-full flex justify-center">
            <Button
              className="mt-3 w-[40%] py-2 md:py-6 lg:py-9 text-base font-semibold bg-[#4C614E] rounded-full"
              type="submit"
            >
              Proceed
            </Button>
          </div>
          <div className="mt-2 flex justify-center space-x-2">
            <p className="text-sm md:text-base font-normal">
              Already have an account?
            </p>
            <span
              className="text-sm md:text-base text-[#4C614E] border-b-[1px] border-[#4C614E]  cursor-pointer"
              onClick={() => {
                dispatch(setAuthView("login"));
                navigate("/auth", { state: { isLogin: "login" } });
              }}
            >
              Login
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
