import React from 'react';
import '../../index.css'

function Header({add}) {
    return (
        <>
      <header>
          <div className="nav-wrapper">
            <h1 className='title'>Userlist</h1>
            <button
              className="waves-effect waves-light btn"
              onClick={() => add()}>
              Download userlist
            </button>
          </div>
      </header>
    </>
    );
}

export default Header;