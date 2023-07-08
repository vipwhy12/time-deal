import { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateSale({ salesQuantity, salesId }) {
  const [count, setCount] = useState(salesQuantity);
  const url = "http://localhost:8080/";

  const updateSalesCount = async () => {
    try {
      const response = await axios.get(url + "sales/" + salesId);
      setCount(response.data.salesCount);
    } catch (error) {
      console.error("Error fetching sales count:", error);
    }
  };

  useEffect(() => {
    updateSalesCount();
  });

  const handleIncrease = async () => {
    try {
      const response = await axios.patch(
        url + "sales/" + salesId + "/salesCount",
        { salesCount: count + 1 }
      );
      setCount(response.data.salesCount);
    } catch (error) {
      console.error("Error updating sales count:", error);
    }
  };

  const handleDecrease = async () => {
    try {
      const response = await axios.patch(
        url + "sales/" + salesId + "/salesCount",
        { salesCount: count - 1 }
      ); // API 엔드포인트에 맞게 URL을 변경하세요
      setCount(response.data.salesCount);
    } catch (error) {
      console.error("Error updating sales count:", error);
    }
  };

  return (
    <>
      <button onClick={handleIncrease}> + </button>
      Clicked {count}
      <button onClick={handleDecrease}> - </button>
    </>
  );
}
