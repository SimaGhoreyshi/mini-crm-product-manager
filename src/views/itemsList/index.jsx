import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Card, Span, Spinner } from "../../components";
import { fetchProductsList } from "../../store";

const Container = styled.main`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, minmax(30%, 35rem));
  grid-template-rows: repeat(auto);
  grid-gap: 2rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(10rem, 35rem));
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(10rem, 35rem));
  }
`;

export const ItemsList = () => {
  const dispatch = useDispatch();
  const onFetchProductsList = useCallback(() => {
    return dispatch(fetchProductsList());
  }, [dispatch]);

  const { error, loading, products } = useSelector(
    (state) => state?.productsList
  );

  useEffect(() => {
    if (!products || !products?.length) onFetchProductsList();
  }, [onFetchProductsList, products]);

  if (error) return <Span center>خطایی رخ داد</Span>;

  //if no error
  if (loading) {
    return <Spinner />;
  }

  //if no error and loading completed
  return (
    <Container>
      {products?.map((product) => (
        <Card
          key={product?.id}
          image={product?.image}
          title={product?.title}
          id={product?.id}
        />
      ))}
    </Container>
  );
};
