import { styled, css } from "styled-components";

const H1 = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 48px;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 32px;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 28px;
      font-weight: 600;
    `}
`;

export default H1;
