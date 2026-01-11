import { Delete, Trash } from "lucide-react";
import IconButton from "../common/IconButton";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { deleteBlogByIdApi } from "@/api/blog.api";
import { toast } from "sonner";

const ConfirmDialog = ({ id }) => {
  const handleDeleteBlog = async () => {
    try {
      const res = await deleteBlogByIdApi(id);
      toast.success(res.data?.message || "Blog post deleted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton variant="destructive">
          <Trash />
          Delete
        </IconButton>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose>
            <Button variant="destructive" onClick={handleDeleteBlog}>
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default ConfirmDialog;
