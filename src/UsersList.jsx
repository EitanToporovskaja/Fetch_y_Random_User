import { useState,useEffect }from "react"

const UsersList = () =>{

    const [users, setUsers] = useState ([])
    const [ubicacion, setUbicacion] = useState([])

    const paginaApi="https://randomuser.me/api/?results=5"

    useEffect(() => {
        fetch (paginaApi)//busca la pagina
            .then(response => response.json())//hace esto y despues lo siguiente. si falla da catch error
            .then(data => setUsers(data.results))//define el estado de los usuarios
            .then(data => setUbicacion(data.results))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>Listado de usuarios: </h1>
            <ul> 
                {users.map(user => <li>{user.name.first}</li>)}
            </ul>
            <ul> 
                {users.map(user => <li>{user.location.city}</li>)}
            </ul>
            <ul> 
                {users.map(user => <li>{user.location.state}</li>)}
            </ul>  
            <div> 
                {users.map(user => <img src={user.picture.large}/>)}
            </div>
        </div>
    )


}
export default UsersList