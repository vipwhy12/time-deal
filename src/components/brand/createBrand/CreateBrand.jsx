import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function CreateBrand({ onClose, setBrands }) {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);

  const getName = (event) => {
    setName(event.target.value);
  };

  const getDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!name || !description) {
      alert("🚨브랜드 이름과 설명을 모두 입력해주세요.🚨");
      return;
    }

    if (description.length < 5) {
      alert("🚨브랜드 설명은 최소 5글자 이상이어야 합니다.🚨");
      return;
    }

    axios
      .post("http://localhost:8080/brands", {
        name: name,
        description: description,
      })
      .then((response) => {
        setName("");
        setDescription("");
        onClose();

        alert("🎉브랜드 생성이 완료되었습니다!🎉");
        console.log(response.status);
        setBrands(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("🥲브랜드 생성이 실패하였습니다.🥲" + error);
      });
  };

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>✨브랜드 생성✨</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <section>
              <h5>브랜드 이름</h5>
              <input type="text" value={name} onChange={getName} />
            </section>

            <section>
              <h5>브랜드 설명</h5>
              <input
                type="text"
                value={description}
                onChange={getDescription}
              />
            </section>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button
              variant="primary"
              className="modal show"
              style={{ display: "block", position: "initial" }}
              onClick={() => {
                handleSubmit();
              }}
            >
              브랜드 생성
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}
