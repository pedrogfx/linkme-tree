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

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid ${(props) => props.theme.colors.card.border};
  background: ${(props) => props.theme.colors.surface};
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`;

const Degree = styled.span`
  font-size: 13.5px;
  font-weight: 600;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.colors.text.primary};
`;

const School = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const Period = styled.span`
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.colors.text.muted};
  white-space: nowrap;
`;

const Languages = styled.p`
  margin: 4px 2px 0;
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.06em;
  color: ${(props) => props.theme.colors.text.muted};

  span {
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;

const Education: React.FC<{
  education: IEducation[];
  languages?: string;
}> = ({ education, languages }) => {
  if (!education.length) return null;

  return (
    <Section>
      <SectionHeading>Education</SectionHeading>
      <List>
        {education.map((item) => (
          <Row key={item.id}>
            <Main>
              <Degree>{item.degree}</Degree>
              <School>{item.school}</School>
            </Main>
            <Period>{item.period}</Period>
          </Row>
        ))}
      </List>
      {!!languages && (
        <Languages>
          Languages · <span>{languages}</span>
        </Languages>
      )}
    </Section>
  );
};

export default Education;
