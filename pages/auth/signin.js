import React from 'react';
import {getProviders, signIn } from "next-auth/react";

const signIn = () => {
    return (
        <div>

        </div>
    );
};

export default signIn;


export async function getServerSideProps() {

    const providers = getProviders();

    return {
        props: {
            // props that you want to pass to the page
        },
    };
}
