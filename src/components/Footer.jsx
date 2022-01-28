import Grid from '../components/Grid';
import logo from '../assets/images/Logo-2.png';
import {Link} from 'react-router-dom';

const footerAboutLinks = [
    {
        display: 'Giới Thiệu',
        path: '/about',
    },
    {
        display: 'Liên Hệ',
        path: '/about',
    },
    {
        display: 'Tin Tức',
        path: '/about',
    },
    {
        display: 'Hệ Thống Của Hàng',
        path: '/about',
    },
];

const footerCustomerLinks = [
    {
        display: 'Chính sách bảo hành',
        path: '/about',
    },
    {
        display: 'Chính sách đổi trả',
        path: '/about',
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/about',
    },
];

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <Grid col={4} mdCol={2} smCol={1} gap={10}>
                    <div>
                        <div className='footer__title'>Tổng đài hỗ trợ</div>
                        <ul className='footer__content'>
                            <li>
                                Liên hệ đặt hàng <strong>0987954221</strong>
                            </li>
                            <li>
                                Thắc mắc đơn hàng <strong>0987954221</strong>
                            </li>
                            <li>
                                Góp ý , khiếu nại <strong>0987954221</strong>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='footer__title'>Về Yolo</div>
                        <ul className='footer__content'>
                            {footerAboutLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <div className='footer__title'>Chăm sóc khách hàng</div>
                        <ul className='footer__content'>
                            {footerCustomerLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='footer__about'>
                        <p>
                            <Link to='/'>
                                <img className='footer__logo' src={logo} alt='' />
                            </Link>
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium vero dicta ipsam fugit, sunt soluta accusamus magnam modi. Ducimus nulla modi quos ex eaque quo laudantium voluptates officia repudiandae ipsum!
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    );
};

export default Footer;
