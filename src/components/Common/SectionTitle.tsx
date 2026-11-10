import styled from "styled-components";

const SectionTitle = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  color: ${(props) => props.theme.colors.text.muted};
  font-family: var(--font-mono);
  font-size: ${(props) => props.theme.typography.sectionTitleFontSize};
  line-height: ${(props) => props.theme.typography.sectionTitleLineHeight};
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  white-space: nowrap;

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.14),
      rgba(255, 255, 255, 0)
    );
  }
`;

export default SectionTitle;
