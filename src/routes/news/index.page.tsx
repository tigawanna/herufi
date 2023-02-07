import { useServerSideQuery } from "rakkasjs";
import { getLatestNews } from "./news-api";
import { NewsList } from "./News";

interface NewsPageProps {

}

const NewsPage = ({ }:NewsPageProps) => {
    const { data, refetch } = useServerSideQuery(getLatestNews, {
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
    });

return (
 <div className='w-full h-full flex items-center justify-center'>
    <NewsList news={data}/>
 </div>
);
}


export default NewsPage
