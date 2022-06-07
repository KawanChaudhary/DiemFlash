import React, { Component } from "react";
import Newitem from "./newitem";
import Masonry from "react-masonry-css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTop from "react-scroll-to-top";

export class news extends Component {
  
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "technology",
    type : "category"
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    type: PropTypes.string
  };

  constructor() {
    super();

    this.state = {
      news: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    this.props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&${this.props.type}=${this.props.category}&sortBy=publishedAt&apiKey=0863bc22ea5f41a9b2977165a9176f7d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(70);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(85);
    this.setState({
      news: parsedData.articles,
      page: this.state.page + 1,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    document.title =
      "DiemFlash - " +
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1);
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&${this.props.type}=${this.props.category}&sortBy=publishedAt&apiKey=0863bc22ea5f41a9b2977165a9176f7d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      news: this.state.news.concat(parsedData.articles),
      page: this.state.page + 1,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  render() {
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    };

    return (
      <>
        <div className="container">
          <h1 className="my-3">
            <u>Top-Headlines</u> -{" "}
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}
          </h1>
        </div>
        <InfiniteScroll
          dataLength={this.state.news.length}
          next={this.fetchMoreData}
          hasMore={this.state.news.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid row"
              columnClassName="my-masonry-grid_column"
            >
              {this.state.news.map((element) => {
                return (
                  <Newitem key={element.url}
                    title={
                      element.title != null ? element.title.length > 100 ? element.title.slice(0, 100) + "...": element.title: ""
                    }
                    // description={ 
                    url={element.url}
                    urlImage={element.urlToImage}
                    idName={element.source.name}
                    time={
                      element.publishedAt.slice(0, 10) +
                      " " +
                      element.publishedAt.slice(11, 18)
                    }
                    author={
                      element.author
                        ? element.author.slice(0, 15)
                          ? element.author.slice(0, 15)
                          : element.author
                        : "Unknown"
                    }
                  />
                );
              })}
            </Masonry>
          </div>
        </InfiniteScroll>
        <ScrollToTop smooth />
      </>
    );
  }
}

export default news;
