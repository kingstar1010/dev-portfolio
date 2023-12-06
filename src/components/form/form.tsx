'use client';
import Header from '@components/header';
import styles from './form.module.css';
import { sendForm } from '@emailjs/browser';
import { SyntheticEvent, useRef, useState } from 'react';
import Spinner from '@components/icons/spinner';

export const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    setIsLoading(true);

    if (form?.current) {
      sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form?.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
        .then(() => {
          setIsSent(true);
          setIsLoading(false);
          form?.current?.reset();
          return;
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
      form?.current?.reset();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header
          title="Contact"
          subtitle="Let&#39;s get your project"
          type="secondary"
        />
      </div>

      <form ref={form} className={styles.form} onSubmit={handleSubmit}>
        <input
          required
          id="name"
          type="name"
          name="name"
          placeholder="Name"
          maxLength={55}
          className={styles.input}
        />

        <input
          required
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          title="exmaple@gmail.com"
          onInvalid={() =>
            'Please match the requested format: exmaple@gmail.com'
          }
          pattern="([A-Za-z0-9][._]?)+[A-Za-z0-9]@[A-Za-z0-9]+(\.?[A-Za-z0-9]){2}\.(com?|net|org)+(\.[A-Za-z0-9]{2,4})?"
          maxLength={55}
          className={styles.input}
        />

        <textarea
          required
          name="message"
          placeholder="Message"
          className={`${styles.input} ${styles.textarea}`}
        />

        {isLoading || isSent ? (
          <div className={styles.submit}>
            {isSent ? <p>Thank you for your message</p> : <Spinner />}
          </div>
        ) : (
          <input
            type="submit"
            value="Send Message"
            className={styles.submit}
            style={{ cursor: 'pointer' }}
          />
        )}
      </form>
    </div>
  );
};
