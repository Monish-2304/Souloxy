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
import { useNavigate } from "react-router-dom";

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
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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
        <h3 className="my-6 text-center text-[1.8rem] font-bold">Log In</h3>
      </div>

      <div className="mt-2  flex items-center justify-center space-x-9">
        <div className="w-[4.75rem] h-[4.75rem] bg-[#D9D9D9] rounded-full border-[1px] border-black cursor-pointer"></div>
        <div className="w-[4.75rem] h-[4.75rem] bg-[#D9D9D9] rounded-full border-[1px] border-black cursor-pointer"></div>
      </div>

      <div className="my-[1.1rem] flex items-center justify-center gap-x-2">
        <div className="w-40 h-[1px] bg-[#D9D9D9]"></div>
        <p className=" text-center text-base font-semibold">Or</p>
        <div className="w-40 h-[1px] bg-[#D9D9D9]"></div>
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
                  <Input
                    className="bg-[#D9E8D5] px-6 pb-6 pt-10 text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                    placeholder="Enter Your Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="flex justify-end font-normal text-base underline cursor-pointer">
            Forgot Password?
          </p>
          <div className="my-[1.1rem] flex items-center justify-center gap-x-2">
            <div className="w-40 h-[1px] bg-[#D9D9D9]"></div>
            <p className=" text-center text-base font-semibold">Or</p>
            <div className="w-40 h-[1px] bg-[#D9D9D9]"></div>
          </div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className=" space-y-2">
                <FormLabel className="font-normal text-base">
                  Login Through Otp
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#D9E8D5] px-6 pb-6 pt-10 text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                    placeholder="Enter Your Email Address/ Phone No"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="flex justify-end font-normal text-base underline cursor-pointer">
            Send Otp?
          </p>
          <div className=" w-full flex justify-center">
            <Button
              className="mt-3 w-[58%] py-9 text-xl font-semibold bg-[#4C614E] rounded-full"
              type="submit"
            >
              Log In
            </Button>
          </div>
          <div className="mt-2 flex justify-center space-x-2">
            <p className="font-normal">Don't have an account?</p>
            <span className="text-[#4C614E] border-b-[1px] border-[#4C614E]  cursor-pointer">
              Create An Account
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
