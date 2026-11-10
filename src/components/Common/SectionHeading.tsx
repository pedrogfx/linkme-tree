import styled from "styled-components";

const labelStyles = `
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  font-family: var(--font-mono);
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

export const SectionHeading = styled.h2`
  ${labelStyles};
  margin: 0 0 2px;
  font-size: ${(props) => props.theme.typography.sectionTitleFontSize};
  line-height: ${(props) => props.theme.typography.sectionTitleLineHeight};
  color: ${(props) => props.theme.colors.text.muted};
`;

export default SectionHeading;
