import Image from "next/image";
import styled from "styled-components";
import Card from "../Common/Card";

const CardLink = styled.a`
  display: block;
  height: 100%;
  border-radius: ${(props) => props.theme.common.borderRadius};
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-3px);
  }

  &:hover ${Card} {
    border-color: rgba(100, 255, 218, 0.35);
    background-color: ${(props) => props.theme.colors.surfaceHover};
  }

  &:hover .card-banner {
    transform: scale(1.04);
  }
`;

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
`;

const Banner = styled(Image)`
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CardItemContent = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const CardTitle = styled.span`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 16px;
  font-weight: 650;
  letter-spacing: -0.01em;
`;

const Arrow = styled.span`
  color: ${(props) => props.theme.colors.text.muted};
  font-size: 14px;
  transition: color 0.2s ease, transform 0.2s ease;
`;

const Description = styled.span`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 13px;
  line-height: 1.65;
`;

const CardItem: React.FC<ICardItem> = ({ banner, description, title, url }) => {
  return (
    <CardLink href={url} rel="noopener noreferrer" target="_blank">
      <Card noPadding>
        {!!banner && (
          <BannerWrapper>
            <Banner
              className="card-banner"
              layout="fill"
              src={banner}
              alt={title}
              objectFit="cover"
              quality={100}
            />
          </BannerWrapper>
        )}
        <CardItemContent>
          <Header>
            <CardTitle>{title}</CardTitle>
            <Arrow aria-hidden="true">↗</Arrow>
          </Header>
          <Description>{description}</Description>
        </CardItemContent>
      </Card>
    </CardLink>
  );
};

export default CardItem;
