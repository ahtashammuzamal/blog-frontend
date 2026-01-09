import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const BlogCard = ({ to, title, imageURL, description, author }) => {
  return (
    <Link to={to}>
      <Card className=" overflow-hidden rounded-2xl py-0">
        <img
          src={imageURL}
          alt="Blog cover"
          className="h-56 w-full object-cover"
        />
        <CardContent className="p-5 space-y-4">
          <p className="text-sm text-muted-foreground">
            8 min read • 3 days ago
          </p>
          <h2 className="text-xl font-semibold leading-snug">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center gap-3 pt-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/100?img=32" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{author?.name}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
