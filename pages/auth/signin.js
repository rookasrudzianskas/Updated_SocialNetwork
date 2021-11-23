import React from 'react';
import {getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

// Browser ⁉️
const signIn = ({ providers }) => {
    return (
        <>
            <Header />

            <div>

                <img src="https://links.papareact.com/ocw" alt=""/>
                
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => SignIntoProvider(provider.id)}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>


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
