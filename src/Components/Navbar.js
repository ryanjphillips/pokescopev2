import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiLogIn } from 'react-icons/fi'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-div">
                <div className="nav-hamburger">
                    <div className="nav-hamburger-div">
                        <GiHamburgerMenu style={{color: '#E5D255'}} />
                    </div>
                </div>
                <div className="nav-title">
                    <div className="nav-title-div">
                        <h1 className="nav-title-header">
                            PokeScope
                        </h1>
                        <p className="nav-title-paragraph"> 
                            A Pokedex for the modern web!
                        </p>
                    </div>
                </div>
                <div className="nav-login">
                    <div className="nav-login-div">
                        <FiLogIn style={{color: '#E5D255'}}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
