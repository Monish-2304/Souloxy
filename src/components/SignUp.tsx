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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const emailOrPhonePattern = z.string().refine(
  (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  },
  {
    message: "Must be a valid email or a 10-digit phone number",
  }
);
const formSchema = z.object({
  email: emailOrPhonePattern,
  password: z.string().min(4).max(16),
  confirmPassword: z.string().min(4).max(16),
});
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const navigate = useNavigate();
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="relative w-full py-6 md:pt-12 md:pb-4 pl-12 pr-8 ">
      <ArrowLeft
        onClick={() => navigate("/")}
        color="black"
        className="absolute top-[3.3rem] md:top-[4.8rem] cursor-pointer"
        size={36}
      />
      <div className="mt-5 w-full   ">
        <h3 className="my-6 text-center text-[1.8rem] font-bold">
          Create An Account
        </h3>
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
                <FormLabel className="font-normal text-base">
                  Email Address/ Phone No
                </FormLabel>
                <FormControl>
                  <Input
                    className=" bg-[#D9E8D5] px-6 pb-6 pt-10 text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
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
                <FormLabel className="font-normal text-base">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="bg-[#D9E8D5] px-6 pb-6 pt-10 text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                      placeholder="Create Strong Password"
                      {...field}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute  bottom-4 right-4 flex items-center cursor-pointer text-gray-500"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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
                <FormLabel className="font-normal text-base">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      className="bg-[#D9E8D5] px-6 pb-6 pt-10 text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                      placeholder="Confirm Password"
                      {...field}
                    />
                    <span
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute bottom-4 right-4 flex items-center cursor-pointer text-gray-500"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
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
              className="mt-3 w-[58%] py-9 text-xl font-semibold bg-[#4C614E] rounded-full"
              type="submit"
            >
              Proceed
            </Button>
          </div>
          <div className="mt-2 flex justify-center space-x-2">
            <p className="font-normal">Already have an account?</p>
            <span className="text-[#4C614E] border-b-[1px] border-[#4C614E]  cursor-pointer">
              Login
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
