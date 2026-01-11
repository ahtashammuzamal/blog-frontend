import SingleBlogDetails from "@/components/SingleBlogDetails";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { blog: id } = useParams();
  return <SingleBlogDetails id={id} />;
};
export default BlogDetails;
