import logo from '../image/Logo.svg'
import Container from 'react-bootstrap/Container';



function Nav() {
    return (
        <nav>
            <a herf='/'>
                <img src={logo} alt='logo' />
            </a>
{/*             <div>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div> */}
            <ul>
                <li>
                    <a herf="/">Home</a>
                </li>
                <li>
                    <a herf="/">About</a>
                </li>
                <li>
                    <a herf="/">Menu</a>
                </li>
                <li>
                    <a herf="/">Reservations</a>
                </li>
                <li>
                    <a herf="/">Order Online</a>
                </li>
                <li>
                    <a herf="/">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;