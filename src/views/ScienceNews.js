import React, { useEffect } from 'react'
import * as actions from "../Redux/news.actions";
import { filteredScienceList } from "../Redux/news.selectors";
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

const ScienceNews = ({getScienceList, scienceList}) => {
  useEffect(() => {
    getScienceList()
  },[])


  if (!scienceList) {
    return <div>Loading...</div>;
  }
  let science = scienceList.map((item) => (
    
      <div  key={item.id} className="d-flex justify-content-center mb-4">
        <Card key={item.source}>
          <CardImg
            top
            width="100%"
            src={item.urlToImage}
            alt={item.urlToImage}
          />
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
  ))
  return  (
    <>
    {science}
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
}
const mapDispatch = {
  getScienceList: actions.getScienceList,
};
const mapState = (state) => {
  return {
    scienceList: filteredScienceList(state),
  };
};
export default connect(mapState, mapDispatch)(ScienceNews);
