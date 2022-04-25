import styled, { css } from "styled-components";
import { colors } from "../../assets";

const starColor = colors.star;

const Stars = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  line-height: 1;

  &::before {
    content: "★★★★★";
    letter-spacing: 3px;

    ${({ percent }) =>
      percent &&
      css`
        background: linear-gradient(
          90deg,
          ${starColor} ${percent}%,
          lightgrey ${percent}%
        );
      `};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const StarRating = ({ rate }) => {
  const percent = (rate / 5) * 100;
  return <Stars percent={percent} />;
};
