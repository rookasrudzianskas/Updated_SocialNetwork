import React from 'react';
import {DotsHorizontalIcon} from "@heroicons/react/outline";

const Post = ({username, caption, id, img, userImg}) => {
    return (
        <div>
            <div className="flex items-center p-5">
                <img src={img} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
                <p>{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>
        </div>
    );
};

export default Post;
