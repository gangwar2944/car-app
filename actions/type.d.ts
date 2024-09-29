export interface CarsData {
    cars: Car[]
    pagination: Pagination
  }
  
  export interface Car {
    id: number
    make: string
    model: string
    year: number
    price: number
    description: string
    specifications: Specifications
    images: string[]
  }
  
  export interface Specifications {
    engine: string
    horsepower: number
    mpg: string
  }
  
  export interface Pagination {
    currentPage: number
    totalPages: number
    pageSize: number
  }
  