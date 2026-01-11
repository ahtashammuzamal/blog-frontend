import { getProfileApi } from "@/api/auth.api";
import { useEffect, useState } from "react";
import MyBlog from "./MyBlog";
import { Card } from "../ui/card";
import { File } from "lucide-react";

const MyBlogsList = () => {
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const res = await getProfileApi();
        setMyBlogs(res.data.blogs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMyBlogs();
  }, []);

  return (
    <>
      <Card className="flex justify-center pl-6 my-8">
        <div className="flex gap-4">
          <div className="rounded-full bg-gray-100 p-4">
            <File className="" />
          </div>
          <div>
            <h3 className="text-xl font-medium">Your Stories</h3>
            <p>You have published {myBlogs?.length} stories</p>
          </div>
        </div>
      </Card>
      <div className="space-y-6">
        <h2 className="font-medium text-2xl">Your Posts</h2>
        <div className="min-h-96">
          {myBlogs.length === 0 ? (
            <p className="mb-4">You donot have any posts yet!</p>
          ) : (
            <div className="space-y-4 mb-8">
              {myBlogs.map((blog) => (
                <MyBlog
                  key={blog._id}
                  to={blog._id}
                  title={blog.title}
                  description={blog.description}
                  imageURL={blog.imageURL}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default MyBlogsList;
