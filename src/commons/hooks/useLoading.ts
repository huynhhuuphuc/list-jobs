import { useSelector } from 'umi';

export const useLoading = () => {
  const loading = useSelector((state: any) => state?.loading);
  return loading;
};
