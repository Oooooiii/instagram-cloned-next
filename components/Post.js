import { BookmarkIcon, DotsHorizontalIcon, EmojiHappyIcon, ChatIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { addDoc, setDoc, doc, deleteDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import Moment from 'react-moment'

function Post({ id, username, userImg, img, caption }) {
    const { data: session } = useSession();
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(() =>
        onSnapshot(
            query(
                collection(db, 'posts', id, 'comments'),
                orderBy('timestamp', 'desc')
            ),
            (snapshot) => setComments(snapshot.docs)
        ),
        [db, id]
    );

    useEffect(() => {
        onSnapshot(
            collection(db, 'posts', id, 'likes'),
            (snapshot) => { setLikes(snapshot.docs) }
        )
    }, [db, id])

    useEffect(() => {
        setHasLiked(
            (likes.findIndex((like) => (like.id === session?.user?.uid)) !== -1)
        )
    }, [likes])

    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session.user.username
            })
        }
    }

    const sendComment = async (e) => {
        e.preventDefault();

        const commentSentTo = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentSentTo,
            username: session.user.username,
            userImg: session.user.image,
            timestamp: serverTimestamp(),
        });

        console.log(comment)
    };

    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img className="rounded-full h-12 w-12 object-contain border p-1 mr-3" src={userImg} alt="" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* Image */}
            <img className="object-cover w-full" src={img} alt="" />

            {/* Buttons */}
            {session && (
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        {
                            hasLiked ? (
                                <HeartIconFilled onClick={likePost} className="btn text-red-500" />
                            ) : (
                                <HeartIcon onClick={likePost} className="btn" />
                            )
                        }
                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />
                    </div>

                    <BookmarkIcon className="btn" />
                </div>
            )}

            {/* Captions */}
            <p className="p-5 truncate">
                {
                    likes.length > 0 && (
                        <span className="font-bold mb-1 flex">{likes.length} likes</span>
                    )
                }
                <span className="font-bold mr-1">{username} </span>
                {caption}
            </p>

            {/* Comments */}
            {
                comments.length > 0 && (
                    <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                        {comments.map((comment) => (
                            <div key={comment.id} className="flex items-center space-x-2 mb-3">
                                <img className="rounded-full h-7" src={comment.data().userImg} alt="" />
                                <p className="text-sm flex-1">
                                    <span className="font-bold">{comment.data().username}</span>
                                    {" "}
                                    {comment.data().comment}
                                </p>

                                <Moment fromNow className="pr-5 text-xs">
                                    {comment.data().timestamp?.toDate()}
                                </Moment>
                            </div>
                        ))}
                    </div>
                )
            }

            {/* Input box */}
            {session && (
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7" />
                    <input className="flex-1 border-none focus:ring-0 outline-none" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..." type="text" />
                    <button className="font-semibold text-blue-400" type="submit" disabled={!comment.trim()} onClick={sendComment}>
                        Post
                    </button>
                </form>
            )}
        </div>
    );
}

export default Post;
