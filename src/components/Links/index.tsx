import SectionTitle from "../Common/SectionTitle";
import Link from "./Link";
import LinksHolder from "./LinksHolder";
import { Fragment } from "react";
import styled from "styled-components";

const Group = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Links: React.FC<{ links: ILink[] }> = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <Group key={link.id}>
          {!!link.title && <SectionTitle>{link.title}</SectionTitle>}
          <LinksHolder>
            {link.items.map((linkItem) => (
              <Link key={linkItem.id} {...linkItem} />
            ))}
          </LinksHolder>
        </Group>
      ))}
    </>
  );
};

export default Links;
