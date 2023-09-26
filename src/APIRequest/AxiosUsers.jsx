import axios from "axios";
import { useEffect, useState } from "react";

const AxiosUsers = () => {
    const [usersData, setUsersData] = useState();

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(response => setUsersData(response.data))
            .catch(error => console.log(error))
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

export default AxiosUsers