import CategoryTest from "../../components/category/CategoryTest";

import styled from "styled-components";

export default function Categories({ rootCategory }) {
  return (
    <section>
      <Title>Category</Title>
      <CategoryContainer>
        <CategoryTest rootCategory={rootCategory} />
      </CategoryContainer>
    </section>
  );
}

const Title = styled.h3`
  padding: 30px 0 0;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
