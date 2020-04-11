import React from 'react';
import classes from './Navigationbar.module.css'
import Logo from '../../assets/logo.png';

const Navigationbar = () =>{

    
    return(
        <div  className={classes.Navigationbar}>
            <a href="/" className={classes.Circle}>
                <img src={Logo} alt="logo" className={classes.Logo}/>
            </a>
        </div>
    )
}

export default Navigationbar;