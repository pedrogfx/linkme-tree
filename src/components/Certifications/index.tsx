import styled from "styled-components";
import SectionHeading from "../Common/SectionHeading";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid ${(props) => props.theme.colors.card.border};
  background: ${(props) => props.theme.colors.surface};
  transition: transform 0.22s ease, border-color 0.22s ease,
    background-color 0.22s ease;

  &:hover {
    border-color: rgba(100, 255, 218, 0.28);
    background: ${(props) => props.theme.colors.surfaceHover};
    transform: translateY(-2px);
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`;

const Title = styled.span`
  font-size: 13.5px;
  font-weight: 600;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.colors.text.primary};
`;

const Issuer = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

const Date = styled.span`
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.colors.text.muted};
  white-space: nowrap;
`;

const Arrow = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.text.muted};
`;

const Certifications: React.FC<{ certifications: ICertification[] }> = ({
  certifications,
}) => {
  if (!certifications.length) return null;

  return (
    <Section>
      <SectionHeading>Certifications</SectionHeading>
      <List>
        {certifications.map((certification) => (
          <Row
            key={certification.id}
            href={certification.url || undefined}
            target={certification.url ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <Main>
              <Title>{certification.title}</Title>
              <Issuer>{certification.issuer}</Issuer>
            </Main>
            <Meta>
              <Date>{certification.date}</Date>
              {!!certification.url && <Arrow aria-hidden="true">↗</Arrow>}
            </Meta>
          </Row>
        ))}
      </List>
    </Section>
  );
};

export default Certifications;
