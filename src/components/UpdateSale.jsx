import { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateSale({ salesQuantity, salesId }) {
  const [count, setCount] = useState(salesQuantity);
  const url = "http://localhost:8080/";

  useEffect(() => {
    const updateSalesCount = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/sales/${salesId}`
        );
        setCount(response.data.salesCount);
      } catch (error) {
        console.log("🥲데이터를 불러오는 데 실패했습니다.");
        console.error("err: ", error.message);
      }
    };

    updateSalesCount();
  });

  const handleIncrease = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/sales/${salesId}/salesCount`,
        { salesCount: count + 1 }
      );
      setCount(response.data.salesCount);
    } catch (error) {
      console.log("🥲데이터를 불러오는 데 실패했습니다.");
      console.error("err: ", error.message);
    }
  };

  const handleDecrease = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/sales/${salesId}/salesCount`,
        { salesCount: count - 1 }
      );
      setCount(response.data.salesCount);
    } catch (error) {
      console.error("Error updating sales count:", error);
    }
  };

  return (
    <>
      <button onClick={handleIncrease}> + </button>
      ❗️판매 수량 : {count}❗️
      <button onClick={handleDecrease}> - </button>
    </>
  );
}
