import BlogCard from "@/components/BlogCard";

import { getAllBlogs } from "@/api/blog.api";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await getAllBlogs();
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
    <div className="">
      <div className="text-center space-y-4 mt-12">
        <h2 className="text-4xl font-medium">Explore Articles</h2>
        <p>
          Discover thoughtful perspectives on design, technology, and
          creativity.
        </p>
      </div>
      {isLoading ? (
        <div className="min-h-96 flex items-center justify-center">
          <Spinner className={"text-blue-500"} />
        </div>
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
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default BlogsList;
