import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import LatestData from "../components/LatestData";

export default function Home() {
  const [brands, setBrands] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const brandResponse = await axios.get(
          "http://localhost:8080/brands/new"
        );
        setBrands(brandResponse.data);

        const productsResponse = await axios.get(
          "http://localhost:8080/products/new"
        );
        setProducts(productsResponse.data);

        setLoading(false);
      } catch (error) {
        console.log("🥲데이터를 불러오는 데 실패했습니다.");
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

      {/* <CategoryComponent rootCategory={rootCategory} allCategory={allCategory}/> */}
    </main>
  );
}
