import React from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline";
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid";

const Post = ({username, caption, id, img, userImg}) => {
    return (
        <div className="bg-white my-7 border rounded-sm">
            <div className="flex items-center p-5">
                <img src={img} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            <img src={img} className="object-cover w-full" alt="img is here"/>

            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className="btn" />
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />
                </div>
                <BookmarkIcon className="btn" />
            </div>

            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username} </span>{caption}
            </p>

            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7" />
                <input type="text" className="border-none flex-1 focus:ring-0" placeholder="Add a comment..."/>
            </form>

        </div>
    );
};

export default Post;
