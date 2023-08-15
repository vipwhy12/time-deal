import { Button } from "react-bootstrap";
import CreateBrand from "../createBrand/CreateBrand";
import { useState } from "react";
import { ItemCountainer, ItemTitle, ItemButton } from "./style";

export default function BrandsHeader({ setBrands }) {
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <header>
      <ItemCountainer>
        <ItemTitle>
          <h2>📍Brand List</h2>
        </ItemTitle>
        <ItemButton>
          <Button variant="outline-dark" onClick={handleModal} size="sm">
            ✨브랜드 생성✨
          </Button>
          <div>
            {" "}
            {modalOn && (
              <CreateBrand onClose={handleModal} setBrands={setBrands} />
            )}{" "}
          </div>
        </ItemButton>
      </ItemCountainer>
    </header>
  );
}
