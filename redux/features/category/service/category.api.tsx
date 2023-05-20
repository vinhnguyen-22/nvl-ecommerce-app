import http from '@/lib/http';

export interface ICategory {
  imgSrc: string;
  bgc: string;
  categoryTitle: string;
  href: string;
}

export const getAllProductCategoriesFn = async () => {
  try {
    const fetcher = await http
      .get<ICategory>('productCategories/all')
      .then((res) => res.data);
    return fetcher;
  } catch (error) {
    console.log('Error in getting all Categories (service) =>', error);
  }
};
