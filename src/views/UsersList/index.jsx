import { useState,useEffect }from "react";
import  "./style.css";
import Card from '../../components/Card'

const UsersList = () =>{

    const [users, setUsers] = useState ([])

    const paginaApi="https://randomuser.me/api/?results=5";

    useEffect(() => {
        fetch (paginaApi)//busca la pagina
            .then(response => response.json())//hace esto y despues lo siguiente. si falla da catch error
            .then(data => setUsers(data.results))//define el estado de los usuarios
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
          ,  <h1>Listado de usuarios: </h1>
            <div class="cards">
                <div class="card">
                    <Card
                    name={users.map(user => <li>{user.name.first}</li>)}
                    photo={users.map(user => <img src={user.picture.large}/>)}
                    country={users.map(user => <li>{user.location.country}</li>)}
                    city={users.map(user => <li>{user.location.city}</li>)}
                    />                    
                </div>
            </div>
        </div>
    )
}
export default UsersList

