import React from 'react';

function Header({add}) {
    return (
        <>
      <header>
        {/* <nav className='nav-container'> */}
          <div className="nav-wrapper">
            <h1 className='title'>Userlist</h1>
            <button
              className="waves-effect waves-light btn"
              onClick={() => add()}>
              Download userlist
            </button>
          </div>
        {/* </nav> */}
      </header>
    </>
    );
}

export default Header;