import { useState,useEffect }from "react"

const UsersList = () =>{

    const [users, setUsers]= useState ([])
    const paginaApi="https://randomuser.me/api/?results=5"

    useEffect(() => {
        fetch (paginaApi)
            .then(response => response.json())//hace esto y despues lo siguiente. si falla da catch error
            .then(data => setUsers(data.results))
            .catch(error => console.log(error))
    }, [users])

    return (
        <div>
            <h1>Listado de usuarios: </h1>
            <ul>
                {users.map(user => <li>{user.name.first}</li>)}
            </ul>
        </div>
    )


}
export default UsersList