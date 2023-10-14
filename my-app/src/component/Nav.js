import logo from '../image/Logo.svg'
import Container from 'react-bootstrap/Container';
import { useState } from 'react';



function Nav() {
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    };
    return (
        <nav>
            <ul className='direactBar'>
                <li className='Nav-hover-pointer-effect'>
                    <a herf='/'>
                        <img src={logo} alt='logo' />
                    </a>
                </li>
                <div className='hambergerIcon Nav-hover-pointer-effect'>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <ul className='nav-link1'>
                {/* <ul className='navLink'> */}
                    <li className='Nav-hover-effect'>
                        <a herf="#">Home</a>
                    </li>
                    <li className='Nav-hover-effect'>
                        <a herf="#">About</a>
                    </li>
                    <li className='Nav-hover-effect'>
                        <a herf="#">Menu</a>
                    </li>
                    <li className='Nav-hover-effect'>
                        <a herf="#">Reservations</a>
                    </li>
                    <li className='Nav-hover-effect'>
                        <a herf="#">Order Online</a>
                    </li>
                    <li className='Nav-hover-effect'>
                        <a herf="#">Login</a>
                    </li>
                </ul>

            </ul>
        </nav>
    );
}

export default Nav;