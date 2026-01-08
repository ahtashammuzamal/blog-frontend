import IconButton from "@/components/common/IconButton";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ArrowLeft, Calendar, Clock, Dot } from "lucide-react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <div className="md:max-w-2xl md:m-auto px-4 md:px-0 py-8 ">
      <IconButton variant="ghost" to={"/blogs"}>
        <ArrowLeft />
        Back to blogs
      </IconButton>

      <div className="flex gap-2 my-8">
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

      <div>
        <h1 className="text-4xl font-semibold mb-8">
          The Future of Web Typography
        </h1>
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
          <img
            src="/src/assets/demo.webp"
            alt=""
            className="rounded-lg object-cover h-full w-full"
          />
        </AspectRatio>
        <p className="mt-8 text-xl text-gray-600">
          In a world overwhelmed by visual noise, minimalism stands as a beacon
          of clarity and purpose. This design philosophy isn't merely about
          aesthetic choices—it's a framework for thinking, creating, and living.
        </p>
      </div>
    </div>
  );
};
export default BlogDetails;
