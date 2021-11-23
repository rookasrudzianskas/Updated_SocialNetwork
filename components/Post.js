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
import {useSession} from "next-auth/react";
import {useState} from 'react';
import {addDoc, setDoc, collection, deleteDoc, onSnapshot, orderBy, query, serverTimestamp, doc} from "@firebase/firestore";
import {db} from "../firebase";
import {useEffect} from 'react';
import Moment from "react-moment";

const Post = ({username, caption, id, img, userImg}) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    const {data: session} = useSession();


    useEffect(() =>  onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), snapshot => setComments(snapshot.docs)), [db, id]);

    useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'), snapshot => setLikes(snapshot.docs)) ,[db, id]);

    useEffect(() => {
            setHasLiked(likes.findIndex(like => (like.id === session?.user?.uid)) !== -1
        );
    }, [likes]);

    const likePost = async () => {
        if(hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session.user.username,
            });
        }
    }

    const sendComment = async (e) => {
        e.preventDefault();
        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
    }

    return (
        <div className="bg-white my-7 border rounded-sm">
            <div className="flex items-center p-5">
                <img src={img} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            <img src={img} className="object-cover w-full" alt="img is here"/>

            {session && (
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        {
                            hasLiked ? (
                                <HeartIcon onClick={likePost} className="btn" />
                            ) : (
                                <HeartIconFilled onClick={likePost} className="btn text-red-600" />
                            )
                        }
                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>
            )}


            <p className="p-5 truncate">
                {likes.length > 0 && (
                    <p className="font-bold mb-1">{likes.length} likes</p>
                )}
                <span className="font-bold mr-1">{username} </span>{caption}
            </p>

            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map(comment => (
                        <div className="flex items-center space-x-2 mb-3" key={comment.id}>
                            <img  src={comment.data().userImage} alt="" className="h-7 rounded-full"/>
                            <p className="text-sm flex-1"><span className="font-bold">{comment.data().username} 👉 </span>{comment.data().comment}</p>
                            <Moment className='pr-10 text-xs' fromNow>{comment.data().timestamp?.toDate()}</Moment>
                        </div>
                    ))}
                </div>
            )}

            {session && (
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7" />
                    <input value={comment} onChange={e => setComment(e.target.value)} type="text" className="border-none flex-1 focus:ring-0 outline-none" placeholder="Add a comment..."/>
                    <button onClick={sendComment} type={'submit'} disabled={!comment.trim()} className="font-semibold text-blue-400">Post</button>
                </form>
            )}

        </div>
    );
};

export default Post;
