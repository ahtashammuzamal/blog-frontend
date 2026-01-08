import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center md:gap-8 gap-4 md:max-w-2xl md:m-auto md:py-52 px-4 mt-16">
      <p className="bg-white rounded-2xl shadow-xs px-2 py-1">
        A platform for thoughtful expression
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold text-center">
        Ideas deserve beautiful spaces to be shared with the world
      </h2>
      <p className="text-center">
        Wordsmith gives your ideas the elegant, distraction-free environment
        they deserve. Focus on your writing while we handle everything else.
      </p>
      <div className="space-x-3">
        <Button asChild>
          <Link to={"/auth/register"} className="">
            Get Started
          </Link>
        </Button>

        <Button asChild variant="outline">
          <Link to={"/blogs"}>Explore Blogs</Link>
        </Button>
      </div>
    </div>
  );
};
export default Home;
