import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spiner";
import NotFound from "../../components/NotFound";
import Comments from "../../components/Comments";

const NewsDetails = () => {
    const [oneNews, setOneNews] = useState({})
    // eslint-disable-next-line no-undef
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)


    useEffect(() => {
        const FetchData = async () => {
            try {
                const {data} = await axios(`https://613cea45270b96001798b2e8.mockapi.io/api/news/${id}`)
                setOneNews(data)
            } catch (e) {
                setNotFound(true)
            } finally {
                setIsLoading(false)
            }
        }
        FetchData()
    }, [id])
    if (isLoading) {
        return <Spinner/>
    }
    if (notFound){
        return <NotFound />
    }
    return (
        // <Layout>
            <div className='container '>
                <div className="row">
                    <h1 className='my-5 text-center'>{oneNews.title}</h1>

                    <div className='col-md-6'>
                        <img src={oneNews.image} style={{height: "350px", width: "510px"}} alt="" className='img-news-2'/>
                    </div>
                    <div className="col-md-6">
                        <p className="fs-4 my-4">{oneNews.subtitle}</p>
                        <div >
                            <div className="d-flex align-items-center">
                                <img style={{borderRadius: "50%", height: "50px"}} src={oneNews.authorImage} alt="" />
                                <p className='ms-2'>{oneNews.authorInfo}</p>
                            </div>
                            <p>{oneNews.updateDate}</p>
                        </div>
                    </div>
                </div>
                <p className="fs-5 my-5">{oneNews.text}</p>
                <p className="fs-5"><b>leave your feedback</b></p>
                <Comments />
            </div>

        // </Layout>
    );
};

export default NewsDetails;