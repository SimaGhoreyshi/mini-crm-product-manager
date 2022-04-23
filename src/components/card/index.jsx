import styled from "styled-components";
import { Span } from "../typography";

const CardContainer = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  background-color: white;
`;

export const Card = () => {
  return (
    <CardContainer>
      <Span>fed</Span>
    </CardContainer>
  );
};
