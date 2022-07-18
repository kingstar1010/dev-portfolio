import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Lottie from '@components/Lottie';

interface ErrorProps {
  statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <ErrorContaier>
      {statusCode === 404 && <Lottie id="notFound" />}
      {statusCode === 500 && <Lottie id="internalError" />}
      <ErrorMessage>
        <h1>{statusCode}</h1>
        <VerticalSeparator />
        {statusCode === 404 ? (
          <h4>This page could not be found</h4>
        ) : statusCode === 500 ? (
          <h4>Internal server error</h4>
        ) : (
          <h4>Oopse, something went wrong...</h4>
        )}
      </ErrorMessage>
    </ErrorContaier>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const currentStatusCode = res?.statusCode || 500;
  const throwedStatusCode = err?.statusCode;

  const statusCode = throwedStatusCode || currentStatusCode;

  if (res) {
    // Here is where the magic happens
    res.statusCode = statusCode;
  }

  return { statusCode };
};

export default Error;

const ErrorContaier = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: white;
  z-index: 1000;
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const VerticalSeparator = styled.div`
  height: 100%;
  width: 1px;
  margin-left: ${({ theme }) => theme.spacings.large}px;
  margin-right: ${({ theme }) => theme.spacings.large}px;
  background: ${({ theme }) => theme.colors.grey5};
`;
