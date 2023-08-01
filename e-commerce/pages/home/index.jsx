import About from "@/components/About";
import Corousel from "@/components/Coroulse";
import ProductSection from "@/components/ProductSection";
import Blog from "@/components/blog/Blog";
import Review from "@/components/customerRewiev/Review";
import ProductWrapper from "@/components/product/ProductWrapper";
import TopSellerWrapper from "@/components/topSeller/TopSellerWrapper";
import React from "react";

function Home({productList,categoryList}) {
  return (
    <div>
      <Corousel />
      <TopSellerWrapper />
      <ProductWrapper productList={productList} categoryList={categoryList} />
      <About />
      <ProductSection />
      <Blog />
      <Review />
    </div>
  );
}

export default Home;
