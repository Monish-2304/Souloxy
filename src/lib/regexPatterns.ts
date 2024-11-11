import { z } from "zod";

export const emailOrPhonePattern = z.string().refine(
  (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  },
  {
    message: "Must be a valid email or a 10-digit phone number",
  }
);
