import http from '@/lib/http';

export interface ICategory {
  id: number;
  categoryName: string;
  sort: number;
  slug: string;
  status: number;
  color: string;
  parent: ICategory;
}

export interface IBrand {
  id: number;
  name: string;
  imageUrl: string;
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

export const getAllBrandFn = async () => {
  try {
    const data = await http
      .get<any>('brands/all')
      .then((res) => res.data);
    return data;
  } catch (error) {
    console.log('Error in getting all Brands (service) =>', error);
  }
};
