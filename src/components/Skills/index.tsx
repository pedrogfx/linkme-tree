import styled from "styled-components";
import SectionHeading from "../Common/SectionHeading";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 10px;
`;

const Group = styled.div`
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.card.border};
  background: ${(props) => props.theme.colors.surface};
  transition: border-color 0.22s ease, background-color 0.22s ease;

  &:hover {
    border-color: rgba(139, 124, 255, 0.3);
    background: ${(props) => props.theme.colors.surfaceHover};
  }
`;

const GroupTitle = styled.h3`
  margin: 0 0 12px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text.muted};
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled.span`
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid rgba(100, 255, 218, 0.14);
  background: rgba(100, 255, 218, 0.05);
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.primary};
`;

const Skills: React.FC<{ skills: ISkillGroup[] }> = ({ skills }) => {
  if (!skills.length) return null;

  return (
    <Section>
      <SectionHeading>Toolbox</SectionHeading>
      <Grid>
        {skills.map((group) => (
          <Group key={group.id}>
            <GroupTitle>{group.title}</GroupTitle>
            <Chips>
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </Chips>
          </Group>
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;
