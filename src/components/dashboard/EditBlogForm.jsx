import { editBlogSchema } from "@/schemas/blogSchema";
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
import { getBlogByIdApi, updateBlogByIdApi } from "@/api/blog.api";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBlogForm = () => {
  const [preview, setPreview] = useState("");

  const { id } = useParams();

  const form = useForm({
    resolver: zodResolver(editBlogSchema),
    defaultValues: {
      title: "",
      description: "",
      image: null,
    },
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogByIdApi(id);
        const blog = res.data?.blog;

        // Update the form values manually once data arrives
        setPreview(blog.imageURL);
        form.reset({
          title: blog.title,
          description: blog.description,
          image: null,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, []);

  const handleImageUpdate = (e, field) => {
    const file = e.target.files[0];
    field.onChange(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);

    if (data.image) {
      formData.append("image", data.image);
    }

    try {
      const res = await updateBlogByIdApi(id, formData);
      toast.success(res.data?.message || "Blog updated successfully");
    } catch (error) {
      console.error(error);
    }
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
                <div className="flex gap-4">
                  {preview && <img src={preview} className="h-9 rounded" />}
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpdate(e, field)}
                      className={"cursor-pointer"}
                    />
                  </FormControl>
                </div>

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
            {form.formState.isSubmitting ? "Updating..." : "Update"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default EditBlogForm;
