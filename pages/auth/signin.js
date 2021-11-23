import React from 'react';
import {getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

// Browser ⁉️
const signIn = ({ providers }) => {
    return (
        <>
            <Header />
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => SignIntoProvider(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    );
};

export default signIn;


// Server side render
export async function getServerSideProps() {

    const providers = await getProviders();

    return {
        props: {
            // props that you want to pass to the page
            providers,
        },
    };
}

//http://localhost:3000/api/auth/callback/google' 👉 for the second one
