import React from 'react';
import Logo from '../../assets/logoColored.png';
import Switch from "react-switch";


const Navigationbar = (props) =>{

    
    return(
        <div  className="navigationbar" id="home">
            <div href="/" className='cirle'>
                <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="darkmode-container">
                <span className="mr-2">Dark Mode</span>
                <Switch onChange={props.toggleDarkMode} 
                checked={props.isDarkModeOn}
                onColor="#e2b810"
                onHandleColor= "#34495e"
                width={50} 
                checkedIcon={false}
                uncheckedIcon={false}/>
            </div>
        </div>
    )
}

export default Navigationbar;