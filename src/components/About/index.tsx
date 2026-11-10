import styled, { keyframes } from "styled-components";
import Avatar from "./Avatar";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.45); }
  70% { box-shadow: 0 0 0 7px rgba(100, 255, 218, 0); }
  100% { box-shadow: 0 0 0 0 rgba(100, 255, 218, 0); }
`;

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 52px 36px 40px;
  border-radius: 28px;
  border: 1px solid ${(props) => props.theme.colors.card.border};
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.07) 0%,
    rgba(255, 255, 255, 0.025) 45%,
    rgba(255, 255, 255, 0.015) 100%
  );
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 40px 100px -60px rgba(0, 0, 0, 0.9),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  @media (max-width: 640px) {
    padding: 38px 20px 30px;
    border-radius: 22px;
  }
`;

const HeroGlow = styled.div`
  position: absolute;
  top: -190px;
  left: 50%;
  transform: translateX(-50%);
  width: 560px;
  height: 380px;
  pointer-events: none;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(100, 255, 218, 0.18),
    rgba(139, 124, 255, 0.12) 45%,
    transparent 70%
  );
  filter: blur(24px);
`;

const AvatarRing = styled.div`
  position: relative;
  width: 132px;
  height: 132px;
  padding: 3px;
  border-radius: 50%;
  background: conic-gradient(
    from 210deg,
    ${(props) => props.theme.colors.accent},
    ${(props) => props.theme.colors.accentSecondary},
    ${(props) => props.theme.colors.accent}
  );
  box-shadow: 0 0 45px -10px rgba(100, 255, 218, 0.55);
  z-index: 1;

  @media (max-width: 640px) {
    width: 112px;
    height: 112px;
  }
`;

const AvatarFrame = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #0b1120;
`;

const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.card.border};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text.secondary};
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  z-index: 1;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.accent};
  animation: ${pulse} 2.4s ease-out infinite;
`;

const Name = styled.h1`
  margin: 22px 0 0;
  font-size: clamp(30px, 6vw, 44px);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.05;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.text.primary} 30%,
    #93a6c4 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  z-index: 1;
`;

const Role = styled.p`
  margin: 12px 0 0;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.colors.text.accent};
  z-index: 1;
`;

const AboutText = styled.p`
  margin: 18px 0 0;
  max-width: 58ch;
  font-size: 15px;
  line-height: 1.75;
  color: ${(props) => props.theme.colors.text.secondary};
  z-index: 1;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 26px;
  z-index: 1;
`;

const Cta = styled.a<{ variant?: "primary" | "ghost" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background-color 0.2s ease, border-color 0.2s ease;

  ${(props) =>
    props.variant === "primary"
      ? `
        background: linear-gradient(135deg, #64FFDA 0%, #7CF0E4 55%, #8B7CFF 160%);
        color: #04120F;
        border: 1px solid transparent;
        box-shadow: 0 14px 34px -16px rgba(100, 255, 218, 0.65);
      `
      : `
        background: rgba(255, 255, 255, 0.04);
        color: ${props.theme.colors.text.primary};
        border: 1px solid ${props.theme.colors.card.border};
      `}

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(100, 255, 218, 0.45);
    box-shadow: 0 18px 40px -18px rgba(100, 255, 218, 0.55);
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  margin-top: 34px;
  padding-top: 26px;
  border-top: 1px solid ${(props) => props.theme.colors.card.border};
  width: 100%;
  z-index: 1;
`;

const Stat = styled.div`
  padding: 0 12px;
  text-align: center;

  & + & {
    border-left: 1px solid ${(props) => props.theme.colors.card.border};
  }
`;

const StatValue = styled.div`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.text.primary};
`;

const StatLabel = styled.div`
  margin-top: 4px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text.muted};
`;

const About: React.FC<IAbout> = ({
  name,
  occupancy,
  about,
  avatar,
  location,
  ctas,
  stats,
}) => {
  return (
    <Hero>
      <HeroGlow aria-hidden="true" />
      <AvatarRing>
        <AvatarFrame>
          <Avatar
            objectFit="cover"
            src={avatar}
            width={132}
            height={132}
            alt="avatar"
            priority
          />
        </AvatarFrame>
      </AvatarRing>

      {!!location && (
        <StatusPill>
          <Dot aria-hidden="true" />
          {location}
        </StatusPill>
      )}

      <Name>{name}</Name>
      <Role>{occupancy}</Role>
      <AboutText>{about}</AboutText>

      {!!ctas?.length && (
        <CtaRow>
          {ctas.map((cta) => {
            const isExternal = /^https?:\/\//.test(cta.url);

            return (
              <Cta
                key={cta.id}
                href={cta.url}
                variant={cta.variant || "ghost"}
                download={cta.download || undefined}
                target={isExternal ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {cta.title}
              </Cta>
            );
          })}
        </CtaRow>
      )}

      {!!stats?.length && (
        <StatsRow>
          {stats.map((stat) => (
            <Stat key={stat.id}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </Stat>
          ))}
        </StatsRow>
      )}
    </Hero>
  );
};

export default About;
