import { Link } from "rakkasjs";
import { NewsType } from "./news-api";

interface NewsProps {
    news: NewsType[] | null
}

export const NewsList = ({news}:NewsProps) => {
return (
 <div className='w-full h-full flex items-center justify-center'>
        <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
            {news && news?.map((item) => {
                return (
                    <div
                        key={item?.id}
                        className='w-full p-2 border rounded-md
                        flex flex-col items-center justify-start
                            '>

                        <div className="w-full text-2xl font-bold">{item?.title}</div>

                        <Link target="_blank" className="w-full"
                            href={item?.url ?? ""}>{item.url}</Link>
                    </div>
                )
            })}
        </div>
 </div>
);
}
