import { getProfileApi } from "@/api/auth.api";
import IconButton from "@/components/common/IconButton";
import MyBlog from "@/components/MyBlog";
import { Card } from "@/components/ui/card";
import { File, SquarePen } from "lucide-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const res = await getProfileApi();
        console.log(res.data.blogs);
        setMyBlogs(res.data.blogs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMyBlogs();
  }, []);

  return (
    <div className="md:max-w-2xl md:mx-auto mt-8 px-4 md:px-0">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Your Dashboard</h2>
        <IconButton to={"/create"}>
          New Post
          <SquarePen />
        </IconButton>
      </div>

      <Card className="flex justify-center pl-6 my-8">
        <div className="flex gap-4">
          <div className="rounded-full bg-blue-100 p-4">
            <File className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-xl font-medium">Your Stories</h3>
            <p>You have published {myBlogs?.length} stories</p>
          </div>
        </div>
      </Card>

      <div className="space-y-6">
        <h2 className="font-medium text-2xl">Your Posts</h2>
        {myBlogs.map((blog) => (
          <div>
            <MyBlog
              key={blog._id}
              to={blog._id}
              title={blog.title}
              description={blog.description}
              imageURL={blog.imageURL}
              createdAt={blog.createdAt}
              updatedAt={blog.updatedAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
