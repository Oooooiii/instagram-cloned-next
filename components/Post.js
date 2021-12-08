import {
    BookmarkIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    ChatIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"

function Post({ id, username, userImg, img, caption }) {
    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img className="rounded-full h-12 w-12 object-contain border p-1 mr-3" src={userImg} alt="" />
                <p className="flex-1 font-bold" >{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* Image */}
            <img className="object-cover w-full" src={img} alt="" />

            {/* Buttons */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className="btn" />
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />
                </div>

                <BookmarkIcon className="btn" />
            </div>

            {/* Captions */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1" >{username} </span>
                {caption}
            </p>

            {/* Comments */}

            {/* Input box */}
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7" />
                <input className="flex-1 border-none focus:ring-0 outline-none" placeholder="Add a comment..." type="text" />
                <button className="font-semibold text-blue-400">Post</button>
            </form>
        </div>
    )
}

export default Post;
