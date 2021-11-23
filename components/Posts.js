import React from 'react';
import Post from "./Post";
import {useState} from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() =>  {

    }, []);

    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
            ))}
        </div>
    );
};

export default Posts;



















// const posts = [
//     {
//         id: '123',
//         username: 'rookasrudzianskas',
//         userImg: 'https://avatars.githubusercontent.com/u/38469892?v=4',
//         img: 'https://avatars.githubusercontent.com/u/38469892?v=4',
//         caption: 'This is dope 🤩, Subscribe and destroy the like button! 🍠',
//     },
//     {
//         id: '123',
//         username: 'rookasrudzianskas',
//         userImg: 'https://avatars.githubusercontent.com/u/38469892?v=4',
//         img: 'https://avatars.githubusercontent.com/u/38469892?v=4',
//         caption: 'This is dope 🌃, Subscribe and destroy the like button! 🤟',
//     }
// ]
