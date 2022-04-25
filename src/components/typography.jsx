import styled, { css } from "styled-components";
import { colors } from "../assets";
import { fontFaces } from "../assets/fonts";

const primary = colors.primary;

export const Text = css`
  ${fontFaces}
  font-family: IRANSans;
  letter-spacing: normal;
  font-stretch: normal;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `};
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
  ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${maxHeight};
    `};
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};
  ${({ size }) =>
    size &&
    css`
      font-size: ${size}rem;
    `};
  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `};
  ${({ color = primary }) =>
    color &&
    css`
      color: ${color};
    `};
  ${({ textAlign = "right" }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};
  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `};
  ${({ overflow }) =>
    overflow &&
    css`
      overflow: ${overflow};
    `};
  ${({ border }) =>
    border &&
    css`
      border: ${border};
    `};
  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius}rem;
    `};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      font-family: IRANSansBold;
    `};
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `};
  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `};
  ${({ direction }) =>
    direction &&
    css`
      direction: ${direction};
    `};
  ${({ justifySelf }) =>
    justifySelf &&
    css`
      justify-self: ${justifySelf};
    `};
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};

  ${({ ellipses }) =>
    ellipses &&
    css`
      max-width: 90%;
      overflow: hidden !important;
      text-overflow: ellipsis;
      white-space: nowrap;
      /* 
      &:hover {
        overflow: unset !important;
        white-space: unset !important;
        word-wrap: break-word;
      } */
    `};

  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
    `};

  ${({ shadow }) =>
    shadow &&
    css`
      text-shadow: ${shadow};
    `};
`;

export const Span = styled.span`
  ${Text}
`;

export const Paragraph = styled.p`
  ${Text}
`;

export const Ul = styled.ul`
  ${Text}
`;

export const Li = styled.li`
  ${Text}
`;
