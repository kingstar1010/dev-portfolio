import { getProviders, signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';

const LogIn: NextPage = ({ providers }: any) => {
  const { data: session } = useSession();

  return (
    <Main>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id)}
            style={{ color: 'white' }}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </Main>
  );
};

export default LogIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.default.background};
  color: ${({ theme }) => theme.default.fontColor};
  padding: 0 100px;
`;
