import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../../components/Spiner";
import {Link} from "react-router-dom";
import NotFound from "../../components/NotFound";

const News = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        const FetchData = async () => {
            try {
                const {data} = await axios("https://613cea45270b96001798b2e8.mockapi.io/api/news")
                setNews(data)
            } catch (e) {
                setNotFound(true)
            } finally {
                setIsLoading(false)
            }
        }
        FetchData()
    }, [])

    if (isLoading) {
        return <Spinner/>
    }
    if (notFound) {
        return <NotFound/>
    }
    return (

            <div className='container mx-auto my-20 d-flex justify-content-between align-items-center'>
                <div className='grid col-md-3'>
                    {
                        news.map(el =>
                            <div className='text-center'>
                                <Link key={el.id} to={`/news/${el.id}`}>
                                    <img src={el.image} alt="" style={{objectFit: "cover", height: "173px", width: "200px"}}/>
                                    <p>{el.title}</p>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>

    );
};

export default News;