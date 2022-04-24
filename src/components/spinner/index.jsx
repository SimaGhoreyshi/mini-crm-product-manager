import styled from "styled-components";
import { Logo, LogoPersian } from "../../common";

const Container = styled.div`
  width: 5rem;
  position: absolute;
  top: 50%;
  right: 50%;
  opacity: 0.8;

  -webkit-animation: spin 4s ease-in-out infinite;
  -moz-animation: spin 4s ease-in-out infinite;
  -ms-animation: spin 4s ease-in-out infinite;
  -o-animation: spin 4s ease-in-out infinite;
  animation: spin 4s ease-in-out infinite;

  @keyframes spin {
    from {
      -ms-transform: rotateY(0deg);
      -moz-transform: rotateY(0deg);
      -webkit-transform: rotateY(0deg);
      -o-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
    to {
      -ms-transform: rotateY(3turn);
      -moz-transform: rotateY(3turn);
      -webkit-transform: rotateY(3turn);
      -o-transform: rotateY(3turn);
      transform: rotateY(3turn);
    }
  }

  @-webkit-keyframes spin {
    //chrome
    from {
      -webkit-transform: rotateY(0deg);
      -o-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
    to {
      -webkit-transform: rotateY(3turn);
      -o-transform: rotateY(3turn);
      transform: rotateY(3turn);
    }
  }
`;

export const Spinner = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};
