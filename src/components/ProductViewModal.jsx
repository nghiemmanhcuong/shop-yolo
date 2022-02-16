import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';

import ProductView from './ProductView';
import productData from '../assets/fake-data/products';
import {remove} from '../store/product-modal/product-modal-slice';

import Button from './Button';

const ProductViewModal = () => {
    const [product, setProduct] = useState(undefined);
    const productSlug = useSelector((state) => state.productModal.value);
    const dispatch = useDispatch();

    useEffect(() => {
        setProduct(productData.getProductBySlug(productSlug));
    }, [productSlug]);

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className='product-view__modal__content'>
                <ProductView product={product} />
                <div className='product-view__modal__content__btn'>
                    <Button size='sm' onClick={() => dispatch(remove())}>
                        đóng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
