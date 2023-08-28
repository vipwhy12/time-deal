import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const secretKey = process.env.REACT_APP_CRYPTOJS_KEY;

  const handleSigninSubmit = () => {
    axios
      .post('http://localhost:8080/auth/signIn', {
        email: email,
        password: CryptoJS.AES.encrypt(password, secretKey).toString(),
      })
      .then((response) => {
        setEmail('');
        setPassword('');
        alert('👀로그인이 완료되었습니다!');
        console.log(response.status);
      })
      .catch((error) => {
        alert('로그인에 실패하였습니다!' + error.response.data.message);
        console.log(error);
      });
  };

  const handelEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <header>
        회원이 아니신가요?
        <Link to="/signup">회원가입 하기</Link>
      </header>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="string"
            placeholder="✉️ 이메일"
            value={email}
            onChange={handelEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="password"
            placeholder="🔒 비밀번호"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>
        <Button
          variant="secondary"
          onClick={() => {
            handleSigninSubmit();
          }}
        >
          로그인하기
        </Button>
      </Form>
    </>
  );
}
