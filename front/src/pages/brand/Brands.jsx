import BrandsHeader from "../../components/brand/brandsHeader/BrandsHeader";
import BrandsList from "../../components/brand/brandList/BrandsList";
import Loading from "../../components/Loading";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";

export default function Brands() {
  const { state } = useLocation();
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const response = await axios.get("http://localhost:8080/brands");
        setBrands(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    loadBrands();
  }, [state]);

  const handleBrandCreated = (newBrand) => {
    setBrands([...brands, newBrand]);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <header>
        <BrandsHeader setBrands={handleBrandCreated} />
      </header>

      <main>
        <BrandsList brands={brands} />
      </main>
    </>
  );
}
