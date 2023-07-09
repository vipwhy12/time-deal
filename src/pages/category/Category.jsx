import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import ProductList from "../../components/product/ProductList";

export default function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const categoryResponse = await axios.get(
          `http://localhost:8080/category/${id}`
        );
        setCategory(categoryResponse.data);

        const productsResponse = await axios.get(
          `http://localhost:8080/category/descendants/${id}`
        );
        setProducts(productsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>{category.name}</h1>
      <h2>{products.length}</h2>
      <ProductList products={products} />
    </>
  );
}
