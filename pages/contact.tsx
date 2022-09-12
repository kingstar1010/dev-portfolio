import type { NextPage } from 'next';
import styled from 'styled-components';
import Typography from '@components/Typography';
import ContactMe from '@components/Forms/ContactMe';
import theme from '@theme/theme';
import SocialMediaLinks from '@components/SocialMediaLinks';
import Icon from '@components/Icon';
import Link from 'next/link';
import ContactsData from '@data/ContactsData';
import { useDarkMode } from '@lib/dark-mode';

interface ContactsProps {}

const Contact: NextPage<ContactsProps> = () => {
  const { darkMode } = useDarkMode();

  return (
    <Main>
      <ContactInformation>
        <ContactsWrapper>
          <TitleContainer>
            <VerticalSeparator />
            <Typography font="bold" size={theme.fontSizes.subHeader}>
              Contact info:
            </Typography>
          </TitleContainer>

          {ContactsData.map((contact) =>
            contact.icon === 'phone' ? (
              <ContactItem key={contact.title}>
                <IconContainer>
                  <Icon
                    id={contact.icon}
                    color={darkMode ? theme.colors.white : theme.colors.black}
                    width={16}
                    height={16}
                  />
                </IconContainer>

                <Typography align="left">{contact.label}</Typography>
              </ContactItem>
            ) : (
              <Link
                key={contact.title}
                href={contact.path}
                as={contact.path}
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  <ContactItem>
                    <IconContainer>
                      <Icon
                        id={contact.icon}
                        color={
                          darkMode ? theme.colors.white : theme.colors.black
                        }
                        width={contact.icon === 'email' ? 12 : 18}
                        height={contact.icon === 'email' ? 16 : 17}
                      />
                    </IconContainer>

                    <Typography align="left">{contact.label}</Typography>
                  </ContactItem>
                </a>
              </Link>
            ),
          )}
        </ContactsWrapper>

        <SocialMediaLinks />
      </ContactInformation>

      <ContactMe />
    </Main>
  );
};

export default Contact;

const Main = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.default.background};
  color: ${({ theme }) => theme.default.fontColor};
  padding: 0 100px;

  ${({ theme }) => theme.breakpoints.minMd} {
    height: 100vh;
  }

  ${({ theme }) => theme.breakpoints.maxMd} {
    flex-direction: column-reverse;
    width: 100%;
    padding: 0 50px;
    padding-top: 100px;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    padding: 0 20px;
    padding-top: 100px;
  }
`;

const ContactInformation = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacings.xxlarge}px;

  ${({ theme }) => theme.breakpoints.minMd} {
    height: 65vh;
  }
`;

const ContactsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.maxMd} {
    display: none;
  }
`;

const VerticalSeparator = styled.div`
  height: 100%;
  width: 3px;
  background-color: ${({ theme }) => theme.colors.blue};
  margin-right: ${({ theme }) => theme.spacings.small}px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacings.xlarge}px;
`;

const ContactItem = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacings.small}px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

const IconContainer = styled.div`
  width: 20px;
  margin-right: ${({ theme }) => theme.spacings.small / 2}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
