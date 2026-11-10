import styled, { keyframes } from "styled-components";

const drift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(0, -4%, 0) scale(1.08);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background: ${(props) =>
    `radial-gradient(900px 600px at 12% -12%, rgba(100, 255, 218, 0.10), transparent 62%),
     radial-gradient(820px 620px at 92% 4%, rgba(139, 124, 255, 0.16), transparent 60%),
     linear-gradient(180deg, ${props.theme.colors.primary} 0%, #060a14 55%, ${props.theme.colors.primary} 100%)`};
`;

const Glow = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.35;
  animation: ${drift} 18s ease-in-out infinite;

  @media (max-width: 640px) {
    opacity: 0.2;
    filter: blur(80px);
  }
`;

const Grid = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.045) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.045) 1px,
      transparent 1px
    );
  background-size: 64px 64px;
  mask-image: radial-gradient(
    ellipse 70% 55% at 50% 0%,
    #000 20%,
    transparent 85%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 70% 55% at 50% 0%,
    #000 20%,
    transparent 85%
  );
`;

const Background = () => (
  <Wrapper aria-hidden="true">
    <Glow
      style={{
        width: 420,
        height: 420,
        top: -120,
        left: -80,
        background: "#64FFDA",
      }}
    />
    <Glow
      style={{
        width: 480,
        height: 480,
        top: -160,
        right: -140,
        background: "#8B7CFF",
        animationDelay: "-6s",
      }}
    />
    <Glow
      style={{
        width: 380,
        height: 380,
        bottom: -200,
        left: "35%",
        background: "#3B82F6",
        opacity: 0.18,
        animationDelay: "-11s",
      }}
    />
    <Grid />
  </Wrapper>
);

export default Background;
