import { ReactElement } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./Mobile_Nav";

export interface Imenu{
    name: string;
    megaMenu: ReactElement | null;
    hasMegaMenu: boolean
}

const mainMenuItems: Imenu[] = [
    {
        name: 'apps',
        megaMenu : <div></div>,
        hasMegaMenu: true
    },
    {
        name: 'Buy Crypto',
        hasMegaMenu: true,
        megaMenu: <div></div>
    },
    {
        name: 'Markets Trade',
        hasMegaMenu: true,
        megaMenu: <div></div>
    },
    {
        name: 'Buy Crypto',
        hasMegaMenu: true,
        megaMenu: <div></div>
    },
    {
        name: 'Derivates',
        hasMegaMenu: true,
        megaMenu: <div></div>
    },
    {
        name: 'Earn',
        hasMegaMenu: true,
        megaMenu: <div></div>
    },
    {
        name: 'Finance',
        hasMegaMenu: true,
        megaMenu: <div></div>
    },
    {
        name: 'NFT',
        hasMegaMenu: false,
        megaMenu: null
    },
    {
        name: 'Institutional',
        hasMegaMenu: true,
        megaMenu: <div></div>
    },
    {
        name: 'Feed',
        hasMegaMenu: true,
        megaMenu: <div></div>
    }
]


export default function Navbar(){
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="navbar__logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5120 1024" className="logo"><path d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z" p-id="2935"></path></svg>
                    </div>
                    <div className="navbar__menu menu">
                        <ul className="menu__left">
                            {
                                mainMenuItems.map(item => 
                                    <li>
                                        <span>{item.name}</span>
                                        {item.hasMegaMenu && <>
                                            <ToggleIcon />
                                            {item.megaMenu}
                                        </>}
                                    </li>
                                )
                            }
                        </ul>
                        <div className="menu__right">
                            <ul >
                                <li><a href="/">Log In</a></li>
                                <li>
                                    <a href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-1qp65p4"><path d="M13.5 6.379V3h-3v3.379l-2.94-2.94-2.12 2.122L7.878 8H4v3h6.75V8h2.5v3H20V8h-3.879l2.44-2.44-2.122-2.12L13.5 6.378zM4 13.5V20h6.75v-6.5H4zM13.25 20H20v-6.5h-6.75V20z" fill="currentColor"></path></svg>
                                        <span>Register</span>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="css-vjb8uz"><use xlinkHref="#app-download-f"></use></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="header_menu_current_lng" className="css-vjb8uz"><use xlinkHref="#language-f"></use></svg>
                                    </a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="header_menu_current_theme" className="css-5dhyy8"><use xlinkHref="#mode-dark"></use></svg>
                                </li>
                            </ul>
                            <div className="menu__toggle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="css-mykl4n"><use xlinkHref="#menu-hamburger-f"></use></svg>
                            </div>
                        </div>
                        
                    </div>
                </nav>
            </header>
            <MobileNav />
        </>
    );
}


const ToggleIcon = ()=> {
    return (
        <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="navigation__main--item__dropdown"
            width="20"
            height="20"
          >
            <defs>
              <symbol viewBox="0 0 24 24" id="icon-h-dropdown-arrow">
                <path
                  d="M16.5 8.49023V10.7402L12 15.5102L7.5 10.7402V8.49023H16.5Z"
                  fill="currentColor"
                ></path>
              </symbol>
            </defs>
            <use xlinkHref="#icon-h-dropdown-arrow" fill="#707A8A"></use>
        </svg>
    );
}




{/* <header className="nav flex">
<div className='nav__logo'>
    <a href='/'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5120 1024" className="logo"><path d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z" p-id="2935"></path></svg>
    </a>
</div>

<nav className='nav__menu flex'>
    <div className="nav__left">
        <ul className='flex'>
            <li><Link to='/about'>Buy crypto</Link></li>
            <li><a href="/">Market</a></li>
            <li><a href="/">Trade</a></li>
            <li><a href="/">Derivates</a></li>
            <li><a href="/">Earn</a></li>
            <li><a href="/">Finances</a></li>
            <li><a href="/">Nft</a></li>
            <li><a href="/">Institutional</a></li>
            <li><a href="/">Feed</a></li>
        </ul>
    </div>
    <div className="nav__right">
        <ul className='flex'>
            <li><a href="/">Log in</a></li>
            <li><a className="btn btn--primary" href="/">Register</a></li>
            <li>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg"  className="icx css-vjb8uz">
                        <use xlinkHref="#app-download-f"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" id="header_menu_current_lng" className="icx css-vjb8uz"><use xlinkHref="#language-f"></use></svg>
                </a>
            </li>
            <li> <a href="/"><i></i> USD <i></i></a></li>
            <li> 
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg"  id="header_menu_current_theme" className="icx css-lwheey"><use xlinkHref="#mode-light"></use></svg>
                </a>
            </li>
        </ul>
    </div>
</nav>
</header> */}