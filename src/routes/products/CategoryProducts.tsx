import { useServerSideQuery } from "rakkasjs";
import {  getProductsByCategory } from "../../components/home/api";
import { ProductList } from "../../components/products/ProductList";

interface CategoryProductsProps {
categ:string
}

export const CategoryProducts = ({categ}:CategoryProductsProps) => {
 const { data, refetch } = useServerSideQuery(
()=>{
if (typeof categ !== "string") {
  throw new Error("Invalid request , param categ must be of type string");
}
    return getProductsByCategory(categ)
},
{
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
});

return (
<ProductList data={data}/>
);
}
