import styled from "styled-components";

interface ILinkButton {
  fillColor?: string;
}

const LinkButton = styled.a<ILinkButton>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px 54px 16px 48px;
  border-radius: 14px;
  border-width: 0;
  border-style: none;
  border-color: ${(props) => props.fillColor || props.theme.colors.accent};
  background-color: ${(props) => props.theme.colors.surface};
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.card.border};
  color: ${(props) => props.theme.colors.text.primary} !important;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.005em;
  transition: transform 0.22s ease, background-color 0.22s ease,
    box-shadow 0.22s ease;

  &::before {
    content: "";
    position: absolute;
    left: 20px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => props.fillColor || props.theme.colors.accent};
    box-shadow: 0 0 14px -1px
      ${(props) => props.fillColor || props.theme.colors.accent};
  }

  &::after {
    content: "↗";
    position: absolute;
    right: 20px;
    font-size: 15px;
    color: ${(props) => props.theme.colors.text.muted};
    transition: transform 0.22s ease, color 0.22s ease;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.surfaceHover};
    transform: translateY(-2px);
    box-shadow: inset 0 0 0 1px
        ${(props) => props.fillColor || props.theme.colors.accent}80,
      0 16px 36px -24px ${(props) => props.fillColor || props.theme.colors.accent};
  }

  &:hover::after {
    color: ${(props) => props.fillColor || props.theme.colors.accent};
    transform: translate(2px, -2px);
  }
`;

const Link: React.FC<ILinkItem> = ({ title, color, url }) => {
  return (
    <LinkButton
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      fillColor={color}
    >
      {title}
    </LinkButton>
  );
};

export default Link;
