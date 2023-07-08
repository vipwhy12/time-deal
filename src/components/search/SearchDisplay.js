import { useNavigate } from "react-router-dom";

export default function SearchDisplay({ brands, userInput }) {
  const navigate = useNavigate();
  const searched = brands.filter(({ id, name }) => {
    return name.toLowerCase().includes(userInput);
  });

  const move = (id) => {
    navigate("brands/" + id);
  };

  return (
    <>
      {searched.slice(0, 5).map(({ id, name }) => {
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
    </>
  );
}
