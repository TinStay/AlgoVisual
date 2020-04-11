import React from 'react';
import Logo from '../../assets/logo.png';


const Navigationbar = (props) =>{

    
    return(
        <div  className="navigationbar">
            <a href="/" className='cirle'>
                <img src={Logo} alt="logo" className="logo" />
            </a>
            <button className='btn' onClick={props.toggleDarkMode}>Dark Mode</button>
        </div>
    )
}

export default Navigationbar;