import Logo from '../assets/Memory Game logo.webp';
import '../styles/Header.css';

function Header(){
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={Logo} alt="Memory Challenge Logo" />
            </div>
        </div>
    );
}

export default Header;