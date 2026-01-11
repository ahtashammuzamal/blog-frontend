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
import { toast } from "sonner";
import useDeleteBlog from "@/hooks/useDeleteBlog";

const ConfirmDialog = ({ id }) => {
  const { mutate, isPending } = useDeleteBlog();

  const handleDeleteBlog = async () => {
    mutate(id, {
      onSuccess: () => {
        toast.success("Blog post deleted successfully");
      },
      onError: (error) => {
        console.error(error);
        toast.error(error);
      },
    });
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
            <Button
              variant="destructive"
              onClick={handleDeleteBlog}
              disabled={isPending}
            >
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default ConfirmDialog;
