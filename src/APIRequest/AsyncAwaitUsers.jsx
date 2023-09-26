import axios from "axios";
import { useEffect, useState } from "react";

const AsyncAwaitUsers = () => {
    const [usersData, setUsersData] = useState();

    const getData = async () => {
        try {
            const response = await axios("https://jsonplaceholder.typicode.com/users");
            const data = await response.data;
            setUsersData(data)
        }
        catch (error) {
            console.lof(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const createUserList = () => {
        return usersData.map((user) => { // [{} , {} , {}], []
            return <li key={user.id} className="my-4"><h2>{user.name}</h2><p className="text-l text-red-600">{user.username}</p></li>
        })
    }

    return <>
        <h1>Users </h1>
        <ul>{usersData && createUserList()}</ul>
    </>
}

export default AsyncAwaitUsers