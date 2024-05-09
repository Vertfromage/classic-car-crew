// routes/auth.js

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers as needed
  ],
  // Add database connection and other options as needed
};

export default (req, res) => NextAuth(req, res, options);
