import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      userName: string;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
      accessToken: string;
      refreshToken: string;
    };
  }
}
