import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SearchDisplay({ brands, userInput, setUserInput }) {
  const navigate = useNavigate();
  const GET_SEARCHED_MIN = 0;
  const GET_SEARCHED_MAX = 3;
  const searched = brands.filter(({ id, name }) => {
    return name.toLowerCase().includes(userInput);
  });

  const move = (brand) => {
    navigate("brands/" + brand.id);
    setUserInput(null);
  };

  return (
    <Searched>
      {searched
        .slice(GET_SEARCHED_MIN, GET_SEARCHED_MAX)
        .map(({ id, name }) => {
          return (
            <div
              key={id}
              onClick={() => {
                move({ id });
              }}
            >
              {name}
            </div>
          );
        })}
    </Searched>
  );
}
const Searched = styled.div`
  background-color: white;
`;
