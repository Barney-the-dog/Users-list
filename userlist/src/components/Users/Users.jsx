import React from 'react';

function Users({users}) {

    return (
      <>
        <div className="card" >
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{users.name}<i className="material-icons right">more_vert</i></span>
          <p><a className='card-link' href={users.website}>{users.website}</a></p>
        </div>
        <div className="card-reveal">
          <p><span className='card-text'>Username:</span> {users.username}</p>
          <p><span className='card-text'>Email:</span> {users.email}</p>
          <p><span className='card-text'>Phone:</span> {users.phone}</p>
        </div>
      </div>
      </>
    );
}

export default Users;