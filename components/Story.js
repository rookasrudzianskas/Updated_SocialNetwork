import React from 'react';

const Story = ({username, img}) => {
    return (
        <div className="">
            <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2" src={img || 'https://avatars.githubusercontent.com/u/38469892?v=4'} alt=""/>
            <p>{username}</p>
        </div>
    );
};

export default Story;
