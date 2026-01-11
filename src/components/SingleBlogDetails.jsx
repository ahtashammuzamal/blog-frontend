import { getBlogByIdApi } from "@/api/blog.api";
import { ArrowLeft, Calendar, Clock, Dot } from "lucide-react";
import IconButton from "./common/IconButton";
import CustomSpinner from "./common/CustomSpinner";
import { calculateReadingTime, timeAgo } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { toast } from "sonner";

const SingleBlogDetails = ({ id }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.BLOG, id],
    queryFn: () => getBlogByIdApi(id).then((res) => res.data),
    enabled: !!id,
  });

  if (isLoading) return <CustomSpinner />;

  if (isError)
    return <div className="min-h-96">{toast.error("Error loading blogs")}</div>;

  const blog = data?.blog;

  return (
    <div className="md:max-w-2xl md:m-auto px-4 md:px-0 py-8 ">
      <IconButton variant="ghost" to={"/blogs"}>
        <ArrowLeft />
        Back to blogs
      </IconButton>

      <div className="flex gap-2 my-8">
        <span className="flex">
          <Dot />
          <span className="flex items-center gap-1">
            <Clock className="text-gray-600" size={15} />
            <p className="text-gray-600">
              {calculateReadingTime(blog.description)}
            </p>
          </span>
        </span>
        <span className="flex">
          <Dot />
          <span className="flex items-center gap-1">
            <Calendar className="text-gray-600" size={15} />
            <p className="text-gray-600">{timeAgo(`${blog.createdAt}`)}</p>
          </span>
        </span>
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">
          {blog.title}
        </h1>
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
  );
};
export default SingleBlogDetails;
