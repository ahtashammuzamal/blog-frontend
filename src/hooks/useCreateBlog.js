import { createBlogApi } from "@/api/blog.api";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBlogApi,
    mutationKey: [QUERY_KEYS.BLOGS],
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.BLOGS]);
    },
  });
};
export default useCreateBlog;
