export interface ProductCategory {
  [key: string]: any;
  id?: number;
  categoryName: string;
  sort?: number;
  slug?: string;
  status: number;
  parentId: number;
}

// export type ProductCategories = Pick<
//   ProductCategory,
//   'id' | 'categoryName' | 'sort' | 'slug' | 'status' | 'parentId'
// >[];

export type ProductCategoriesResponse = {
  // data: ProductCategories;
  pageIndex: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
};

// export type ProductCategoryData = ProductCategory & {
//   subRows?: ProductCategoryData[];
// };