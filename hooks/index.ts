import axios from "axios";
import { useQuery } from "react-query";

export const useCoupons = () => {
  const { isLoading, isError, data, error, isFetching } = useQuery(
    "coupons",
    async () => await axios.get("https://klassy.com.bd/api/v1/get-coupons")
  );

  return { isLoading, isError, data, error, isFetching };
};
