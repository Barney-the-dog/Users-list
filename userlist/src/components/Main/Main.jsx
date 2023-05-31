import React from 'react';
import Userlist from '../Userlist/Userlist';

function Main({users}) {

  return (
    <>
      <div className='main'>
        <Userlist users={users}/>
      </div>
    </>
  );
}

export default Main;