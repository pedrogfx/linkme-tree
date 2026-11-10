import styled from "styled-components";
import SectionHeading from "../Common/SectionHeading";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 5px;
  padding-left: 24px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 640px) {
    padding-left: 18px;
    margin-left: 2px;
  }
`;

const Item = styled.article`
  position: relative;
  padding: 18px 20px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.card.border};
  background: ${(props) => props.theme.colors.surface};
  transition: transform 0.22s ease, border-color 0.22s ease,
    background-color 0.22s ease;

  &::before {
    content: "";
    position: absolute;
    top: 24px;
    left: -30px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.accent};
    box-shadow: 0 0 0 4px rgba(100, 255, 218, 0.08);
  }

  &:hover {
    border-color: rgba(100, 255, 218, 0.28);
    background: ${(props) => props.theme.colors.surfaceHover};
    transform: translateX(3px);
  }

  @media (max-width: 640px) {
    padding: 16px;

    &::before {
      left: -24px;
    }
  }
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 6px 12px;
`;

const Role = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 650;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.text.primary};
`;

const Period = styled.span`
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.colors.text.muted};
  white-space: nowrap;
`;

const Company = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12.5px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.accent};
`;

const Description = styled.p`
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.65;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
`;

const Tag = styled.span`
  padding: 4px 9px;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.card.border};
  background: rgba(255, 255, 255, 0.03);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const Experience: React.FC<{ experience: IExperience[] }> = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section>
      <SectionHeading>Experience</SectionHeading>
      <Timeline>
        {experience.map((item) => (
          <Item key={item.id}>
            <Header>
              <Role>{item.role}</Role>
              <Period>{item.period}</Period>
            </Header>
            <Company>{item.company}</Company>
            <Description>{item.description}</Description>
            {!!item.tags?.length && (
              <Tags>
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            )}
          </Item>
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience;
