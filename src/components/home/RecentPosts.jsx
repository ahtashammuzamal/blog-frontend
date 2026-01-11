import BlogsList from "../common/BlogsList";
import IconButton from "../common/IconButton";
import { ArrowRight } from "lucide-react";

const RecentPosts = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Recent Posts</h1>
        <IconButton to={"/blogs"} variant="ghost">
          View all
          <ArrowRight />
        </IconButton>
      </div>
      <BlogsList />
    </div>
  );
};
export default RecentPosts;
