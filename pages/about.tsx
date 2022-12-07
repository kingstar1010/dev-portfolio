import type { NextPage } from 'next';
import styled from 'styled-components';
import Image from 'next/image';
import { useDarkMode } from '@lib/dark-mode';
import Typography from '@components/Typography';
import theme from '@theme/theme';
import Link from 'next/link';

const About: NextPage = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  // Images
  const lightHeroImage = require('../public/assets/images/HeroW.png');
  const barkHeroImage = require('../public/assets/images/HeroB.png');
  const myFace = require('../public/assets/images/Me.jpg');

  return (
    <Main>
      <HeroContainer>
        <Image
          priority
          src={darkMode ? lightHeroImage : barkHeroImage}
          alt="hello image"
          layout="intrinsic"
          placeholder="blur"
          objectFit="cover"
          sizes="(min-width: 60em) 24vw,
          (min-width: 28em) 45vw,
          100vw"
        />
      </HeroContainer>

      <ContentContainer>
        <ImageContainer>
          <Image
            src={myFace}
            alt="hello image"
            layout="intrinsic"
            placeholder="blur"
            objectFit="cover"
            sizes="(min-width: 60em) 24vw,
            (min-width: 28em) 45vw,
            100vw"
          />
        </ImageContainer>

        <Content>
          <Typography align="left">
            {`My name is Albert-Andrei Moldovanu, I was born and raised in a small, but very beautiful Eastern European country, Moldova. 
              \nCurrently, I\'m studying Software Engineering at VIA University College in Denmark. For the last few years, code has become my passion. My goal is to learn and try as many technologies as I can and use them to create the future. 
              \nI specialize in both front and back-end development for mobile and web applications. I also have a passion for learning new languages and frameworks.
              \nI see myself as an enthusiastic, hard-working, and creative person. As a fast learner, I am constantly looking for new challenges that push me to be a better version of myself.`}
          </Typography>

          <Link href={'/contact'} as={'/contact'} passHref>
            <a>
              <Typography
                align="left"
                color={theme.colors.blue}
              >{`\nLet\'s make something special together!`}</Typography>
            </a>
          </Link>
        </Content>
      </ContentContainer>
    </Main>
  );
};

export default About;

const Main = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.default.background};
  padding: 0 100px;

  ${({ theme }) => theme.breakpoints.maxMd} {
    padding: 0 50px;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    padding: 0 20px;
  }
`;

const HeroContainer = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.maxMd} {
    width: 80%;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    width: 90%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.minMd} {
    height: 100vh;
  }

  ${({ theme }) => theme.breakpoints.maxMd} {
    margin-bottom: ${({ theme }) => theme.spacings.xxlarge * 3}px;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 30%;

  ${({ theme }) => theme.breakpoints.maxMd} {
    width: 50%;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    width: 100%;
  }
`;

const Content = styled.div`
  margin-left: ${({ theme }) => theme.spacings.xxlarge}px;
  width: 30%;

  ${({ theme }) => theme.breakpoints.maxMd} {
    width: 50%;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    margin-left: 0px;
    margin-top: ${({ theme }) => theme.spacings.xxlarge}px;
    width: 100%;
  }
`;
