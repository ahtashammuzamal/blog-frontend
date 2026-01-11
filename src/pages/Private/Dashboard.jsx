import IconButton from "@/components/common/IconButton";
import MyBlogsList from "@/components/dashboard/MyBlogsList";
import { SquarePen } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="md:max-w-2xl md:mx-auto mt-8 px-4 md:px-0">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Your Dashboard</h2>
        <IconButton to={"/create"}>
          New Post
          <SquarePen />
        </IconButton>
      </div>
      <MyBlogsList />
    </div>
  );
};
export default Dashboard;
