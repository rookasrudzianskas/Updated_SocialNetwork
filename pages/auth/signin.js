import React from 'react';
import {getProviders } from "next-auth/react";

// Browser ⁉️
const signIn = ({ providers }) => {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
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

    const providers = getProviders();

    return {
        props: {
            // props that you want to pass to the page
            providers,
        },
    };
}
