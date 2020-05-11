import React, {useEffect} from 'react'
import * as actions from "../Redux/news.actions";
import { filteredBusinessList } from "../Redux/news.selectors";
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

const BusinessNews = ({ getBusinessList, businessList }) => {
  useEffect(() => {
    getBusinessList();
  }, []);

  if (!businessList) {
    return <div>Loading...</div>;
  }
  const news = businessList.map((item) => (
    <div key={item.id} className="d-flex justify-content-center mb-4">
      <Card>
        <CardImg top width="100%" src={item.urlToImage} alt={item.urlToImage} />
        <CardBlock>
          <CardTitle>{item.title}</CardTitle>
          <CardSubtitle>{item.author}</CardSubtitle>
          <CardText>{item.description}</CardText>
          <Button style={{ width: "100%" }}>
            <a href={item.url} target="_black">Reed</a>
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
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
      </div>
    </>
  );
};

const mapDispatch = {
  getBusinessList: actions.getBusinessList,
};
const mapState = (state) => {
  return {
    businessList: filteredBusinessList(state),
  };
};
export default connect(mapState, mapDispatch)(BusinessNews);
