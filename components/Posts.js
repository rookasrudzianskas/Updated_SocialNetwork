import React from 'react';
import Post from "./Post";
import {useState, useEffect} from 'react';
import {collection, onSnapshot, query, orderBy} from "@firebase/firestore";
import {db} from "../firebase";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() =>  {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
           // realtime listening
           setPosts(snapshot.docs);
        });

        }, [db]);

    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} id={post.id} username={post.data().username} userImg={post.data().profileImg} img={post.data().image} caption={post.data().caption} />
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
