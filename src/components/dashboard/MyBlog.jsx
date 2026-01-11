import { Eye, SquarePen, Trash } from "lucide-react";
import { truncate } from "@/lib/utils";
import ConfirmDialog from "./ConfirmDialog";
import { Card } from "../ui/card";
import IconButton from "../common/IconButton";

const MyBlog = ({ to, title, description, imageURL }) => {
  return (
    <Card className="px-4 md:flex-row">
      <div className="w-full md:max-w-32">
        <img
          src={imageURL}
          alt="preview"
          className="w-full md:h-full h-32 object-cover rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p>{truncate(description, 100)}</p>
        <div className="space-x-4">
          <IconButton to={`/blogs/${to}`} variant="outline">
            <Eye />
            View
          </IconButton>
          <IconButton to={`/edit/${to}`} variant="outline">
            <SquarePen />
            Edit
          </IconButton>

          <ConfirmDialog id={to} />
        </div>
      </div>
    </Card>
  );
};
export default MyBlog;
