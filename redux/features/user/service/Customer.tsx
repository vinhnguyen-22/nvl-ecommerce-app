export interface Customer {
    [key: string]: any;
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    active: boolean;
  }
  
  // export type CustomerAddress = Pick<
  //   ProductCategory,
  //   'id' | 'categoryName' | 'sort' | 'slug' | 'status' | 'parentId'
  // >[];
  
  export type AddressResponse = {
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