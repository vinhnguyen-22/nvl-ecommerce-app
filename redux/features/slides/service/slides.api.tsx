import http from '@/lib/http';

export interface ISlide {
  id?: number;
  name: string;
  image: string;
  link: string;
  description?: string;
  sort?: number;
  status: boolean;
}

export const getAllSlideFn = async () => {
  try {
    const fetcher = await http.get<ISlide>('slides').then((res) => res.data);
    return fetcher;
  } catch (error) {
    console.log('Error in getting all Categories (service) =>', error);
  }
};
