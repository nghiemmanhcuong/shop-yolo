import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from './Button';

import { set } from '../store/product-modal/product-modal-slice';
import numberWithComas from'../utils/numberWithComas';

const ProductCart = (props) => {
    const dispatch = useDispatch();

    return (
        <div className='product-card'>
            <Link to={`/shop-yolo/catalog/${props.slug}`}>
                <div className='product-card__image'>
                    <img src={props.img01} alt='product image!' />
                    <img src={props.img02} alt='product image!' />
                </div>
                <h3 className="product-card__name">
                    {props.name}
                </h3>
                <div className='product-card__price'>
                    {numberWithComas(props.price)}<sup>đ</sup>
                    <span className='product-card__price__old'>
                        <del>{numberWithComas(399000)}<sup>đ</sup></del>
                    </span>
                </div>
            </Link>
            <div className='product-card__btn'>
                <Button
                    size='sm'
                    icon='bx bx-cart'
                    animate={true}
                    onClick = {() => dispatch(set(props.slug))}
                >
                    chọn mua      
                </Button>
            </div>
        </div>
    );
};

ProductCart.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};

export default ProductCart;
