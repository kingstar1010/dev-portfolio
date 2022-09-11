import Typography from '@components/Typography';
import { TextField } from '@mui/material';
import { inputLabelClasses } from '@mui/material/InputLabel';
import * as Styles from './ContactMe.styles';
import { useDarkMode } from '@lib/dark-mode';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Icon from '@components/Icon';
import { DefaultTheme, withTheme } from 'styled-components';
import Lottie from '@components/Lottie';

export interface ContactMeProps {
  theme: DefaultTheme;
}

const ContactMe = withTheme((({ theme }) => {
  // Hooks
  const { darkMode } = useDarkMode();

  //   States
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [validation, setValidation] = useState(false);
  const [loading, setLoading] = useState(false);

  //   Refs
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    setLoading(true);
    e.preventDefault();

    if (form.current) {
      // if all fields are filled out send email else show error
      if (name && mail && subject && message) {
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_MY_TEMPLATE_ID!,
            form.current,
            process.env.NEXT_PUBLIC_MY_PUBLIC_KEY!,
          )
          .then(
            (result) => {
              setLoading(false);
              setValidation(true);
            },
            (error) => {
              setValidation(true);
              setError(error.text);
            },
          );

        setTimeout(() => {
          setLoading(false);
          setValidation(true);
        }, 2000);
      } else {
        setLoading(false);
        setError('Error: All fields are required');
      }
    } else {
      setLoading(false);
      setError('Sorry, something went wrong');
    }
  };

  const buttons = [
    { color: '#FF5454', icon: 'cross' },
    { color: '#ffbd44', icon: 'line' },
    { color: '#00ca4e', icon: 'sideArrows' },
  ];

  return (
    <Styles.Form darkMode={darkMode} ref={form} onSubmit={sendEmail}>
      {loading ? (
        <Styles.GratingTextContainer>
          <Lottie id={darkMode ? 'loadingLight' : 'loadingDark'} />
        </Styles.GratingTextContainer>
      ) : (
        <>
          {validation ? (
            <Styles.GratingTextContainer>
              <Lottie id={'plane'} />

              <Typography font="bold" size={theme.fontSizes.subHeader}>
                {
                  'Thank you for contacting me! \nI will contact you as soon as possible.'
                }
              </Typography>
              <Styles.GoHomeLink href="/">
                <Typography color={theme.colors.blue}>
                  Return to home page
                </Typography>
              </Styles.GoHomeLink>
            </Styles.GratingTextContainer>
          ) : (
            <>
              <Styles.ButtonsContainer>
                {buttons.map((item, index) => (
                  <Styles.WindowButton
                    key={index}
                    background={item.color}
                    onClick={() => {
                      form?.current?.reset();
                    }}
                  >
                    <Icon id={item.icon} />
                  </Styles.WindowButton>
                ))}
              </Styles.ButtonsContainer>
              <Styles.ContentContainer>
                <Styles.TopFields>
                  <TextField
                    id="name"
                    type="name"
                    name="name"
                    label="Name:"
                    variant="outlined"
                    placeholder="Albert Einstein"
                    error={error !== '' && name === ''}
                    size="small"
                    sx={{
                      input: {
                        color: darkMode
                          ? theme.colors.white
                          : theme.colors.black,
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: darkMode
                          ? theme.colors.white
                          : theme.colors.black,
                        [`&.${inputLabelClasses.shrink}`]: {
                          color: darkMode
                            ? theme.colors.white
                            : theme.colors.black,
                        },
                        borderColor: darkMode
                          ? theme.colors.white
                          : theme.colors.black,
                      },
                    }}
                    style={{
                      width: '100%',
                      background: darkMode ? '#4D4D4D' : theme.colors.white,
                      borderRadius: theme.spacings.small,
                    }}
                    onChange={(e) => {
                      setError('');
                      setName(e.target.value);
                    }}
                  />
                  <TextField
                    id="email"
                    name="email"
                    label="Email:"
                    type="email"
                    placeholder="something@gmail.com"
                    variant="outlined"
                    error={error !== '' && mail === ''}
                    size="small"
                    sx={{
                      input: {
                        color: darkMode
                          ? theme.colors.white
                          : theme.colors.black,
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: darkMode
                          ? theme.colors.white
                          : theme.colors.black,
                        [`&.${inputLabelClasses.shrink}`]: {
                          color: darkMode
                            ? theme.colors.white
                            : theme.colors.black,
                        },
                        borderColor: darkMode
                          ? theme.colors.white
                          : theme.colors.black,
                      },
                    }}
                    style={{
                      width: '100%',
                      background: darkMode ? '#4D4D4D' : theme.colors.white,
                      borderRadius: theme.spacings.small,
                    }}
                    onChange={(e) => {
                      setError('');
                      setMail(e.target.value);
                    }}
                  />
                </Styles.TopFields>

                <TextField
                  id="subject"
                  type="text"
                  name="subject"
                  label="Subject:"
                  variant="outlined"
                  error={error !== '' && subject === ''}
                  size="small"
                  placeholder="Give to your email an subject"
                  sx={{
                    input: {
                      color: darkMode ? theme.colors.white : theme.colors.black,
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: darkMode ? theme.colors.white : theme.colors.black,
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: darkMode
                          ? theme.colors.white
                          : theme.colors.black,
                      },
                      borderColor: darkMode
                        ? theme.colors.white
                        : theme.colors.black,
                    },
                  }}
                  style={{
                    width: '100%',
                    background: darkMode ? '#4D4D4D' : theme.colors.white,
                    marginTop: theme.spacings.xlarge,
                    borderRadius: theme.spacings.small,
                  }}
                  onChange={(e) => {
                    setError('');
                    setSubject(e.target.value);
                  }}
                />

                <Styles.TextArea
                  name="message"
                  placeholder="Write your message here"
                  error={error !== '' && message === ''}
                  darkMode={darkMode}
                  style={{
                    background: darkMode ? '#4D4D4D' : theme.colors.white,
                    color: darkMode ? theme.colors.white : theme.colors.black,
                  }}
                  onChange={(e) => {
                    setError('');
                    setMessage(e.target.value);
                  }}
                />
              </Styles.ContentContainer>

              {!validation && (
                <Styles.InputContainer>
                  {error ? (
                    <Typography color="#D32F2F">{error}</Typography>
                  ) : (
                    <Styles.InputButton type="submit" value="Send" />
                  )}
                </Styles.InputContainer>
              )}
            </>
          )}
        </>
      )}
    </Styles.Form>
  );
}) as React.FC<ContactMeProps>);

export default ContactMe;
