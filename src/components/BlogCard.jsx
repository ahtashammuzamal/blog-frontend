import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { calculateReadingTime, timeAgo, truncate } from "@/lib/utils";

const BlogCard = ({ to, title, imageURL, description, author, createdAt }) => {
  return (
    <Link to={`/blogs/${to}`}>
      <Card className="gap-4 overflow-hidden py-0 shadow-none border-none rounded-none bg-transparent">
        <img
          src={imageURL}
          alt="Blog cover"
          className="h-56 w-full object-cover rounded-2xl"
        />
        <CardContent className="px-0 space-y-4">
          <p className="text-sm text-muted-foreground">
            {calculateReadingTime(description)} • {timeAgo(`${createdAt}`)}
          </p>
          <h2 className="text-xl font-semibold leading-snug">{truncate(title, 30)}</h2>
          <p className="text-sm text-muted-foreground">{truncate(description, 130)}</p>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/src/assets/author-placeholder.png" />
              <AvatarFallback>Author</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{author?.name}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
