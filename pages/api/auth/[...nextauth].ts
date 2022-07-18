import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import AppleProvider from 'next-auth/providers/apple';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID!,
    //   clientSecret: process.env.FACEBOOK_SECRET!,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID!,
    //   clientSecret: process.env.GOOGLE_SECRET!,
    // }),
  ],
  callbacks: {},
  secret: process.env.JWT_SECRET,
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
});
