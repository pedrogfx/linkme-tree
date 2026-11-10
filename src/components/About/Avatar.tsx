import Image from "next/image";
import styled from "styled-components";

const Avatar = styled(Image)`
  width: 100% !important;
  height: 100% !important;
  border-radius: 100%;
  object-fit: cover;
  display: block;
`;

export default Avatar;
