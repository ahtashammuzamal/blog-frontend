import { deleteBlogByIdApi } from "@/api/blog.api";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlogByIdApi,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries([QUERY_KEYS.BLOGS]);
      queryClient.invalidateQueries([QUERY_KEYS.BLOG, id]);
    },
  });
};
export default useDeleteBlog;
