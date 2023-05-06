export interface Slides {
    [key: string]: any;
    id?: number;
    name: string;
    image: string;
    sort: number;
    link: string;
    status: boolean;
  }
  
//   export type ProductCategories = Pick<
//     ProductCategory,
//     'id' | 'categoryName' | 'sort' | 'slug' | 'status' | 'parentId'
//   >[];
  
  export type ProductCategoriesResponse = {
    // data: ProductCategories;
    pageIndex: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
  };
  
//   export type ProductCategoryData = ProductCategory & {
//     subRows?: ProductCategoryData[];
//   };