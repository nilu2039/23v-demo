import { unsplashApi } from "@/lib/api";
import { UNSPLASH_ACCESS_KEY } from "@/lib/constants";
import { ImageDetail } from "@/types/image.type";
import { useQuery } from "@tanstack/react-query";

const fetchImageDetails = async (id: string): Promise<ImageDetail> => {
  try {
    const { data } = await unsplashApi.get(
      `/photos/${id}/?client_id=${UNSPLASH_ACCESS_KEY}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const useFetchImageDetails = (id: string) => {
  const { data, isLoading, isError, error, isFetching, isRefetching } =
    useQuery({
      queryFn: () => fetchImageDetails(id),
      queryKey: ["image_details", id],
    });
  return {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isRefetching,
  };
};

export default useFetchImageDetails;
