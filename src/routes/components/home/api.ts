export interface Main {
    products: ProductType[];
    total:    number;
    skip:     number;
    limit:    number;
}

export interface ProductType {
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           CategoryType;
    thumbnail:          string;
    images:             string[];
}

export enum CategoryType {
    Fragrances = "fragrances",
    Skincare = "skincare",
}






export async function getProducts(){
let headersList = {
 "Accept": "*/*",
//  "User-Agent": "Thunder Client (https://www.thunderclient.com)"
}

try {
 const  response = await fetch("https://dummyjson.com/products?limit=10&skip=10", { 
  method: "GET",
  headers: headersList
});
return await response.json() as Main
} catch (error) {
    console.log("massive error ",error)
}

}

export const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
] as const


export async function getProductsyCategory(category:string){
let headersList = {
 "Accept": "*/*",
//  "User-Agent": "Thunder Client (https://www.thunderclient.com)"
}

try {
 const  response = await fetch(`https://dummyjson.com/products/category/${category}`, { 
  method: "GET",
  headers: headersList
});
return await response.json() as Main
} catch (error) {
    console.log("massive error ",error)
}

}
