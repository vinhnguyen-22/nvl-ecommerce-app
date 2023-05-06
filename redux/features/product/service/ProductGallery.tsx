export interface ProductCategory {
    [key: string]: any;
    product_id: number;
    name: string;
    image_url: string;
    description: string;
    sort: number;
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