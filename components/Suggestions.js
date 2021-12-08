const suggestions = [
    {
        id: "1",
        username: "Aliame",
        avatar: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        company: "	Reliance Industries Ltd."
    },
    {
        id: "2",
        username: "James",
        avatar: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        company: "Oil And Natural Gas Corporation Ltd."
    },
    {
        id: "3",
        username: "Robert",
        avatar: "https://images.unsplash.com/photo-1600353067943-bda64e5a5178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        company: "	Hindustan Petroleum Corporation Ltd."
    },
    {
        id: "4",
        username: "John",
        avatar: "https://images.unsplash.com/photo-1600353068855-25f52306464b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        company: "Tata Consultancy Services Ltd."
    },
    {
        id: "5",
        username: "Michael",
        avatar: "https://images.unsplash.com/photo-1600353068303-69a15ebd8cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        company: "Alphabet Inc."
    },
    {
        id: "6",
        username: "William",
        avatar: "https://images.unsplash.com/photo-1600070087220-4f2f77d40521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80",
        company: "Apollo Global Management"
    },
]


function Suggestions() {
    return (
        <div className="ml-10 mt-4">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-gray-400 font-bold">Suggestions for you</h3>
                <button className="font-semibold text-gray-600">See All</button>
            </div>

            {
                suggestions.map((profile) => (
                    <div
                        key={profile.id}
                        className="flex items-center justfy-between mt-3"
                    >
                        <img className="rounded-full w-10 h-10 object-cover border p-[2px]" src={profile.avatar} alt="" />

                        <div className="flex-1 ml-4 mr-1">
                            <h2 className="font-semibold text-sm">{profile.username}</h2>
                            <h3 className="text-xs text-gray-400">{profile.company}</h3>
                        </div>

                        <button className="text-blue-400 text-sm font-semibold">Follow</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions
