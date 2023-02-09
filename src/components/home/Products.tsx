import { useServerSideQuery } from "rakkasjs";
import { getProducts } from "./api";
import { ProductList } from "../products/ProductList";

interface ProductsProps {

}

export const Products = ({ }: ProductsProps) => {
    const { data, refetch } = useServerSideQuery(getProducts, {
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
    });


    return (<ProductList data={data} />)

}
