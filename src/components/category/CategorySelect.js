import { useState, useEffect } from "react";
import axios from "axios";

function CategorySelect({ rootCategory }) {
  const [categories, setCategories] = useState(rootCategory); // 선택할수 있는 리스트
  const [categoryList, setCategoryList] = useState([]); // 선택된 리스트 [parentList-self]

  useEffect(() => {
    console.log(categoryList);
  }, [categoryList]);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const getValue = async (e) => {
    for (let i = 0; i < categoryList.length; i++) {
      for (let j = 0; j < categoryList[i][0].length; j++) {
        if (categoryList[i][0][j].id === parseInt(e.target.value)) {
          const index = i + 1;
          setCategoryList(categoryList.slice(0, index));
          const newCategories = await getCategory(parseInt(e.target.value));
          setCategories(newCategories.children);
          return;
        }
      }
    }
    setCategoryList([
      ...categoryList,
      [[...categories], parseInt(e.target.value)],
    ]);
    const newCategories = await getCategory(parseInt(e.target.value));
    setCategories(newCategories.children);
  };

  const getCategory = async (categoryId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/category/${categoryId}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch child categories:", error);
    }
  };

  const repeatCategoryList = (list) => {
    return list.map((item, index) => {
      return renderSelected(item, index);
    });
  };

  const options = (optionList, selectNumber) => {
    return optionList.map(({ id, name }) => {
      return (
        <option key={id} value={id} selected={selectNumber === id}>
          {name}
        </option>
      );
    });
  };

  const renderSelected = (selectOption) => {
    return (
      <select onChange={getValue}>
        {options(selectOption[0], selectOption[1])}
      </select>
    );
  };

  const renderSelect = (optionList) => {
    if (optionList) {
      return (
        <select onChange={getValue}>
          <option>카테고리를 선택하세요!</option>
          {options(optionList, -1)}
        </select>
      );
    }
  };

  const selectList = (one, list) => {
    return (
      <>
        <div>{list.length > 0 ? repeatCategoryList(list) : null}</div>
        <div>{one.length !== 0 ? renderSelect(one) : null}</div>
      </>
    );
  };

  return (
    <>
      <h1>카테고리</h1>
      <div className="d-flex">{selectList(categories, categoryList)}</div>
    </>
  );
}

export default CategorySelect;
