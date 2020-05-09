import React, { useEffect } from "react";
import * as actions from "../Redux/news.actions";
import { newsListSelector, filteredNewsList } from "../Redux/news.selectors";
import { connect } from "react-redux";
import {
  Card,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
} from "@bootstrap-styled/v4";

const News = ({ getNewsList, newsList }) => {
  useEffect(() => {
    getNewsList();
  }, []);

  if (!newsList) {
    return <div>Loading...</div>;
  }

  const news = newsList.map((item) => (
    <div key={item.id} className="d-flex justify-content-center mb-4">
      <Card>
        <CardImg top width="100%" src={item.urlToImage} alt={item.urlToImage} />
        <CardBlock>
          <CardTitle>{item.title}</CardTitle>
          <CardSubtitle>{item.author}</CardSubtitle>
          <CardText>{item.description}</CardText>
          <Button style={{ width: "100%" }}>
            <a href={item.url} target="_black"></a>Reed
          </Button>
        </CardBlock>
      </Card>
    </div>
  ));
  return (
    <>
      {news}
      <div className="d-flex justify-content-center">
        <Pagination>
          <PaginationItem>
            <PaginationLink previous href="javascript:;" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="javascript:;">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="javascript:;">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="javascript:;">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="javascript:;" />
          </PaginationItem>
        </Pagination>
      </div>
    </>
  );
};

const mapDispatch = {
  getNewsList: actions.getNewsList,
};
const mapState = (state) => {
  return {
    newsList: filteredNewsList(state),
  };
};
export default connect(mapState, mapDispatch)(News);
