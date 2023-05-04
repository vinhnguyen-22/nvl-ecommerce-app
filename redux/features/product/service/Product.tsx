export interface Product {
  [key: string]: any
  id: number
  name: string
  description: string
  unitPrice: number
  imageUrl: string
  unitsInStock: number
  category?: ProductCategory
  brandId?: IBrand
  productGalleries?: ProductGallery[]
  dateCreated?: String
  lastUpdated?: String
}

export type ProductData = Product & {
  subRows?: ProductData[]
}

export type Products = Pick<
  ProductCategory,
  'id' | 'categoryName' | 'sort' | 'slug' | 'status' | 'parentId'
>[]

export type ProductResponse = {
  data: Products
  pageIndex: number
  pageSize: number
  totalElements: number
  totalPages: number
  last: boolean
}
