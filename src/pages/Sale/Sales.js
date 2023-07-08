import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";

export default function Sales() {
  const [loading, setLoading] = useState(true);
  const [sales, setSales] = useState(null);
  const URL = "http://localhost:8080/";
  const navigate = useNavigate();

  useEffect(() => {
    const loadSales = async () => {
      try {
        const brandResponse = await axios.get(URL + "sales/brands");
        setSales(brandResponse.data);
        setLoading(false);
      } catch (error) {
        console.log("🥲데이터를 불러오는 데 실패했습니다.");
        console.error("err: ", error.message);
      }
    };
    loadSales();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const move = (id, name, total) => {
    navigate("" + id.brandId, {
      state: {
        brandId: id.brandId,
        brandName: name.brandName,
        total: total.total,
      },
    });
  };

  return (
    <>
      <header>
        <h2>📍Sales List</h2>
      </header>
      <main>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th></th>
              <th>상품명</th>
              <th>판매수량</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(({ brandId, brandName, total }, index) => {
              return (
                <tr
                  key={brandId}
                  onClick={() => {
                    move({ brandId }, { brandName }, { total });
                  }}
                >
                  <td>{index + 1}</td>
                  <td>{brandName}</td>
                  <td>{total}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </main>
    </>
  );
}
