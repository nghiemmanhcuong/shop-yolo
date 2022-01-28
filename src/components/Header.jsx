import { useRef,useEffect } from 'react'
import logo from '../assets/images/Logo-2.png';
import {Link, useLocation} from 'react-router-dom';

const mainNav = [
    {
        display: 'Trang Chủ',
        path: '/',
    },
    {
        display: 'Sản Phẩm',
        path: '/catalog',
    },
    {
        display: 'Phụ Kiện',
        path: '/accessories',
    },
    {
        display: 'Liên Hệ',
        path: '/contact',
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const {pathname} = useLocation();
    const activeNav = mainNav.findIndex((e) => e.path === pathname);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink');
            }else {
                headerRef.current.classList.remove('shrink');
            }
        })
        return () => {
            window.removeEventListener('scroll');
        }
    }, [])

    const menuRef = useRef(null);
    const menuToggle = () => menuRef.current.classList.toggle('active');

    return (
        <div ref={headerRef} className='header'>
            <div className='container'>
                <div className='header__logo'>
                    <Link to='/'>
                        <img src={logo} alt='logo image' />
                    </Link>
                </div>
                <div className='header-menu'>
                    <div className='header-menu-mobile-toggle' onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className='header-menu-left'  ref={menuRef}>
                        <div className='header-menu-left-close' onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {mainNav.map((item, index) => (
                            <div
                                key={index}
                                className={`header-menu__item header-menu-left__item ${
                                    index === activeNav ? 'active' : ''
                                }`}
                                onClick={menuToggle}
                            >
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className='header-menu-right'>
                        <div className='header-menu-right__item header-menu__item'>
                            <i className='bx bx-search'></i>
                        </div>
                        <div className='header-menu-right__item header-menu__item'>
                            <Link to='/cart'>
                                <i className='bx bx-shopping-bag'></i>
                            </Link>
                        </div>
                        <div className='header-menu-right__item header-menu__item'>
                            <i className='bx bx-user'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
