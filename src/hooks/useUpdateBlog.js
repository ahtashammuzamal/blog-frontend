import { updateBlogByIdApi } from "@/api/blog.api";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBlogByIdApi,
    onSuccess: (_, variables) => {
      // variables = { id, data }
      queryClient.invalidateQueries([QUERY_KEYS.BLOG]);
      queryClient.invalidateQueries([QUERY_KEYS.BLOGS, variables.id]);
    },
  });
};
export default useUpdateBlog;
