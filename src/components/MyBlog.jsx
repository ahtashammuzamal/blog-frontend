import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Calendar, Clock, Dot, Eye, SquarePen, Trash } from "lucide-react";
import IconButton from "./common/IconButton";
import { deleteBlogByIdApi } from "@/api/blog.api";
import { toast } from "sonner";
import { Button } from "./ui/button";

const MyBlog = ({ to, title, description, imageURL, createdAt, updatedAt }) => {
  const handleDeleteBlog = async (id) => {
    try {
      const res = await deleteBlogByIdApi(id);
      toast.success(res.data?.message || "Blog post deleted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="px-4 md:flex-row">
      <div className="w-full md:max-w-32">
        <AspectRatio>
          <img
            src={imageURL}
            alt="preview"
            className="w-full h-full object-cover rounded-lg"
          />
        </AspectRatio>
      </div>
      <div className="space-y-4">
        <h2 className="font-semibold text-xl">{title}</h2>
        <div className="flex gap-2">
          <span className="bg-gray-200 text-gray-500 px-2 text-sm rounded-2xl">
            Typography
          </span>
          <span className="flex">
            <Dot />
            <span className="flex items-center gap-1">
              <Clock className="text-gray-600" size={15} />
              <p className="text-gray-600">6 min read</p>
            </span>
          </span>
          <span className="flex">
            <Dot />
            <span className="flex items-center gap-1">
              <Calendar className="text-gray-600" size={15} />
              <p className="text-gray-600">7 days ago</p>
            </span>
          </span>
        </div>
        <p>{description}</p>
        <div className="space-x-4">
          <IconButton to={`/blogs/${to}`} variant="outline">
            <Eye />
            View
          </IconButton>
          <IconButton to={`/edit/${to}`} variant="outline">
            <SquarePen />
            Edit
          </IconButton>
          <Button variant="outline" className="cursor-pointer">
            <Trash />
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default MyBlog;
