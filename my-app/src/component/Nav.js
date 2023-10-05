import logo from '../image/Logo.svg'

function Nav() {
    return (
        <nav>
            <a herf='/'>
                <img src={logo} alt='logo' />
            </a>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    );
}

export default Nav;