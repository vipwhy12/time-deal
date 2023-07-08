import BrandsHeader from "../../components/brand/BrandsHeader";
import BrandsList from "../../components/brand/BrandsList";
import Loading from "../../components/Loading";
import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

export default function Brands() {
  const { state } = useLocation();
  const [brands, setBrands] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBrands(state.brands);
    setLoading(false);
  }, [state]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <header>
        <BrandsHeader />
      </header>

      <main>
        <BrandsList brands={brands} />
      </main>
    </>
  );
}
