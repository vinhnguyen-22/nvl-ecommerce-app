import http from '@/lib/http';
import queryString from 'query-string';

export interface IProduct {}

export const getAllProductByCateogryFn = async (urlParams: any) => {
  const searchQuery = queryString.stringify(urlParams);
  try {
    const fetcher = await http
      .get<IProduct>(`products?${urlParams}`)
      .then((res) => res.data);
    return fetcher;
  } catch (error) {
    console.log('Error in getting all Categories (service) =>', error);
  }
};
