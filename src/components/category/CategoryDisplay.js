export default function CategoryDisplay({ selectedCategory, category }) {
  const seleted = category.find(({ id }) => id === selectedCategory);

  if (!seleted) {
    return null;
  }

  return (
    <>
      {seleted.children.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </>
  );
}