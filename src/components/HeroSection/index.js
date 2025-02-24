import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
// import HeroImg from '../../images/Profile.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
const SocialMediaIconsi = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIconi = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <SocialMediaIconsi>
          <SocialMediaIconi href={Bio.github} target="display"><GitHubIcon/></SocialMediaIconi>
          <SocialMediaIconi href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIconi>
          <SocialMediaIconi href={Bio.mail} target="display"><MailIcon /></SocialMediaIconi>
        </SocialMediaIconsi>
                        <ResumeButton href="#contact" target='display'>Hire Me</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src="AkhiNam.png" alt="hero-image" />
                        
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection;