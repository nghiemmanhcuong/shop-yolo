import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import numberWithComas from '../utils/numberWithComas';
import {updateItems, deleteItem} from '../store/shopping-cart/cartItemsSlide';

import {Link} from 'react-router-dom';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const [item, setItem] = useState(props.item);
    const [quantity, setQuantity] = useState(props.item.quantity);

    useEffect(() => {
        setItem(props.item);
        setQuantity(props.item.quantity);
    }, [props.item]);

    const updateQuantity = (opt) => {
        if (opt === '+') {
            dispatch(updateItems({...item, quantity: quantity + 1}));
        }

        if (opt === '-') {
            dispatch(updateItems({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}));
        }
    };

    const removeItem = () => {
        dispatch(deleteItem(item));
    };

    return (
        <div className='cart__item'>
            <div className='cart__item__image'>
                <img src={item.product.image01} alt='' />
            </div>
            <div className='cart__item__info'>
                <div className='cart__item__info__name'>
                    <Link to={`/category/${item.slug}`}>
                        {item.product.title} - {item.color} - {item.size}
                    </Link>
                </div>
                <div className='cart__item__info__price'>{numberWithComas(item.product.price)}</div>
                <div className='product__info__item__quantity'>
                    <div
                        className='product__info__item__quantity__btn'
                        onClick={() => updateQuantity('-')}
                    >
                        <i className='bx bx-minus'></i>
                    </div>
                    <div className='product__info__item__quantity__input'>{quantity}</div>
                    <div
                        className='product__info__item__quantity__btn'
                        onClick={() => updateQuantity('+')}
                    >
                        <i className='bx bx-plus'></i>
                    </div>
                </div>
                <div className='cart__item__info__del' onClick={removeItem}>
                    <i className='bx bx-trash'></i>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default CartItem;
