import { createBlogSchema } from "@/schemas/blogSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ArrowLeft } from "lucide-react";
import IconButton from "../common/IconButton";
import { createBlogApi } from "@/api/blog.api";
import { toast } from "sonner";

const CreateBlogForm = () => {
  const form = useForm({
    resolver: zodResolver(createBlogSchema),
    defaultValues: {
      title: "",
      description: "",
      image: null,
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image);

    try {
      const res = await createBlogApi(formData);
      toast.success(res.data?.message || "Published Successfully");
      
    } catch (error) {
      console.error(error);
    }

    form.reset();
  };

  return (
    <div className="md:max-w-2xl m-auto my-8 md:px-0 px-4">
      <IconButton to={"/dashboard"} variant="ghost">
        <ArrowLeft />
        Back
      </IconButton>
      <h2 className="my-8 text-2xl font-medium">Create New Post</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Image Upload */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files[0])}
                    className={"cursor-pointer"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a descriptive title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Start writing your post here..."
                    className={"h-96"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Submitting.." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default CreateBlogForm;
