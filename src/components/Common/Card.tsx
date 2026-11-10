import styled from "styled-components";

interface ICard {
  noPadding?: boolean;
}

const Card = styled.div<ICard>`
  background-color: ${(props) => props.theme.colors.card.background};
  border-radius: ${(props) => props.theme.common.borderRadius};
  border-width: ${(props) => props.theme.common.borderSize};
  border-style: solid;
  border-color: ${(props) => props.theme.colors.card.border};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => (props.noPadding ? "0" : props.theme.common.gap)};
  overflow: hidden;
`;

export default Card;
