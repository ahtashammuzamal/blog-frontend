import IconButton from "@/components/common/IconButton";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";

const CreateBlog = () => {
  return (
    <div className="md:max-w-2xl md:mx-auto mt-8 px-4 md:px-0">
      <IconButton to={'/dashboard'} variant="ghost">
        <ArrowLeft />
        Back
      </IconButton>
      <h2 className="my-8 text-2xl font-medium">Create New Post</h2>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel>Title</FieldLabel>
            <Input placeholder="Enter a descriptive title" />
          </Field>
          <Field>
            <FieldLabel>Content</FieldLabel>
            <Textarea
              placeholder="Start writing your content here..."
              className={"h-96"}
            />
          </Field>
        </FieldGroup>
        <Button className={"self-end"}>Publish Post</Button>
      </FieldSet>
      <div className="h-8"></div>
    </div>
  );
};
export default CreateBlog;
