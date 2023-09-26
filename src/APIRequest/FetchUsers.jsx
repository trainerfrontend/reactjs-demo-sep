import { useEffect, useState } from "react";

const FetchUsers = () => {
    const [usersData, setUsersData] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsersData(data));
    }, [])

    const createUserList = () => {
        return usersData.map((user) => { // [{} , {} , {}], []
            return <li key={user.id} className="my-4"><h2>{user.name}</h2><p className="text-l text-red-600">{user.email}</p></li>
        })
    }

    return <>
        <h1>Users </h1>
        <ul>{usersData && createUserList()}</ul>
    </>
}

export default FetchUsers