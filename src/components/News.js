import React,{useState,useEffect} from "react";
import NewsItem from "./NewsItem";
import Loading from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import newsImage from "./newsImg_1.jpg";

const News=(props)=> {
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(false);
  const [pages,setPages] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  // document.title =props.category !== "general" ? capitalise(props.category) + " - NewsHub" : "NewsHub - Your Gateway to the World";

  const capitalise = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  const updateNews=async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${pages}`;
    props.setProgress(20);
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
    document.title =(props.category !== "general" ? capitalise(props.category) + " - NewsHub" : "NewsHub - Your Gateway to the World");
  }
  
  useEffect(()=>{
     updateNews();
     // eslint-disable-next-line 
  },[])

  const fetchMoreData=async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${pages+1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTotalResults(parsedData.totalResults)
    setArticles(articles.concat(parsedData.articles))
    setPages(pages+1);
  }

    return (
      <>
        <h2 className="text-center" style={{ marginBottom: "25px", marginTop: "81px"}}>
          NewsHub -{props.category === "general"? "Today's Top Headlines" :`Top ${capitalise(props.category)} Headlines`}
        </h2>
        {loading &&<Loading/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Loading/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem source={ele.source.name} title={ele.title} description={ele.description}
                    imageUrl={ele.urlToImage? ele.urlToImage: newsImage}  
                    newsUrl={ele.url} author={ele.author ? ele.author : "unknown"} time={new Date(ele.publishedAt).toGMTString()}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
}

News.defaultProp = {
  country: "in",
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired
};

export default News;
