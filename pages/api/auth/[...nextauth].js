import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    // this is a little bit customized landing page for the logo 💁
    // theme: {
    //     logo: 'https://links.papareact.com/sq0',
    //     brandColor: '#F13287',
    //     colorScheme: 'auto',
    // }

    // 🔥 pages

    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session.user.name.split(' ').join(' ').toLocaleLowerCase();

            session.user.uid = token.sub;
        }
    }
});
