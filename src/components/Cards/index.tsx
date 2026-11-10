import { Fragment } from "react";
import styled from "styled-components";
import SectionTitle from "../Common/SectionTitle";
import CardItem from "./CardItem";

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Cards: React.FC<{ cards: ICard[] }> = ({ cards }) => {
  return (
    <>
      {cards.map((card) => {
        if (!card.items.length) return <Fragment key={card.id} />;
        return (
          <Fragment key={card.id}>
            <SectionTitle>{card.title}</SectionTitle>
            <CardsGrid>
              {card.items.map((cardItem) => (
                <CardItem key={cardItem.id} {...cardItem} />
              ))}
            </CardsGrid>
          </Fragment>
        );
      })}
    </>
  );
};

export default Cards;
