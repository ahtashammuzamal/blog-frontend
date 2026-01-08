import IconButton from "@/components/common/IconButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Calendar, Clock, Dot, File, SquarePen } from "lucide-react";
import { Link } from "react-router-dom";

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

      <Card className="flex justify-center pl-6 my-8">
        <div className="flex gap-4">
          <div className="rounded-full bg-blue-100 p-4">
            <File className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-xl font-medium">Your Stories</h3>
            <p>You have published 2 stories</p>
          </div>
        </div>
      </Card>

      <div className="space-y-6">
        <h2 className="font-medium text-2xl">Your Posts</h2>
        <Link to={"/blogs/1"}>
          <Card className="px-4 md:flex-row">
            <div className="w-full md:max-w-32">
              <AspectRatio>
                <img
                  src="/src/assets/demo.webp"
                  alt="preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              </AspectRatio>
            </div>
            <div className="space-y-4">
              <h2 className="font-semibold text-xl">
                The Art of Minimalism in Modern Design
              </h2>
              <div className="flex gap-2">
                <span className="bg-gray-200 text-gray-500 px-2 text-sm rounded-2xl">
                  Typography
                </span>
                <span className="flex">
                  <Dot />
                  <span className="flex items-center gap-1">
                    <Clock className="text-gray-600" size={15} />
                    <p className="text-gray-600">6 min read</p>
                  </span>
                </span>
                <span className="flex">
                  <Dot />
                  <span className="flex items-center gap-1">
                    <Calendar className="text-gray-600" size={15} />
                    <p className="text-gray-600">7 days ago</p>
                  </span>
                </span>
              </div>
              <p>
                Exploring how less becomes more in contemporary design practices
                and why minimalism continues to dominate visual aesthetics.
              </p>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
