import React from 'react';

const MiniProfile = () => {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src="https://avatars.githubusercontent.com/u/38469892?v=4" alt="" className="rounded-full border p-[2px] h-16 w-16"/>

            <div className="flex-1 mx-4">
                <h2 className="font-bold">rookasrudzianskas</h2>
                <h3 className="text-sm text-gray-400">Welcome to the Instagram</h3>
            </div>

            <button className="text-blue-400 text-sm font-semibold">Sign out</button>
        </div>
    );
};

export default MiniProfile;
