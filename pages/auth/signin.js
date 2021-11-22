import React from 'react';
import {getProviders, signIn } from "next-auth/react";

// Browser ⁉️
const signIn = ({ providers }) => {
    return (
        <div>

        </div>
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
