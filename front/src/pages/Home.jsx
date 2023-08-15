import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import LatestData from "../components/LatestData";
import Rank from "../components/Rank";
import styled from "styled-components";
import Categories from "./category/Categories";

export default function Home() {
  const GET_ROW = 3;

  const [brands, setBrands] = useState(null);
  const [products, setProducts] = useState(null);
  const [rootCategory, setRootCategory] = useState(null);
  const [rank, setRank] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const brandResponse = await axios.get(
          `http://localhost:8080/brands/new`
        );
        setBrands(brandResponse.data);

        const productsResponse = await axios.get(
          `http://localhost:8080/products/new`
        );
        setProducts(productsResponse.data);

        const rootCategoryResponse = await axios.get(
          `http://localhost:8080/category/root`
        );
        setRootCategory(rootCategoryResponse.data);

        const rankResponse = await axios.get(
          `http://localhost:8080/sales/rank/${GET_ROW}`
        );
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
    return <Loading />;
  }

  return (
    <main>
      <article>
        <Title>Recently</Title>
        <LatestDataContainer>
          <LatestData data={brands} title="✨최신 브랜드✨" url="/brands/" />
          <LatestData data={products} title="✨최신 상품✨" url="/products/" />
        </LatestDataContainer>
      </article>
      <article>
        <Rank rank={rank} />
      </article>

      <article>
        <Categories rootCategory={rootCategory} />
      </article>
    </main>
  );
}

const LatestDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Title = styled.h3`
  padding: 10px 5px -10px;
`;
