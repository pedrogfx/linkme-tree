import styled from "styled-components";

const Content = styled.main`
  position: relative;
  z-index: 1;
  max-width: ${(props) => props.theme.common.width};
  width: calc(100% - ${(props) => props.theme.common.gap});
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: calc(56px + var(--safe-top)) 0 28px;
  gap: 30px;
  text-align: left;

  @media (max-width: 640px) {
    padding-top: calc(20px + var(--safe-top));
    gap: 24px;
  }
`;

export default Content;
