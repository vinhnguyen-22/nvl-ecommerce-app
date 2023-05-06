export interface Category {
    [key: string]: any
    id: number
    category_name: string
    slug: string
    unitPrice: number
    status: boolean
    sort: number
    parentId?: number
    date_created?: string
    last_updated?: string[]

  }
  
  export type CategoryData = Category & {
    subRows?: CategoryData[]
  }
  
  export type Categories = Pick<
    ,
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
  