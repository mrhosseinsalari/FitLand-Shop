import { getUserApi } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

export default function useGetUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUserApi,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { user, cart } = data || {};

  return { user, cart, isLoading };
}
