import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CryptoJS from 'crypto-js';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const secretKey = process.env.REACT_APP_CRYPTOJS_KEY;

  const handleSignupSubmit = async () => {
    if (userName.length < 2 || userName.length > 20) {
      alert('😢 유저명은 2자리수 이상 20자리 수 이하여야 합니다.');
      return;
    }

    if (password.length < 4 || password.length > 20) {
      alert('😢 비밀번호는 4자리 이상 20 자리수 이하여야 합니다.');
      return;
    }

    await axios
      .post('http://localhost:8080/auth/signUp', {
        username: userName,
        password: CryptoJS.AES.encrypt(password, secretKey).toString(),
      })
      .then((response) => {
        setUserName('');
        setPassword('');
        alert('👀회원가입이 완료되었습니다!');
        console.log(response.status);
      })
      .catch((error) => {
        alert('회원가입에 실패하였습니다!' + error.response.data.message);
        console.log(error);
      });
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
    // console.log(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <>
      <header>
        <h1>Welcome Time Deal</h1>
        이미 회원이신가요?
        <Link to="/signin"> 로그인하러가기 </Link>
      </header>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="닉네임을 입력해주세요"
            onChange={handleUserName}
            value={userName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={handlePassword}
            value={password}
          />
          <Form.Text id="passwordHelpBlock" muted>
            비밀번호는 4자리 이상 20자리 이하여야합니다.
          </Form.Text>
        </Form.Group>
        <Button variant="secondary" onClick={() => handleSignupSubmit()}>
          가입하기
        </Button>
      </Form>
    </>
  );
}
