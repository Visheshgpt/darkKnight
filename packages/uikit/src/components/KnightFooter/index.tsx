import Image from "next/image";
import styled from "styled-components";
import telegram from "../../../../../public/images/home/footer/Telegram.svg";
import discord from "../../../../../public/images/home/footer/discord.svg";
import twitter from "../../../../../public/images/home/footer/twitter.svg";

const StyledWrapper = styled.div`
  height: 56px;
  background: #1e2b45;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledContainer = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`;
const Knightfooter = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <a href="/#" target="_blank">
          <Image src={telegram} alt="telegram icon" width="27px" height="27px" />
        </a>
        <a href="/#" target="_blank">
          <Image src={discord} alt="telegram icon" width="27px" height="27px" />
        </a>
        <a href="/#" target="_blank">
          <Image src={twitter} alt="telegram icon" width="27px" height="27px" />
        </a>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Knightfooter;
