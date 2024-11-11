import { useState } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Input } from "./ui/input";

import { useDispatch } from "react-redux";
import { setAuthView } from "@/redux/slices/authSlice";

const formSchema = z
  .object({
    password: z.string().min(4).max(16),
    confirmPassword: z.string().min(4).max(16),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
const UpdatePassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="relative w-full overflow-hidden  md:pt-12 md:pb-4 md:pl-12 md:pr-8 ">
      <div className="relative flex items-center justify-center w-full">
        <ArrowLeft
          onClick={() => {
            dispatch(setAuthView("login"));
          }}
          color="black"
          className="absolute left-1 md:left-0 cursor-pointer"
          size={28}
        />
        <h3 className="md:max-w-[60%] leading-relaxed text-center text-lg md:text-[1.8rem] font-bold">
          Update Your Password
        </h3>
      </div>
      <div className="mt-6 md:mt-10  flex items-center justify-center space-x-9">
        <div className="w-[3.5rem] h-[3.5rem] md:w-[4.75rem] md:h-[4.75rem] bg-[#D9D9D9] rounded-full border-[1px] border-black cursor-pointer"></div>
        <div>
          <p>User Name</p>
          <p>example@gmail.com</p>
        </div>
      </div>
      <div className="px-3 lg:px-12">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 px-2 w-full space-y-3 "
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="font-normal text-sm">
                    Password
                  </FormLabel>
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
                        {showPassword ? (
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
            <div className=" mt-8 w-full flex justify-center">
              <Button
                type="submit"
                className="mt-3 w-[40%] py-2 md:py-6 lg:py-9 text-base font-semibold bg-[#4C614E] rounded-full"
              >
                Proceed
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePassword;
