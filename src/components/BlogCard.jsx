import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <Link to={"/blogs/1"}>
      <Card className=" overflow-hidden rounded-2xl py-0">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Blog cover"
          className="h-56 w-full object-cover"
        />

        <CardContent className="p-5 space-y-4">
          {/* Meta */}
          <p className="text-sm text-muted-foreground">
            8 min read • 3 days ago
          </p>

          {/* Title */}
          <h2 className="text-xl font-semibold leading-snug">
            The Art of Minimalism in Modern Design
          </h2>

          {/* Description */}
          <p className="text-sm text-muted-foreground">
            Exploring how less becomes more in contemporary design practices and
            why minimalism continues to...
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pt-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/100?img=32" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>

            <span className="text-sm font-medium">Alex Morgan</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
