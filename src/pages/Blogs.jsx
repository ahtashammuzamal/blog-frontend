import BlogsList from "@/components/common/BlogsList";

const Blogs = () => {
  return (
    <div className="space-y-4 mt-12">
      <h2 className="text-center text-4xl font-medium">Explore Articles</h2>
      <p className="text-center">
        Discover thoughtful perspectives on design, technology, and creativity.
      </p>
      <BlogsList />
    </div>
  );
};
export default Blogs;
