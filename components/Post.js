import React from 'react';
import {DotsHorizontalIcon} from "@heroicons/react/outline";

const Post = ({username, caption, id, img, userImg}) => {
    return (
        <div className="bg-white my-7 border rounded-sm">
            <div className="flex items-center p-5">
                <img src={img} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            <img src={img} className="object-cover w-full" alt="img is here"/>

        </div>
    );
};

export default Post;
