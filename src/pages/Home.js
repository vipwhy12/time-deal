import React, { useEffect, useState } from "react";
import axios from "axios";
import LatesBrands from "../components/brand/LatesBrands";
import LatesProducts from "../components/product/LatestProduct";
import Loading from "../components/Loading";

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
      <LatesBrands brands={brands} />
      <LatesProducts products={products} />
      {/* <CategoryComponent rootCategory={rootCategory} allCategory={allCategory}/> */}
    </main>
  );
}
