import { getBlogByIdApi } from "@/api/blog.api";
import IconButton from "@/components/common/IconButton";
import { Spinner } from "@/components/ui/spinner";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ArrowLeft, Calendar, Clock, Dot } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { blog: blogId } = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const { data } = await getBlogByIdApi(blogId);
        setBlog(data.blog);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogDetails();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="min-h-96 flex items-center justify-center">
          <Spinner className={"text-blue-500"} />
        </div>
      ) : (
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
            <h1 className="text-4xl font-semibold mb-8">{blog.title}</h1>
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
              <img
                src={blog.imageURL}
                alt=""
                className="rounded-lg object-cover h-full w-full"
              />
            </AspectRatio>
            <p className="mt-8 text-xl text-gray-600">{blog.description}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default BlogDetails;
