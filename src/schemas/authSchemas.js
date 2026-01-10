import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ error: "Email is required" }),
  password: z.string().min(6, "Minimum 6 characters"),
});

export const registerSchema = z.object({
  name: z.string().min(3, "Name should be of atleast 3 characters"),
  email: z.email({ error: "Email is required" }),
  password: z.string().min(6, "Minimum 6 characters"),
});
