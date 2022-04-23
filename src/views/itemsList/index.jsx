import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Card, Span } from "../../components";
import { fetchProductsList } from "../../store";

const Container = styled.main`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, minmax(30%, 35rem));
  grid-template-rows: repeat(auto);
  grid-gap: 1rem;
  width: 100%;
`;

export const ItemsList = () => {
  const dispatch = useDispatch();
  const onFetchProductsList = () => {
    return dispatch(fetchProductsList());
  };

  useEffect(() => {
    onFetchProductsList();
  }, []);

  const { error, loading, products } = useSelector(
    (state) => state?.productsList
  );

  if (error) {
    return <Span textAlign="center">خطایی رخ داد</Span>;
  }
  //if no error
  if (loading) {
    return <Span>loading</Span>;
  }
  //if no error and loading completed
  return (
    <Container>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Container>
  );
};
