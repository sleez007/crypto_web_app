
import Logo from '../assets/static/svg/logo.svg';

export default function Navbar(){
    return (
        <header className="nav">
            <div className='nav__logo'>
                
                <a href="/"><img src={Logo} alt='Website Logo' /></a>
            </div>

            <nav className='nav__menu'>
                <div className="nav__left">
                    <ul>
                        <li><a href="/">Buy crypto</a></li>
                        <li><a href="/">Buy crypto</a></li>
                        <li><a href="/">Buy crypto</a></li>
                        <li><a href="/">Buy crypto</a></li>
                        <li><a href="/">Buy crypto</a></li>
                        <li><a href="/">Buy crypto</a></li>
                        <li><a href="/">Buy crypto</a></li>
                        <li><a href="/">Buy crypto</a></li>
                    </ul>
                </div>
                <div className="nav__right">
                    <ul>
                        <li><a href="/">Log in</a></li>
                        <li><a href="/">Register</a></li>
                        <li><a href="/">[]</a></li>
                        <li><a href="/">[]</a></li>
                        <li><a href="/">[]</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}