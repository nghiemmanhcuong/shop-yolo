import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Button from './Button';

import numberWithComas from '../utils/numberWithComas';
import { addItems } from '../store/shopping-cart/cartItemsSlide';

const ProductView = (props) => {
    const dispatch = useDispatch();
    let product = props.product;
    if(props.product === undefined) product = {
        price:'0',
        title:'',
        colors:[],
        size: [],
        slug:''
    }
    const [previewImg, setPreviewImg] = useState(product.image01);
    const [descriptonExpand, setDescriptonExpand] = useState(false);
    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity <= 1 ? 1 : quantity - 1);
        }
    };

    useEffect(() => {
        setPreviewImg(product.image01);
        setQuantity(1);
        setColor(undefined);
        setSize(undefined);
    }, [product]);

    const check = () => {
        if (color === undefined) {
            alert('Vui lòng chọn màu sắc!');
            return false;
        }

        if (size === undefined) {
            alert('Vui lòng chọn màu kích cỡ!');
            return false;
        }

        return true;
    };

    const addTocart = () => {
        if(check()) {
            dispatch(addItems({
                slug:product.slug,
                price:product.price,
                quantity:quantity,
                size:size,
                color:color
            }))
        }
        alert('Đã Thêm Vào Giỏ Hàng')
    }

    const goToTocart = () => {
        if(check()) {
            dispatch(addItems({
                slug:product.slug,
                price:product.price,
                quantity:quantity,
                size:size,
                color:color
            }))
            props.history.push('/cart')
        }
    }

    return (
        <div className='product'>
            <div className='product__images'>
                <div className='product__images__list'>
                    <div
                        className='product__images__list__item'
                        onClick={() => setPreviewImg(product.image01)}
                    >
                        <img src={product.image01} alt='' />
                    </div>
                    <div
                        className='product__images__list__item'
                        onClick={() => setPreviewImg(product.image02)}
                    >
                        <img src={product.image02} alt='' />
                    </div>
                </div>
                <div className='product__images__main'>
                    <img src={previewImg} alt='' />
                </div>
                <div className={`product-description ${descriptonExpand ? 'expand' : ''}`}>
                    <div className='product-description__title'>Chi tiết sản phẩm</div>
                    <div
                        className='product-description__content'
                        dangerouslySetInnerHTML={{__html: product.description}}
                    />
                    <div
                        className='product-description__toggle'
                        onClick={() => setDescriptonExpand(!descriptonExpand)}
                    >
                        <Button size='sm'>{descriptonExpand ? 'thu gọn' : 'xem thêm'}</Button>
                    </div>
                </div>
            </div>
            <div className='product__info'>
                <h1 className='product__info__title'>{product.title}</h1>
                <div className='product__info__item'>
                    <div className='product__info__item__price'>
                        <span>{numberWithComas(product.price)}</span>
                    </div>
                </div>
                <div className='product__info__item'>
                    <div className='product__info__item__title'>Màu Sắc</div>
                    <div className='product__info__item__list'>
                        {product.colors.map((item, index) => (
                            <div
                                key={index}
                                className={`product__info__item__list__item ${
                                    color === item ? 'active' : ''
                                }`}
                                onClick={() => setColor(item)}
                            >
                                <div className={`circle bg-${item}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='product__info__item'>
                    <div className='product__info__item__title'>Kích Cỡ</div>
                    <div className='product__info__item__list'>
                        {product.size.map((item, index) => (
                            <div
                                key={index}
                                className={`product__info__item__list__item ${
                                    size === item ? 'active' : ''
                                }`}
                                onClick={() => setSize(item)}
                            >
                                <span className='product__info__item__list__item__size'>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='product__info__item'>
                    <div className='product__info__item__title'>Số Lượng</div>
                    <div className='product__info__item__quantity'>
                        <div
                            className='product__info__item__quantity__btn'
                            onClick={() => updateQuantity('minus')}
                        >
                            <i className='bx bx-minus'></i>
                        </div>
                        <div className='product__info__item__quantity__input'>{quantity}</div>
                        <div
                            className='product__info__item__quantity__btn'
                            onClick={() => updateQuantity('plus')}
                        >
                            <i className='bx bx-plus'></i>
                        </div>
                    </div>
                </div>
                <div className='product__info__item'>
                    <Button onClick={() => addTocart()}>Thêm vào giỏ hàng</Button>
                    <Button onClick={() => goToTocart()}>Mua Ngay</Button>
                </div>
            </div>
        </div>
    );
};

ProductView.propTypes = {
    product: PropTypes.object,
};

export default withRouter(ProductView);
