import { createBlogSchema } from "@/schemas/blogSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import useCreateBlog from "@/hooks/useCreateBlog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import IconButton from "../common/IconButton";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useNavigate } from "react-router-dom";

const CreateBlogForm = () => {
  const form = useForm({
    resolver: zodResolver(createBlogSchema),
    defaultValues: {
      title: "",
      description: "",
      image: null,
    },
  });

  const navigate = useNavigate();

  const { mutate, isPending } = useCreateBlog();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image);

    mutate(formData, {
      onSuccess: () => {
        form.reset();
        toast.success("Blog post created successfully");
        navigate("/blogs");
      },
      onError: (error) => {
        console.error(error);
        toast.error(error);
      },
    });
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

          <Button type="submit" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default CreateBlogForm;
