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
import { Input } from "./ui/input";
import { ArrowLeft } from "lucide-react";

import { emailOrPhonePattern } from "@/lib/regexPatterns";

import { useDispatch } from "react-redux";
import { setAuthView } from "@/redux/slices/authSlice";

const formSchema = z.object({
  email: emailOrPhonePattern,
});
const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    dispatch(setAuthView("verifyOtp"));
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
        <h3 className="text-center text-lg md:text-[1.8rem] font-bold">
          Forgot Password
        </h3>
      </div>
      <div className="px-3 lg:px-12">
        <p className="mt-6 md:mt-16 px-2">
          To update your password, please enter your email address/
        </p>
        <p className=" px-2">Phone no you may used with souloxy</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 px-2 w-full space-y-3 "
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

export default ForgotPassword;
