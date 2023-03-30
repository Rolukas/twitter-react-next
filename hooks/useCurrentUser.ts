import fetcher from '@/libs/fetcher';
import useSWE from 'swr';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWE('/api/current', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
