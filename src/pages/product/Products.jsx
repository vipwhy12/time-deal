import ProductList from "../../components/product/ProductList";
import CategorySelect from "../../components/category/categorySelect/CategorySelect";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import styled from "styled-components";

export default function Products() {
  const [products, setProduct] = useState(null);
  const [rootCategory, setRootCategory] = useState(null);
  const [userSelect, setUserSelect] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const productsResponse = await axios.get(
          "http://localhost:8080/products"
        );
        setProduct(productsResponse.data);

        const rootCategoryResponse = await axios.get(
          `http://localhost:8080/category/root`
        );
        setRootCategory(rootCategoryResponse.data);
        setLoading(false);
      } catch (error) {
        console.log("🥲데이터를 불러오는 데 실패했습니다.");
        console.error("err: ", error.message);
      }
    };

    const loadProducts = async (id) => {
      try {
        const productDescendants = await axios.get(
          `http://localhost:8080/category/descendants/${id}`
        );
        setProduct(productDescendants.data);
        setLoading(false);
      } catch (error) {
        console.log("🥲데이터를 불러오는 데 실패했습니다.");
        console.error("err: ", error.message);
      }
    };

    if (!userSelect) {
      loadData();
    } else {
      console.log(userSelect);
      setUserSelect(userSelect);
      loadProducts(userSelect);
    }
  }, [userSelect]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Title>
        <h2>📍Product List</h2>
      </Title>
      <CategorySelect
        rootCategory={rootCategory}
        setUserSelect={setUserSelect}
      />
      <ProductList
        products={products}
        userSelect={userSelect}
        setUserSelect={setUserSelect}
      />
    </main>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5%;
`;
