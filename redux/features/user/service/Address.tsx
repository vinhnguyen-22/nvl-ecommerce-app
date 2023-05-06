export interface Address {
    [key: string]: any;
    id?: number;
    xaid: number;
    maqh?: number;
    matp?: number;
    number: string;
    street: string;
    address_line1: string;
    address_line2: string;
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
  
  // export type ProductCategoryData = ProductCategory & {
  //   subRows?: ProductCategoryData[];
  // };