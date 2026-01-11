import { getAllBlogsApi } from "@/api/blog.api";
import BlogCard from "../BlogCard";
import CustomSpinner from "./CustomSpinner";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { toast } from "sonner";

const BlogsList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.BLOGS],
    queryFn: () => getAllBlogsApi().then((res) => res?.data),
  });

  if (isLoading) return <CustomSpinner />;

  if (isError)
    return <div className="min-h-96">{toast.error("Error loading blogs")}</div>;

  return (
    <div className="py-12 px-4 md:px-0 grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
      {isError && toast.error("Error loading blogs")}
      {data?.blogs?.map((blog) => (
        <BlogCard
          key={blog._id}
          to={blog._id}
          title={blog.title}
          description={blog.description}
          imageURL={blog.imageURL}
          author={blog.author}
          createdAt={blog.createdAt}
        />
      ))}
    </div>
  );
};
export default BlogsList;
