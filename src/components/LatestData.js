import { useNavigate } from "react-router-dom";

export default function LatestData({ data, title, url }) {
  const navigate = useNavigate();

  return (
    <article>
      <h3>{title}</h3>
      <div>
        {data.map(({ id, name }, index) => (
          <div
            key={id}
            onClick={() => {
              navigate(url + id);
            }}
          >
            <h5>
              {index + 1}. {name}
            </h5>
          </div>
        ))}
      </div>
    </article>
  );
}
