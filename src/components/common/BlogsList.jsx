import { getAllBlogsApi } from "@/api/blog.api";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import { Spinner } from "../ui/spinner";
import CustomSpinner from "./CustomSpinner";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await getAllBlogsApi();
        setBlogs(data.blogs);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <div className="py-12 px-4 md:px-0 grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {blogs.map((blog) => (
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
      )}
    </div>
  );
};
export default BlogsList;
