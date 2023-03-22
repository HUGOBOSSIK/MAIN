import './Responsive.css';
import './App.css';
import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Baner from "./Components/Baner/Baner";
import Content from "./Components/Content/Content";
import Goods from "./Components/Goods/Goods";
import Post from "./Components/Post/Post";
import Jewelry from "./Components/Jewelry/Jewelry";
import Hit_refresh from "./Components/Hit refresh/Hit_refresh";
import Explore from "./Components/Exprole/Explore";
import Show_Now from "./Components/Shop Now/Show_Now";
import Trending from "./Components/Trending/Trending";
import Materials from "./Components/Materials/Materials";
import Dog from "./Components/Dog/Dog";
import Like from "./Components/Like/Like";
import Press from "./Components/Press/Press";
import Quality from "./Components/Quality/Quality";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";


function App() {

  return (
    <div className="App">
     <Header/>
     <Baner/>
     <Content/>
     <Goods/>
     <Post/>
     <Jewelry/>
     <Hit_refresh/>
     <Explore/>
     <Show_Now/>
     <Trending/>
     <Materials/>
     <Dog/>
     <Like/>
     <Press/>
     <Quality/>
     <Footer/>
       <Modal/>
    </div>
  );
}

export default App;
