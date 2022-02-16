import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import productData from '../assets/fake-data/products';
import numberWithComas from '../utils/numberWithComas';

import Helmet from '../components/Helmet';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems.value);
    const [cartProduct, setCartProduct] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCartProduct(productData.getCartItemsInfo(cartItems));
        setTotalProduct(cartItems.reduce((total, item) => total + Number(item.quantity), 0));
        setTotalPrice(
            cartItems.reduce(
                (total, item) => total + Number(item.quantity) * Number(item.price),
                0,
            ),
        );
    }, [cartItems]);

    return (
        <Helmet title='Giỏ Hàng'>
            <div className='cart'>
                <div className='cart__info'>
                    <div className='cart__info__text'>
                        <p>Bạn đang có {totalProduct} trong giỏ hàng</p>
                        <div className='cart__info__text__price'>
                            <span>Thành Tiền</span>
                            <span>{numberWithComas(totalPrice)}</span>
                        </div>
                    </div>
                    <div className='cart__info__btn'>
                        <Button size='block'>đặt Hàng</Button>
                        <Link to='/shop-yolo/catalog'>
                            <Button size='block'>tiếp tục mua sắm</Button>
                        </Link>
                    </div>
                </div>
                <div className='cart__list'>
                    {
                        cartProduct.map((item, index) => (
                            <CartItem key={index} item={item}/>
                        ))
                    }
                </div>
            </div>
        </Helmet>
    );
};

export default Cart;
