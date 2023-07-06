import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import LatestData from "../components/LatestData";
import CategoryTest from "../components/category/CategoryTest";
import Rank from "../components/Rank";

export default function Home() {
  const url = "http://localhost:8080/";
  const [brands, setBrands] = useState(null);
  const [products, setProducts] = useState(null);
  const [rootCategory, setRootCategory] = useState(null);
  const [rank, setRank] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const brandResponse = await axios.get(url + "brands/new");
        setBrands(brandResponse.data);

        const productsResponse = await axios.get(url + "products/new");
        setProducts(productsResponse.data);

        const rootCategoryResponse = await axios.get(url + "category/root");
        setRootCategory(rootCategoryResponse.data);

        const rankResponse = await axios.get(url + "sales/rank");
        setRank(rankResponse.data);

        setLoading(false);
      } catch (error) {
        console.log("🥲데이터를 불러오는 데 실패했습니다.");
        console.error("err: ", error.message);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <main>
      <LatestData data={brands} title="최신 브랜드" url="/brands/" />
      <LatestData data={products} title="최신 상품" url="/products/" />
      {/* <CategoryTest rootCategory={rootCategory} /> */}
      <Rank rank={rank}></Rank>
      {/* <CategoryComponent rootCategory={rootCategory} allCategory={allCategory}/> */}
    </main>
  );
}
