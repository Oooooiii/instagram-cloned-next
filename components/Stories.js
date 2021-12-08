// import faker from 'faker'
// import { useEffect, useState } from 'react'
import Story from './Story'
import { useSession } from 'next-auth/react'

const suggestions = [
    {
        id: "1",
        username: "Aliame",
        avatar: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    },
    {
        id: "2",
        username: "James",
        avatar: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
    {
        id: "3",
        username: "Robert",
        avatar: "https://images.unsplash.com/photo-1600353067943-bda64e5a5178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
        id: "4",
        username: "John",
        avatar: "https://images.unsplash.com/photo-1600353068855-25f52306464b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
        id: "5",
        username: "Michael",
        avatar: "https://images.unsplash.com/photo-1600353068303-69a15ebd8cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
        id: "6",
        username: "William",
        avatar: "https://images.unsplash.com/photo-1600070087220-4f2f77d40521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80",
    },
    {
        id: "7",
        username: "David",
        avatar: "https://images.unsplash.com/photo-1600070077692-d6c610986bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: "8",
        username: "Dalya",
        avatar: "https://images.unsplash.com/photo-1600603477970-7152b8ea521b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: "9",
        username: "Richard",
        avatar: "https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: "10",
        username: "Joseph",
        avatar: "https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
    },
    {
        id: "11",
        username: "Thomas",
        avatar: "https://images.unsplash.com/photo-1607960402358-a5ceb04ebeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: "12",
        username: "Charles",
        avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
    },
    {
        id: "13",
        username: "Christopher",
        avatar: "https://links.papareact.com/3ke",
    },
    {
        id: "14",
        username: "Daniel",
        avatar: "https://links.papareact.com/3ke",
    },
    {
        id: "15",
        username: "Matthew",
        avatar: "https://links.papareact.com/3ke",
    },
]

function Stories() {
    // const [suggestions, setSuggestions] = useState([]);

    // useEffect(() => {
    //     const suggestions = [...Array(20)].map((_, i) => ({
    //         ...faker.helpers.contextualCard(),
    //         id: i
    //     }))

    //     setSuggestions(suggestions)
    // }, [])

    const { data: session } = useSession();

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {
                session && (
                    <Story img={session.user.image} username={session.user.username} />
                )
            }

            {suggestions.map(profile => (
                <Story key={profile.id} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    )
}

export default Stories
