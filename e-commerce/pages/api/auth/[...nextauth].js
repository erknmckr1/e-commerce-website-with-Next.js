import User from "@/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import bcrypt from 'bcrypt'
dbConnect();

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email: email });
        if (!user) {
          throw new Error("Account not found!");
        }
        if (user) {
          return signInUser({ user, password });
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  database: process.env.MONGO_URI,
  secret:"secret",
  session:{
    maxAge: 30 * 60,
  }
};

//! Kullanıcı sıfresı ıle gırılen sıfre eslesıyor mu ? 
const signInUser = async ({ user, password }) => {
    const isMAtch = await bcrypt.compare(password, user.password);
    if (!isMAtch) {
      throw new Error("Incorrect password!");
    }
    return user;
  };


export default NextAuth(authOptions);
