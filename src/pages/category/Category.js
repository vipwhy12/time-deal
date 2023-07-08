import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import ProductList from "../../components/product/ProductList";

export default function Category() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [products, setProduct] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/category/" + id).then(({ data }) => {
      setCategory(data);
    });

    axios
      .get("http://localhost:8080/category/descendants/" + id)
      .then(({ data }) => {
        setProduct(data);
        console.log(data);
      });
  }, []);

  if (!category || !products) {
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
