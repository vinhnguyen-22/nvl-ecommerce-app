import http from '@/lib/http';

export interface ICategory {
  categoryName: string;
  sort: number;
  slug: string;
  status: number;
  color: string;
  parent: ICategory;
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
