import BrandHeader from "../../components/brand/brandHeader/BrandHeader";
import ProductList from "../../components/product/ProductList";
import Loading from "../../components/Loading";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Brand() {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBrand = async () => {
      try {
        const responseBrand = await axios.get(
          `http://localhost:8080/brands/${id}`
        );
        setBrand(responseBrand.data);
        setProducts(responseBrand.data.products);
        setLoading(false);
      } catch (error) {
        console.log("🥲데이터를 불러오는 데 실패했습니다.");
        console.error("err: ", error.message);
        setLoading(false);
      }
    };
    loadBrand();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <header>
        <BrandHeader brand={brand} />
      </header>

      <main>
        <ProductList products={products} />
      </main>
    </>
  );
}
