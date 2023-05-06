export interface ProductCategory {
    [key: string]: any;
    product_id: number;
    sku: string;
    image_url: string;
    units_in_stock: number;
    unit_price: number;
    discount_price: number;
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