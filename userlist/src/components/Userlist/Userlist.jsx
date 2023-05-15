import React from 'react';
import Users from '../Users/Users';

function Userlist({users}) {
    return (
        <>
        <div className='card-container'>
            {users.map((user) => (
              <div key={user.id + Math.random()}>
                <Users users={users}/>
              </div>
            ))}
          </div>
      </>
    );
}

export default Userlist;