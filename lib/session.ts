import {getServerSession} from 'next-auth/next';
import {NextAuthOptions, User } from 'next-auth';
import {AdapterUser} from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';
import JsonWebToken  from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { SessionInterface } from '@/common.types';

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    // jwt: {
    //     encode: ({secret, token}) => {
            
    //     },
    //     decode: async ({secret, token}) => {

    //     }
    // },

    theme: {
        colorScheme: 'light',
        logo: '/logo.png'
    },
    callbacks: {
        async session({session}) {
            return session;
      },
      // this code mean the type of user that can sign in, either google user or user who signed up on website and is saved on database
      async signIn({user}: {
        user: AdapterUser | User
      }) {
        try {

            // THE CODE BELOW IS WHAT WILL GET THE CONNECTION TO THE DB FOR EXISITING USER OR CREATE ONE ON THE DB:
            // THIS CODE WILL ALLOW USERS TO HAVE ATTACHED PROJECTS.
            //get user if they exist:

            // if they dont exist, create them:

            return true

            // code line below: returns any error:
        } catch (error: any) {
            console.log(error);
            return false;
        }
      }
    }
}

export async function getCurrentUser() {

    const session = await getServerSession(authOptions) as SessionInterface;

    return session; 
}