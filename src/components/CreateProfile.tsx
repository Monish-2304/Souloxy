import React from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

import { useDispatch } from "react-redux";
import { setAuthView } from "@/redux/slices/authSlice";

const formSchema = z.object({
  fullName: z.object({
    firstName: z
      .string()
      .min(3, "First name must be at least 3 characters")
      .max(32, "First name must not exceed 32 characters"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(16, "Last name must not exceed 16 characters"),
  }),
  gender: z.enum(["", "male", "female", "other", "prefer not to say"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  location: z
    .string()
    .min(2, "Location must be at least 2 characters")
    .max(32, "Location must not exceed 32 characters"),
  dob: z.object({
    day: z
      .number({ invalid_type_error: "Please enter a valid day" })
      .min(1, "Invalid day")
      .max(31, "Invalid day"),
    month: z
      .number({ invalid_type_error: "Please enter a valid month" })
      .min(1, "Invalid month")
      .max(12, "Invalid month"),
    year: z
      .number({ invalid_type_error: "Please enter a valid year" })
      .min(1900, "Year must be 1900 or later")
      .max(2023, "Year cannot be in the future"),
  }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const CreateProfile: React.FC = () => {
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: {
        firstName: "",
        lastName: "",
      },
      gender: "",
      location: "",
      dob: {
        day: 0,
        month: 0,
        year: 0,
      },
      termsAccepted: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="relative w-full md:pt-12 md:pb-4 md:pl-12 md:pr-8">
      <div className="relative flex items-center justify-center w-full">
        <ArrowLeft
          onClick={() => dispatch(setAuthView("signup"))}
          color="black"
          className="absolute left-1 md:left-0 cursor-pointer"
          size={28}
        />
        <h3 className="text-center w-[80%] text-lg md:text-[1.8rem] font-bold">
          Setup Your Account
        </h3>
      </div>
      <p className="text-center my-8">
        Except your User Name, every information is strictly confidential!
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="px-3 w-full space-y-4 md:space-y-3"
        >
          {/* Full Name */}
          <FormItem>
            <FormLabel className="font-normal text-sm">Full Name</FormLabel>
            <div className="flex space-x-4">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="fullName.firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="p-2 bg-[#D9E8D5] md:px-6 md:pb-6 md:pt-10 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                          placeholder="First Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="fullName.lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="p-2 bg-[#D9E8D5] md:px-6 md:pb-6 md:pt-10 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                          placeholder="Last Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </FormItem>

          {/* Gender and Location */}
          <div className="flex space-x-4">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormLabel className="font-normal text-sm block">
                    Gender
                  </FormLabel>
                  <FormControl>
                    <select
                      className="p-2 bg-[#D9E8D5] w-full md:px-6 md:pb-2 md:pt-8 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                      {...field}
                    >
                      <option className="font-extralight" value="" disabled>
                        Choose
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormLabel className="font-normal text-sm block">
                    Location
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Location"
                      className="p-2 bg-[#D9E8D5] md:px-6 md:pb-6 md:pt-10 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Date of Birth */}
          <FormItem>
            <FormLabel className="font-normal text-sm">Date of Birth</FormLabel>
            <div className="flex space-x-4 mt-2">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="dob.day"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="p-2 bg-[#D9E8D5] md:px-6 md:pb-6 md:pt-10 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                          type="number"
                          placeholder="DD"
                          value={field.value || ""}
                          onChange={(e) => {
                            const value = e.target.value
                              ? parseInt(e.target.value)
                              : 0;
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="dob.month"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="p-2 bg-[#D9E8D5] md:px-6 md:pb-6 md:pt-10 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                          type="number"
                          placeholder="MM"
                          value={field.value || ""}
                          onChange={(e) => {
                            const value = e.target.value
                              ? parseInt(e.target.value)
                              : 0;
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="dob.year"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="p-2 bg-[#D9E8D5] md:px-6 md:pb-6 md:pt-10 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                          type="number"
                          placeholder="YYYY"
                          value={field.value || ""}
                          onChange={(e) => {
                            const value = e.target.value
                              ? parseInt(e.target.value)
                              : 0;
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </FormItem>

          {/* Terms and Conditions */}
          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-2"
                    />
                  </FormControl>
                  <FormLabel className="text-sm">
                    I agree to platform's{" "}
                    <span className="underline cursor-pointer">
                      Terms Of Service
                    </span>{" "}
                    and{" "}
                    <span className="underline cursor-pointer">
                      Privacy Policy
                    </span>
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <Button
              className="mt-3 w-[40%] py-2 md:py-9 text-base font-semibold bg-[#4C614E] rounded-full"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateProfile;
