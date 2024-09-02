import { unsplashApi } from "@/lib/api";
import { UNSPLASH_ACCESS_KEY } from "@/lib/constants";
import { AllImage } from "@/types/image.type";
import { useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import { useCallback, useState } from "react";

const getImages = async (
  page: number = 1,
  searchString = ""
): Promise<AllImage[]> => {
  try {
    if (!searchString) {
      const { data } = await unsplashApi.get(
        `/photos/?client_id=${UNSPLASH_ACCESS_KEY}&per_page=6&page=${page}`
      );
      return data;
    } else {
      const { data } = await unsplashApi.get(
        `/search/photos/?client_id=${UNSPLASH_ACCESS_KEY}&per_page=6&page=${page}&query=${searchString}`
      );
      return data.results;
    }
  } catch (error) {
    throw error;
  }
};

const useGetImages = () => {
  const [page, setPage] = useState<number>(1);
  const [searchString, setSearchString] = useState<string>("");

  const debouncedSearch = useCallback(
    debounce((str: string) => {
      setSearchString(str);
    }, 500),
    []
  );

  const handleSearch = (str: string) => {
    debouncedSearch(str);
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const { data, isLoading, isError, error, isFetching, isRefetching } =
    useQuery({
      queryFn: () => getImages(page, searchString),
      queryKey: ["all_images", page, searchString],
    });
  return {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isRefetching,
    handleNext,
    handleBack,
    handleSearch,
  };
};

export default useGetImages;
