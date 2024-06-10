import { useState,useEffect }from "react";
import {style} from  "../UsersList/style";
import Card from '../../components/Card/index'

const UsersList = ( props ) =>{

    return (
        <div>
            <h1>Listado de usuarios: </h1>
            <div class="cards">
                <div class="card">

                {
                    props.users.map((user, index) => (
                        <Card key={index} user={user}/>/*siempre que hacemos un map tenemos que tenrr un key y poner un index que seria como un id */
                    ))
                }
                    {/*<Card
                    name={users.map(user => <li>{user.name.first}</li>)}
                    photo={users.map(user => <img src={user.picture.large} alt="imagen user"/>)} 
                    country={users.map(user => <li>{user.location.country}</li>)}
                    city={users.map(user => <li>{user.location.city}</li>)}
            /> */}                   
                </div>
            </div>
        </div>
    )
}
export default UsersList

