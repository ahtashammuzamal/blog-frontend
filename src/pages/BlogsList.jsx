import BlogCard from "@/components/BlogCard";

const BlogsList = () => {
  return (
    <div className="">
      <div className="text-center space-y-4 mt-12">
        <h2 className="text-4xl font-medium">Explore Articles</h2>
        <p>
          Discover thoughtful perspectives on design, technology, and
          creativity.
        </p>
      </div>
      <div className="py-12 px-4 md:px-0 grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
export default BlogsList;
