import React from 'react';
import {useAuth0, User} from '@auth0/auth0-react';

const Profile = () => {

  const {user, isAuthenticated} = useAuth0();

  return (
    isAuthenticated && (
      <div>

        <div>
          <img src={user.picture} alt={user.name}></img>
          <h2>User: {user.name}</h2>
          <p>E-mail: {user.email}</p>
          <p>Imagen: {user.picture}</p>
        </div>

        {JSON.stringify(user)} 

    </div>
    )
    
  )
}

export default Profile
