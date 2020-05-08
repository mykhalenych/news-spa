import React, {useEffect} from 'react'
import * as actions from "../Redux/news.actions";
import {newsListSelector} from '../Redux/news.selectors'
import { connect } from "react-redux";

const News = ({getNewsList, news}) => {
  useEffect(()=> {
    getNewsList()

  },[])

  

  // console.log(news.articles)



//   author: "zaxid.net"
// content: null
// description: "Кількість летальних випадків в області зросла до 18"
// publishedAt: "2020-05-08T06:31:32Z"
// source: {id: null, name: "Zaxid.net"}
// title: "Львівщина третій день поспіль фіксує рекордне зростання кількості хворих на коронавірус — ZAXID.NET - zaxid.net"
// url: "https://zaxid.net/lvivshhina_tretiy_den_pospil_fiksuye_rekordne_zrostannya_kilkisti_hvorih_na_koronavirus_n1501949"
// urlToImage: "https://zaxid.net/resources/photo
if(!news){
  return <div>Loading...</div>
}
  return(
    news.map(item => (
<>
      <div>{item.author}</div>
      <div>{item.description}</div>
      <div>{item.publishedAt}</div>
</>
    ))
  )
}


const mapDispatch = {
  getNewsList: actions.getNewsList,
};
const mapState = (state) => {
  return {
    news: newsListSelector(state),
  };
};
export default connect(mapState, mapDispatch)(News);