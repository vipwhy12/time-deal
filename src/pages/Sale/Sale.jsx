import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdateSale from "../../components/UpdateSale";
import { useLocation } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import { Card } from "react-bootstrap";

export default function Sale() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [sales, setSales] = useState(null);
  const URL = "http://localhost:8080/";
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const loadSales = async () => {
      try {
        const salesResponse = await axios.get(URL + "sales/brands/" + id);
        setSales(salesResponse.data);
        setLoading(false);
      } catch (error) {
        console.log("🥲데이터를 불러오는 데 실패했습니다.");
        console.error("err: ", error.message);
      }
    };
    loadSales();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const move = (data) => {
    console.log(data.product.id);
    navigate("/products/" + data.product.id);
  };

  return (
    <>
      <header>
        <h2>{state && state.brandName}'s Sales List</h2>
      </header>
      <Card>
        <ListGroup>
          {sales &&
            sales.map(({ id, salesCount, product, category }, index) => {
              return (
                <>
                  <Card.Header
                    className="fw-bold"
                    key={id}
                    onClick={() => {
                      move({ product });
                    }}
                  >
                    {index + 1}. {product.name} : {category.name}
                  </Card.Header>

                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold"></div>
                      <UpdateSale salesQuantity={salesCount} salesId={id} />
                    </div>
                  </ListGroup.Item>
                </>
              );
            })}
        </ListGroup>
      </Card>
    </>
  );
}
