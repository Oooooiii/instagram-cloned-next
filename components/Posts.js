import Post from './Post'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'

// const posts = [
//     {
//         id: "1",
//         username: "Mary",
//         userImg: "https://images.unsplash.com/photo-1607960402358-a5ceb04ebeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//         img: "https://images.unsplash.com/photo-1607960402358-a5ceb04ebeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//         caption: "SUBSCRIPT FOR MORE VIDEOS",
//     },
//     {
//         id: "2",
//         username: "David",
//         userImg: "https://images.unsplash.com/photo-1600603477970-7152b8ea521b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//         img: "https://images.unsplash.com/photo-1600603477970-7152b8ea521b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//         caption: "The following table shows the 100 most popular given names for male and female babies born during the last 100 years, 1921-2020. ",
//     },
//     {
//         id: "3",
//         username: "Joseph",
//         userImg: "https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
//         img: "https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
//         caption: "These time-tested popular names were taken from a universe that includes 176,490,003 male births",
//     },
// ]

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs)
        })
    }, [db])

    // console.log(posts.map((post) => {
    //     console.log(post.data().profileImg)
    // }))

    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))}
        </div>
    )
}

export default Posts
