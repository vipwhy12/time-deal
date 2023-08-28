import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

export default function UserList() {
  const [users, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserList = async () => {
      try {
        const responseUser = await axios.get(`http://localhost:8080/auth`);
        setUser(responseUser.data);
        setLoading(false);
        console.log(responseUser.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadUserList();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>회원리스트!</h1>
      {users.map(({ createdAt, email }, index) => (
        <>
          <div>{index + 1}</div>
          <div>{createdAt}</div>
          <div>{email}</div>
        </>
      ))}
    </>
  );
}
