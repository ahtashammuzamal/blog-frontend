import z from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  description: z.string().min(10, "Description must be at least 10 characters"),

  image: z
    .any()
    .refine((file) => file instanceof File, "Image is required")
    .refine(
      (file) => file?.size <= 5 * 1024 * 1024,
      "Image must be less than 5MB"
    )
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file?.type),
      "Only JPG, PNG or WEBP images are allowed"
    ),
});

export const editBlogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  description: z.string().min(10, "Description must be at least 10 characters"),

  image: z
    .any()
    .optional()
    .refine((file) => !file || file instanceof File, "Image is required")
    .refine(
      (file) => !file || file?.size <= 5 * 1024 * 1024,
      "Image must be less than 5MB"
    )
    .refine(
      (file) =>
        !file || ["image/jpeg", "image/png", "image/webp"].includes(file?.type),
      "Only JPG, PNG or WEBP images are allowed"
    ),
});
