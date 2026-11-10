import styled from "styled-components";

const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  border-top: 1px solid ${(props) => props.theme.colors.card.border};
  background: rgba(5, 7, 13, 0.5);
  color: ${(props) => props.theme.colors.text.muted};
  padding: 22px 0 calc(22px + var(--safe-bottom));
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-align: center;

  a {
    color: ${(props) => props.theme.colors.text.secondary};
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.common.width};
  width: calc(100% - ${(props) => props.theme.common.gap});
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Inner>
        <span>© {new Date().getFullYear()} Pedro Goulart Rodrigues</span>
        <a
          href="https://github.com/willianrod/linkme-tree"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by LinkMeTree
        </a>
      </Inner>
    </FooterContainer>
  );
};

export default Footer;
