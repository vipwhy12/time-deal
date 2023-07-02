import { useState, useEffect } from 'react';
import Filters from './Filters';
import CategoryDispay from './CategoryDisplay';

function CategoryComponent({rootCategory}) {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (rootCategory) {
      setCategory(rootCategory);
    }
  }, [rootCategory]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Filters setSelectedCategory={setSelectedCategory} category={category}/>
      <CategoryDispay selectedCategory={selectedCategory} category={category}/>
    </>
  );
}

export default CategoryComponent;